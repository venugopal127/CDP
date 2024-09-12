// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';  // Correct import
import IconsContainer from './pages/IconsContainer';
import Services from './pages/Services';
import About from './pages/About';
import ScientistLogin from './pages/ScientistLogin';
import ContactUs from './pages/ContactUs';
import FarmerLogin from './pages/FarmerLogin';  // Ensure correct import for FarmerLogin
import Header from './pages/Header';
import Footer from './pages/Footer';
import FarmerDashboard from './pages/FarmerDashboard'; // Ensure correct import
import ScientistDashboard from './pages/ScientistDashboard'; // Ensure correct import
import UploadImage from './pages/UploadImage';
import Tickets from './pages/Tickets';
import Vot from './pages/ViewOpenTickets';
import DD from './pages/DiagnoseNewDisease';
// Create Layout component for Header/Footer handling
const Layout = ({ children }) => {
  const location = window.location.pathname;
  const hideHeaderFooter = location === '/scientistlogin' || location === '/farmerlogin';

  return (
    <>
      {/* Conditionally render Header and Footer */}
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Default Home route */}
          <Route path="/" element={
            <>
              <HomePage />
              <IconsContainer />
              <Services />
              <About />
            </>
          } />
          <Route path="/dd" element={<DD />} />
          <Route path="/vot" element={<Vot />} />
          {/* Scientist Login route */}
          <Route path="/scientistlogin" element={<ScientistLogin />} />  {/* Adjusted path */}
          <Route path="/ui" element={<UploadImage />} /> 
          {/* Contact Us route */}
          <Route path="/contactus" element={<ContactUs />} />

          {/* Farmer Login route */}
          <Route path="/farmerlogin" element={<FarmerLogin />} />

          {/* Farmer Dashboard route */}
          <Route path="/fd" element={<FarmerDashboard />} /> {/* Ensure the correct path */}

          {/* Scientist Dashboard route */}
          <Route path="/sd" element={<ScientistDashboard />} />
          <Route path="/tk" element={<Tickets />} />
           {/* Ensure the correct path */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
