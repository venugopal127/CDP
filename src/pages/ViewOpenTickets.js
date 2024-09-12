import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, Button, message } from 'antd';

const ViewOpenTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('/api/tickets');
        setTickets(response.data);
      } catch (error) {
        message.error('Failed to fetch tickets');
      }
    };
    fetchTickets();
  }, []);

  const handleSolveTicket = async (ticketId) => {
    try {
      await axios.post(`/api/ticket/solve/${ticketId}`);
      message.success('Ticket solved successfully!');
      setTickets((prev) => prev.filter((ticket) => ticket.id !== ticketId));
    } catch (error) {
      message.error('Failed to solve ticket');
    }
  };

  return (
    <div style={styles.container}>
      <h1>View Open Tickets</h1>
      <List
        bordered
        dataSource={tickets}
        renderItem={(ticket) => (
          <List.Item
            key={ticket._id}
            actions={[
              <Button
                type="primary"
                onClick={() => handleSolveTicket(ticket._id)}
              >
                Solve
              </Button>,
            ]}
          >
            <div style={styles.ticketDetails}>
              <p><strong>Photo:</strong> {ticket.photo}</p>
              <p><strong>Description:</strong> {ticket.description}</p>
              <p><strong>Status:</strong> {ticket.status}</p>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  ticketDetails: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
};

export default ViewOpenTickets;
