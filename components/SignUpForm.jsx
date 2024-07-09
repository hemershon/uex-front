import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const SignUpForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '', password_confirmation: '' });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8181/api/v1/sign_up', { user: formData }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Registration successful:', response.data);
      router.push('/');
    } catch (error) {
      console.error('Error registering:', error);
      setError('Registration failed. Please check your details and try again.');
    }
  };  

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
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
          <div className="form-group mb-3">
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
          <div className="form-group mb-3">
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <input
              type="password"
              name="password_confirmation"
              className="form-control"
              value={formData.password_confirmation}
              onChange={handleChange}
              required
            />
          </div>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
          <button type="submit" className="btn btn-primary btn-block mt-4">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
