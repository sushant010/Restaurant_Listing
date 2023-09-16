import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function EditRestro({ match }) {
    const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
    added_by: '',
  });


  const [users, setUsers] = useState([]);
  useEffect(() => {
   
    axios.get(`http://localhost:5000/api/restaurants/${id}`)
      .then((response) => {
        const restaurantData = response.data;
      
        setFormData({
          name: restaurantData.name,
          address: restaurantData.address,
          contact: restaurantData.contact,
          added_by: restaurantData.added_by,
        });
      })



      .catch((error) => {
        console.error('Error fetching restaurant data for editing:', error);
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
      await axios.put(`http://localhost:5000/api/restaurants/${id}`, formData);
      
      toast.success('Restaurant updated successfully');
      setTimeout(() => {
        navigate('/RestroTable');
      }, 3000);
    } catch (error) {
      console.error('Error updating restaurant:', error);
      toast.error('Error updating restaurant');
    }
  };

  return (

    <div>
        <ToastContainer/>
   
    <div className="custom-container">
      <h1 className="custom-title">Edit Restaurant</h1>
      <form className="custom-form">
        <div className="custom-input-group">
          <label htmlFor="name" className="custom-label">Restaurant Name</label>
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
          <label htmlFor="address" className="custom-label">Address</label>
          <input
            type="text"
            className="custom-input"
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
        </div>

        <div className="custom-input-group">
          <label htmlFor="contact" className="custom-label">Contact Number</label>
          <input
            type="text"
            className="custom-input"
            id="contact"
            name="contact"
            required
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          />
        </div>



        <div className="custom-input-group">
            <label htmlFor="added_by" className="custom-label">Added By User name</label>
            <select
              className="custom-input"
              id="added_by"
              name="added_by"
              value={formData.added_by}
              onChange={(e) => setFormData({ ...formData, added_by: e.target.value })}
              required
            >
              <option value="" disabled>Select User</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
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
