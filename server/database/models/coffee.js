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
});
module.exports = Coffee;
