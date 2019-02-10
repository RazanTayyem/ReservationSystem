const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');

const Lunch = sequelize.define('lunch', {
  price: {
    type: Sequelize.FLOAT,
  },
  note: {
    type: Sequelize.STRING(500),
  },
  time: {
    type: Sequelize.DATE,
  },
  event_id: {
    type: Sequelize.INTEGER,
  },
});
module.exports = Lunch;
