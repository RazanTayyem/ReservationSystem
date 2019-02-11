const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const { SECRET } = process.env;

exports.auth = (req, res) => {
  if (req.headers.cookie) {
    const token = cookie.parse(req.headers.cookie).logged_in;
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'something went wrong!' });
      }

      const { role } = decoded;
      if (role === 'admin' || role === 'user') {
        return res.json({ role: '$role' });
      }

      return res.json({ role: 'not auth' });
    });
  }
  return res.json({ role: 'not auth' });
};
