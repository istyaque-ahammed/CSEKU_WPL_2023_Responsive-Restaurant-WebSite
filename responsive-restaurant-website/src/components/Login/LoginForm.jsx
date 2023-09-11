import React from 'react';

function LoginForm() {
  return (
    <div
      style={{
        backgroundColor: 'black',
        minHeight: '100vh',
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
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: 'blue' }}>
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
              }}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
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
        </form>
        <p style={{ color: 'gray', fontSize: '14px', marginTop: '20px' }}>
          Don't have an account?{' '}
          <a style={{ color: 'blue', textDecoration: 'underline' }} href="#">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;

