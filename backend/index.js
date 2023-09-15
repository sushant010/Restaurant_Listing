const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./models'); 

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());


const restaurantRoutes = require('./routes/restaurantRoutes.js');



app.use('/api', restaurantRoutes);

db.sequelize.sync().then(() => {
  console.log('Database connected.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
