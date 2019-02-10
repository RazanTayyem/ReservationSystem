const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');

const Equipment = sequelize.define('equipment', {
  price: {
    type: Sequelize.FLOAT,
  },
  note: {
    type: Sequelize.STRING(500),
  },
});
module.exports = Equipment;
