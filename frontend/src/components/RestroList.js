
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Restro.css';

export default function RestroList() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState({});


  function getRandomImage() {
    
    const imageUrls = [
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://plus.unsplash.com/premium_photo-1661369889067-c86c31362f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
    ];
  
  
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  }
  

  useEffect(() => {
    axios.get('http://localhost:5000/api/restaurants')
      .then((response) => {
        setRestaurants(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching restaurant data:', error);
      });

      axios.get('http://localhost:5000/api/users')
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
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <div id="header" className="text-center">
          <h1>Restro Mania</h1>
          <p>Cooking up smiles, one plate at a time</p>
        </div>
        <div className="container">
          <div className="row">
            {restaurants.map((restaurant) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={restaurant.id}>
                <div className="card">
                <img  src={getRandomImage()}/>
                  <div className="card-body">
                    <h2 className="card-title text-capitalize "> <i class="fa-solid fa-utensils mx-2"></i>{restaurant.name}</h2>
                    <p className="card-text"> <i class="fa-solid fa-location-dot mx-2"></i>{restaurant.address}</p>
                    <p className="card-text"> <i class="fa-solid fa-phone-volume mx-2"></i>{restaurant.contact}</p>
                    <p className="card-text"> <i className="fa-solid fa-user mx-2"></i>
                     {users[restaurant.added_by]?.name || 'RestroMania'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
