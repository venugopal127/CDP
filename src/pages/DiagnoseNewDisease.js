import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../assets/hole.jpg'; // Path to your image

const DiagnoseNewDisease = () => {
  const [diseaseName, setDiseaseName] = useState('');
  const [cropName, setCropName] = useState('');
  const [percentage, setPercentage] = useState('');
  const [solution, setSolution] = useState('');
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);

  const handleDiseaseDiagnosis = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/diagnose', {
        diseaseName,
        cropName,
        percentage,
        solution,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error diagnosing disease');
    }
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h1>Diagnose New Disease</h1>
        <form onSubmit={handleDiseaseDiagnosis}>
          <input
            type="text"
            placeholder="Disease Name"
            value={diseaseName}
            onChange={(e) => setDiseaseName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Crop Name"
            value={cropName}
            onChange={(e) => setCropName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Percentage"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            required
          />
          <textarea
            placeholder="Solution"
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            required
          />
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            required
          />
          <div style={styles.previewContainer}>
            {images.length > 0 && images.map((img, idx) => (
              <img
                key={idx}
                src={URL.createObjectURL(img)}
                alt={`Preview ${idx + 1}`}
                style={styles.previewImage}
              />
            ))}
          </div>
          <button type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

const styles = {
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '8px',
    width: '400px',
    textAlign: 'center',
  },
  previewContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '10px',
  },
  previewImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    margin: '5px',
  },
};

export default DiagnoseNewDisease;
