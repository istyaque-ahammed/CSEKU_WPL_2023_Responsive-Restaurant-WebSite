import React from "react";
import Footer from "../Footer";
import "./Success.css"; // Import the CSS file for styling

const Success = () => {
  return (
    <div className="full-page">
      <div className="success-container">
        <h1 className="success-heading">Payment Successful</h1>
        <p className="success-message">Great Job!! Thank you for your purchasing!</p>
        <Footer />
      </div>
    </div>
  );
};

export default Success;
