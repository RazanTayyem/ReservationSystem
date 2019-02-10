const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');

const Coffee = sequelize.define('coffee', {
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
module.exports = Coffee;
