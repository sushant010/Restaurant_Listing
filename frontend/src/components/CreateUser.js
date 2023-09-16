import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/users', formData);

      if (response.status === 201) {
        toast.success('User created successfully');
        setTimeout(() => {
          navigate('/UserTable'); 
        }, 2000);
      }
    } catch (error) {
      toast.error('Error creating user');
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="custom-container">
      <h1 className="custom-title">Create User</h1>
      <form onSubmit={handleSubmit} className="custom-form">
        <div className="custom-input-group">
          <label htmlFor="name" className="custom-label">
            User Name
          </label>
          <input
            type="text"
            className="custom-input"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="custom-input-group">
          <label htmlFor="email" className="custom-label">
            Email
          </label>
          <input
            type="email"
            className="custom-input"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="custom-button-container">
          <button type="submit" className="custom-button">
            Create User
          </button>
        </div>
      </form>

      <ToastContainer autoClose={3000} />
    </div>
  );
}
