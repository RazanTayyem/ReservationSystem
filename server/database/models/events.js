const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');

const Event = sequelize.define('events', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  start_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  end_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  org_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.STRING(150),
    allowNull: false,
  },
  capacity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  note: {
    type: Sequelize.STRING(500),
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
module.exports = Event;
