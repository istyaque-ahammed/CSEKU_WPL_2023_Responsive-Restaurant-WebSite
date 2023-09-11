import React from 'react';
import Footer from '../Footer';
function LoginForm() {
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
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: 'blue' ,textAlign: 'center'}}>
          Login
        </h2>
        <form>
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
                textAlign: 'left', // Set text-align to left
              }}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: 'gray', fontSize: '14px', fontWeight: 'bold' }} htmlFor="password">
              Password:
            </label>
            <input
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                outline: 'none',
                textAlign: 'left', // Set text-align to left
              }}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'right', marginTop: '20px' }}>
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
            Login
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
