import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth , database} from '../../auth/base';
import { ref, set } from 'firebase/database';

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phoneNumber: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {

    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
  
      // Get the UID of the newly created user
      const uid = userCredential.user.uid;
  
      // Define the path to the "Users" collection in the Realtime Database
      const usersRef = ref(database, 'Users');
  
      // Set the user data in the Realtime Database under the user's UID
      await set(usersRef.child(uid), {
        name: formData.name,
        email: formData.email,
        address: formData.address,
        phoneNumber: formData.phoneNumber,
      });
  
      console.log('User signed up and data saved successfully.');
  
      // Redirect the user to the login page upon successful signup
      navigate('/login'); // Replace '/login' with your desired login route
    } catch (error) {
      console.error('Error signing up and saving data:', error.message);
    }
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
