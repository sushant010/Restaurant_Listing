
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    contact: DataTypes.STRING,
    // email:DataTypes.STRING
  });

  return Restaurant;
};
