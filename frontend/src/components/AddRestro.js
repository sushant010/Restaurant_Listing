import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Restro.css';
import { useNavigate } from 'react-router-dom';

export default function AddRestro() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
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
      const response = await axios.post('http://localhost:5000/api/restaurants', formData);

      if (response.status === 201) {
        toast.success('Restaurant added successfully');

       
        setTimeout(() => {
          setFormData({ name: '', address: '', contact: '' });
          navigate('/');
        }, 2000);

      

      }
    } catch (error) {
      toast.error('Error adding restaurant');
      console.error('Error adding restaurant:', error);
    }
  };

  return (
    <div className="custom-container">
      <h1 className="custom-title">Add Restaurant</h1>
      <form onSubmit={handleSubmit} className="custom-form">
        <div className="custom-input-group">
          <label htmlFor="name" className="custom-label">
            Restaurant Name
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
          <label htmlFor="address" className="custom-label">
            Address
          </label>
          <input
            type="text"
            className="custom-input"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="custom-input-group">
          <label htmlFor="contact" className="custom-label">
            Contact Number
          </label>
          <input
            type="text"
            className="custom-input"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div className="custom-button-container">
          <button type="submit" className="custom-button">
            Submit
          </button>
        </div>
      </form>

    
      <ToastContainer autoClose={3000} />
    </div>
  );
}
