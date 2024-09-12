// src/components/Home.js
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import './Home.css'; // Create and style as needed

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="image">
        <img src="https://th.bing.com/th/id/OIG.LaVgmo3Nv5g0nSt_i4XC?pid=ImgGn" alt="Crop Detection" />
      </div>
      <div className="content">
        <h3>Crop Diseases Detection</h3>
        <p>
          Use visually appealing graphics and images to create an engaging interface.
          Include a brief overview of the importance of detecting and managing crop diseases.
        </p>
        <a href="/contactus.html" className="btn">CONTACT US <FaChevronRight /></a>
      </div>
    </section>
  );
};

export default Home;
