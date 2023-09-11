import React, { useState } from 'react';

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log(formData);
  };

  return (
    <div
      style={{
        backgroundColor: 'black',
        minHeight: '86.4vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          height: '585px',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          width: '400px',
          textAlign: 'left',
        }}
      >
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: 'blue',textAlign: 'center' }}>
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: 'gray', fontSize: '14px', fontWeight: 'bold', display: 'block' }} htmlFor="name">
              Name:
            </label>
            <input
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                outline: 'none',
              }}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: 'gray', fontSize: '14px', fontWeight: 'bold', display: 'block' }} htmlFor="email">
              Email:
            </label>
            <input
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                outline: 'none',
              }}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: 'gray', fontSize: '14px', fontWeight: 'bold', display: 'block' }} htmlFor="password">
              Password:
            </label>
            <input
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                outline: 'none',
              }}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label
              style={{ color: 'gray', fontSize: '14px', fontWeight: 'bold', display: 'block' }}
              htmlFor="confirmPassword"
            >
              Confirm Password:
            </label>
            <input
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                outline: 'none',
              }}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: 'gray', fontSize: '14px', fontWeight: 'bold', display: 'block' }} htmlFor="address">
              Address:
            </label>
            <input
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                outline: 'none',
              }}
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{ color: 'gray', fontSize: '14px', fontWeight: 'bold', display: 'block' }}
              htmlFor="phoneNumber"
            >
              Phone Number:
            </label>
            <input
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                outline: 'none',
              }}
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div >
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button
              style={{
                backgroundColor: 'blue',
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
                padding: '10px 20px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
              }}
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p style={{ color: 'gray', fontSize: '14px', marginTop: '20px', textAlign: 'center'}}>
          Already have an account?{' '}
          <a style={{ color: 'blue', textDecoration: 'underline' }} href="/login">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
