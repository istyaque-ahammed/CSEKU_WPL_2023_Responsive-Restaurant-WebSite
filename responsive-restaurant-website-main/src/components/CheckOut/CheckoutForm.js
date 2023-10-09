import React, { useState } from "react";
//import "../CheckOut/CheckoutElements.css"; // Import your custom CSS file for styling

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and payment processing here
    // You would typically send this data to your backend for payment processing
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Shipping Address</label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="expDate">Expiration Date</label>
            <input
              type="text"
              className="form-control"
              id="expDate"
              name="expDate"
              value={formData.expDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              className="form-control"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
