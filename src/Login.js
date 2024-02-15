import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginComponent() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    const url = 'http://localhost:8080/customer/login';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          alert('Login successful');
        }
    })
    .catch(error => {
      console.error('Error:', error);
      setLoginError('An error occurred while logging in. Please try again later.');
    });
};

const handleSubmit = (event) => {
  event.preventDefault();
  if (password.length < 8) {
    setPasswordError('Password must be at least 8 characters long');
    return;
  }
  setPasswordError('');
  setLoginError('');
  handleLogin();
};

return (
  <div className="d-flex justify-content-center align-items-center min-vh-100">
    <div className="col-md-6">
      <Card>
        <Card.Body>
          <h3>Sign In</h3>
          <div className="mb-3">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>UserName</Form.Label>
                <Form.Control
                  type="Text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {passwordError && <Alert variant="danger">{passwordError}</Alert>}
              </Form.Group>
              <Form.Group controlId="formRememberMe">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  </div>
);
}