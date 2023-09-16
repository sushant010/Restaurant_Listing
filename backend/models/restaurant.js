module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    contact: DataTypes.STRING,
  });

  
  Restaurant.associate = (models) => {
    Restaurant.belongsTo(models.User, { foreignKey: 'added_by' });
  };

  return Restaurant;
};
