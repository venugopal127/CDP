import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FarmerDashboard = () => {
  const [diseaseDetected, setDiseaseDetected] = useState(false); // Example state
  const navigate = useNavigate();

  const handleDetectDisease = () => {
    navigate('/ui');
  };

  const handleViewTickets = () => {
    navigate('/tk');
  };

  return (
    <div
      style={{
        backgroundImage: `url(${require('../assets/adrian.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '40px',
          borderRadius: '10px',
          width: '400px',
          textAlign: 'center',
          boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h1 style={{ fontFamily: 'Arial', fontSize: '28px', marginBottom: '20px' }}>
          Farmer Dashboard
        </h1>
        <button
          onClick={handleDetectDisease}
          style={{
            fontFamily: 'Arial',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            marginTop: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Detect Disease
        </button>

        {!diseaseDetected && (
          <div style={{ marginTop: '20px' }}>
            <button
              onClick={handleViewTickets}
              style={{
                fontFamily: 'Arial',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                marginTop: '10px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              View Tickets
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmerDashboard;
