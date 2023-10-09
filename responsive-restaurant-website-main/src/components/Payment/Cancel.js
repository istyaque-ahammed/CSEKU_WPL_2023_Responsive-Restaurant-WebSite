import React from "react";
import Footer from "../Footer";
import "./Cancel.css"; // Import the CSS file for styling

const Cancel = () => {
  return (
    <div className="full-page">
      <div className="cancel-container">
        <h1 className="cancel-heading">Payment Cancelled</h1>
        <p className="cancel-message">Sorry!! Your payment was not completed.</p>
        <Footer />
      </div>
      
    </div>
    
  );
  
};

export default Cancel;
