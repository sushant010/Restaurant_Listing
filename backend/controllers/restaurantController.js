const { Restaurant } = require('../models');


exports.listRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
  } catch (error) {
    console.error('Error listing restaurants:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.createRestaurant = async (req, res) => {
  const { name, address, contact } = req.body;

  if (!name || !address || !contact) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const restaurant = await Restaurant.create({ name, address, contact });
    res.status(201).json(restaurant);
  } catch (error) {
    console.error('Error creating restaurant:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.updateRestaurant = async (req, res) => {
  const { id } = req.params;
  const { name, address, contact } = req.body;

  if (!name || !address || !contact) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const [updatedRows] = await Restaurant.update(
      { name, address, contact },
      { where: { id } }
    );

    if (updatedRows > 0) {
      res.sendStatus(204); 
    } else {
      res.status(404).json({ error: 'Restaurant not found' });
    }
  } catch (error) {
    console.error('Error updating restaurant:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.deleteRestaurant = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRows = await Restaurant.destroy({ where: { id } });

    if (deletedRows > 0) {
      res.sendStatus(204); 
    } else {
      res.status(404).json({ error: 'Restaurant not found' });
    }
  } catch (error) {
    console.error('Error deleting restaurant:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



exports.findRestaurantById = async (req, res) => {
  const { id } = req.params;

  try {
    const restaurant = await Restaurant.findByPk(id);

    if (restaurant) {
      res.json(restaurant);
    } else {
      res.status(404).json({ error: 'Restaurant not found' });
    }
  } catch (error) {
    console.error('Error finding restaurant by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};