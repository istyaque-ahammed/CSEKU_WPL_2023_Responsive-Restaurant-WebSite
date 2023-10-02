import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../auth/base';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [passwordError, setPasswordError] = useState(null);
  const [userNotFoundError, setUserNotFoundError] = useState(false); // State for user not found error
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error.message);
      setPasswordError('Incorrect email or password');
      
      // Check if the error is 'auth/user-not-found'
      if (error.code === 'auth/user-not-found') {
        setUserNotFoundError(true);
      } else {
        setUserNotFoundError(false);
      }
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
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          width: '300px',
          textAlign: 'left',
        }}
      >
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: 'blue', textAlign: 'center' }}>
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: 'gray', fontSize: '14px', fontWeight: 'bold' }} htmlFor="email">
              Email:
            </label>
            <input
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                outline: 'none',
                textAlign: 'left',
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
          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: 'gray', fontSize: '14px', fontWeight: 'bold' }} htmlFor="password">
              Password:
            </label>
            <div style={{ position: 'relative' }}>
              <input
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  outline: 'none',
                  textAlign: 'left',
                }}
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {showPassword ? (
                  <i className="fa fa-eye-slash"></i>
                ) : (
                  <i className="fa fa-eye"></i>
                )}
              </button>
            </div>
          </div>
          {passwordError && (
            <p style={{ color: 'red', fontSize: '12px', marginBottom: '10px' }}>
              {passwordError}
            </p>
          )}
          {userNotFoundError && (
            <p style={{ color: 'red', fontSize: '12px', marginBottom: '10px' }}>
              User not found. Please check your email.
            </p>
          )}
          <div style={{ display: 'flex', justifyContent: 'right', marginTop: '20px' }}>
            <button
              style={{
                backgroundColor: 'red',
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
                padding: '10px 20px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              type="submit"
              onMouseEnter={(e) => e.target.style.backgroundColor = '#010606'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'red'}
            >
              Log in
            </button>
          </div>
        </form>
        <p style={{ color: 'gray', fontSize: '14px', marginTop: '20px', textAlign: 'center' }}>
          Don't have an account?{' '}
          <a style={{ color: 'blue', textDecoration: 'underline' }} href="/signup">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
