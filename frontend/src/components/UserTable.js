import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/users') 
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleUpdate = (id) => {
    console.log(`Update user with ID: ${id}`);
    navigate(`/editUser/${id}`); 
  };

  const handleDelete = (id) => {
    console.log(`Delete user with ID: ${id}`);
    axios
      .delete(`http://localhost:5000/api/users/${id}`) 
      .then((response) => {
        toast.success('User deleted successfully');
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user.id !== id)
        );
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ToastContainer />

      <h1 className="custom-title">User Data</h1>

      <div className="table-responsive bg-light mx-4" style={{ overflowX: 'auto' }}>
        <table className="table table-striped" style={{ minWidth: '600px' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleUpdate(user.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => handleDelete(user.id)}
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
