const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const { SECRET } = process.env;

exports.checkAuth = (req, res) => {
  if (req.headers.cookie) {
    const token = cookie.parse(req.headers.cookie).logged_in;
    jwt.verify(token, SECRET, (err) => {
      if (err) {
        return res.status(401).json({ error: 'something went wrong!' });
      }
      return res.json({ message: 'success' });
    });
  }
};
