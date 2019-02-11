const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');

const Lunch = sequelize.define('lunch', {
  price: {
    type: Sequelize.FLOAT,
  },
  note: {
    type: Sequelize.TEXT,
  },
  time: {
    type: Sequelize.DATE,
  },
  createdAt: {
    type: Sequelize.DATE(),
    defaultValue: sequelize.literal('NOW()'),
  },
  updatedAt: {
    type: Sequelize.DATE(),
    defaultValue: sequelize.literal('NOW()'),
  },
});
module.exports = Lunch;
