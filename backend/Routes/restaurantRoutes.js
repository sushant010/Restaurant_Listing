const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

router.get('/restaurants', restaurantController.listRestaurants);

router.post('/restaurants', restaurantController.createRestaurant);

router.put('/restaurants/:id', restaurantController.updateRestaurant);

router.delete('/restaurants/:id', restaurantController.deleteRestaurant);

router.get('/restaurants/:id', restaurantController.findRestaurantById);

module.exports = router;
