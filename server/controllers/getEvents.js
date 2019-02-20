const { Event } = require('../database/models');

exports.getEvents = ((req, res, next) => {
  const { id } = req.params;
  Event.findAll({ where: { id }, raw: true })
    .then((events) => {
      if (!events || events.length === 0) return res.status(401).json({ message: 'no data exists' });
      return res.json({ events });
    })
    .catch((err) => {
      next(err);
    });
});
