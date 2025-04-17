const Sequelize = require('sequelize');
const sequelize = require('../configs/database');

const User = require('./User')(sequelize, Sequelize.DataTypes);
const EventCategory = require('./EventCategory')(sequelize, Sequelize.DataTypes);
const Event = require('./Event')(sequelize, Sequelize.DataTypes);
const Registration = require('./Registration')(sequelize, Sequelize.DataTypes);

// Associations
Event.belongsTo(EventCategory, { foreignKey: 'category_id', as: 'category' });
Event.belongsTo(User, { foreignKey: 'created_by', as: 'creator' });
Event.belongsTo(User, { foreignKey: 'updated_by', as: 'updater' });

Registration.belongsTo(Event, { foreignKey: 'event_id', as: 'event' });
Registration.belongsTo(User, { foreignKey: 'user_id', as: 'registrant' });
Registration.belongsTo(User, { foreignKey: 'created_by', as: 'createdBy' });
Registration.belongsTo(User, { foreignKey: 'updated_by', as: 'updatedBy' });

User.hasMany(Registration, { foreignKey: 'user_id', as: 'registrations' });
User.hasMany(Event, { foreignKey: 'created_by', as: 'createdEvents' });

module.exports = {
  User,
  EventCategory,
  Event,
  Registration
};
