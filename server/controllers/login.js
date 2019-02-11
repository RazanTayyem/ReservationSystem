const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { User } = require('../database/models');

const { SECRET } = process.env;

exports.post = (req, res) => {
  const { username, password } = req.body;
  User.findOne({
    where: { username },
    attributes: ['id', 'username', 'password'],
    raw: true,
  })
    .then((result) => {
      if (!result) {
        return res.status(401).json({ error: 'user not found' });
      }

      bcrypt.compare(password, result.password, (err, result2) => {
        if (err) {
          return res.status(401).json({ error: 'something went wrong!' });
        }
        if (result2) {
          const token = jwt.sign({ id: result.id, username }, SECRET);
          return res.cookie('logged_in', token, { maxAge: 999999999 });
        }
        return res.status(401).json({ error: 'password does not match' });
      });
    })
    .catch();
};
