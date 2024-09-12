import React, { useState, useEffect } from 'react';
import { List, Button, message, Modal } from 'antd';
import axios from 'axios';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('/api/tickets');
        setTickets(response.data);
      } catch (error) {
        message.error('Failed to load tickets');
      }
    };
    fetchTickets();
  }, []);

  const handleSolveTicket = async (ticketId) => {
    try {
      setLoading(true);
      await axios.post(`/api/ticket/solve/${ticketId}`);
      message.success('Ticket solved successfully!');
      setTickets((prev) => prev.filter((ticket) => ticket.id !== ticketId));
      setSelectedTicket(null); // Close the modal after solving the ticket
    } catch (error) {
      message.error('Failed to solve ticket');
    } finally {
      setLoading(false);
    }
  };

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleCloseModal = () => {
    setSelectedTicket(null);
  };

  return (
    <div>
      <List
        header={<div>Open Tickets</div>}
        bordered
        dataSource={tickets}
        renderItem={(ticket) => (
          <List.Item
            key={ticket.id}
            actions={[
              <Button onClick={() => handleTicketClick(ticket)} type="default">
                View Details
              </Button>,
              <Button onClick={() => handleSolveTicket(ticket.id)} type="primary">
                Solve
              </Button>,
            ]}
          >
            {ticket.description}
          </List.Item>
        )}
      />

      {selectedTicket && (
        <Modal
          title="Ticket Details"
          visible={!!selectedTicket}
          onCancel={handleCloseModal}
          footer={[
            <Button key="close" onClick={handleCloseModal}>
              Close
            </Button>,
            <Button
              key="solve"
              type="primary"
              loading={loading}
              onClick={() => handleSolveTicket(selectedTicket.id)}
            >
              Solve Ticket
            </Button>,
          ]}
        >
          <p><strong>Description:</strong> {selectedTicket.description}</p>
          <p><strong>Status:</strong> {selectedTicket.status}</p>
          <p><strong>Response:</strong> {selectedTicket.response || 'No response yet'}</p>
        </Modal>
      )}
    </div>
  );
};

export default Tickets;
