const Sequelize = require('sequelize');
const sequelize = require('../configs/database');

// Import models
const User = require('./User')(sequelize, Sequelize.DataTypes);
const Role = require('./Role')(sequelize, Sequelize.DataTypes);

// Associations
User.belongsTo(Role, { foreignKey: 'role_id', as: 'role' });
Role.hasMany(User, { foreignKey: 'role_id', as: 'users' });

// Export models
module.exports = {
  User,
  Role
};
