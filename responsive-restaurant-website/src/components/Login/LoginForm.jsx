import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
                textAlign: 'left',
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
            <div style={{ display: 'flex', alignItems: 'center' }}>
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
                required
              />
              <button
  type="button"
  onClick={togglePasswordVisibility}
  style={{
    marginLeft: '10px',
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
