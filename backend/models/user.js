

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, 
    },
  });

  // Define associations
  User.associate = (models) => {
    User.hasMany(models.Restaurant, { foreignKey: 'added_by' });
  };

  return User;
};
