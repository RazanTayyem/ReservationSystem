const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');

const User = sequelize.define('users', {
  username: {
    type: Sequelize.STRING(150),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(250),
    allowNull: false,
  },
  role: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
});
module.exports = User;
