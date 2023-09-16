import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function RestroTable() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/restaurants')
      .then((response) => {
        setRestaurants(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching restaurant data:', error);
      });
      axios
      .get('http://localhost:5000/api/users')
      .then((response) => {
        const usersData = response.data.reduce((acc, user) => {
          acc[user.id] = user;
          return acc;
        }, {});
        setUsers(usersData);
      })
      .catch((error) => {
        console.error('Error fetching users data:', error);
      });
  }, []);
 

  const handleUpdate = (id) => {
    console.log(`Update restaurant with ID: ${id}`);
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete restaurant with ID: ${id}`);
    axios
      .delete(`http://localhost:5000/api/restaurants/${id}`)
      .then((response) => {
        toast.success('Restaurant deleted successfully');
        setRestaurants((prevRestaurants) =>
          prevRestaurants.filter((restaurant) => restaurant.id !== id)
        );
      })
      .catch((error) => {
        console.error('Error deleting restaurant:', error);
      });
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ToastContainer />

      <h1 className="custom-title"> Restaurant Data</h1>

      <div className="table-responsive bg-light mx-4" style={{ overflowX: 'auto' }}>
        <table className="table table-striped" style={{ minWidth: '600px' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Added By</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant) => (
              <tr key={restaurant.id}>
                <td>{restaurant.id}</td>
                <td>{restaurant.name}</td>
                <td>{restaurant.contact}</td>
                <td>{restaurant.address}</td>
                <td>{users[restaurant.added_by]?.name }</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleUpdate(restaurant.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => handleDelete(restaurant.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
