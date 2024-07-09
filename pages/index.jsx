// components/LoginForm.jsx

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link'; // Importe o Link do Next.js

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8181/api/v1/sign_in', {
        user: formData // Ensure data is sent in the correct format expected by your Rails backend
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Login successful:', response.data);

      // Optionally, save the JWT token to local storage or session storage for future requests
      localStorage.setItem('token', response.data.token);

      // Example redirect after successful login
      router.push('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error.response?.data?.message || error.message);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5">Login</h2>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            <button type="submit" className="btn btn-primary btn-block mt-4">
              Login
            </button>
          </form>
          <p className="text-center mt-3">
            Não tem uma conta?{' '}
            <Link href="/signup">
              Crie uma conta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
