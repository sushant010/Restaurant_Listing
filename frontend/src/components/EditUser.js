import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/${id}`)
      .then((response) => {
        const userData = response.data;

        setFormData({
          name: userData.name,
          email: userData.email,
         
        });
      })
      .catch((error) => {
        console.error('Error fetching user data for editing:', error);
      });


    axios.get('http://localhost:5000/api/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/users/${id}`, formData);

      toast.success('User updated successfully');
      setTimeout(() => {
        navigate('/UserTable'); 
      }, 2000);
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Error updating user');
    }
  };

  return (
    <div>
      <ToastContainer />

      <div className="custom-container">
        <h1 className="custom-title">Edit User</h1>
        <form className="custom-form">
          <div className="custom-input-group">
            <label htmlFor="name" className="custom-label">User Name</label>
            <input
              type="text"
              className="custom-input"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="custom-input-group">
            <label htmlFor="email" className="custom-label">Email</label>
            <input
              type="email"
              className="custom-input"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

         

          <div className="custom-button-container">
            <button type="button" className="custom-button" onClick={handleUpdate}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
