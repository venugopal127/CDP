import React from 'react';
import { Button } from 'antd';
import homeImage from '../assets/leaf.jpg';

const HomePage = () => {
  const styles = {
    pageContainer: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: `url(${homeImage}) no-repeat center center`,
      backgroundSize: 'cover',
    },
    formBox: {
      position: 'relative',
      width: '450px',
      height: '450px',
      background: 'rgba(255, 255, 255, 0.8)',
      border: 'none',
      borderRadius: '20px',
      backdropFilter: 'blur(15px) brightness(80%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: '2.5em',
      color: 'Black',
      textAlign: 'center',
      marginBottom: '30px',
    },
    button: {
      width: '100%',
      height: '50px',
      margin: '10px 0',
      borderRadius: '40px',
      backgroundColor: 'green',
      color: 'white',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      fontSize: '1.2em',
      fontWeight: '600',
    },
    responsiveFormBox: {
      width: '100%',
      height: 'auto',
      padding: '20px',
      borderRadius: '0',
    },
    responsiveTitle: {
      fontSize: '2em',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <section>
        <div style={styles.formBox}>
          <div>
            <h1 style={styles.title}>Welcome to Crop Disease Detection System</h1>
            <Button
              type="default"
              href="/farmerlogin"
              style={styles.button}
            >
              Farmer Login
            </Button>
            <Button
              type="default"
              href="/scientistlogin"
              style={styles.button}
            >
              Scientist Login
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
