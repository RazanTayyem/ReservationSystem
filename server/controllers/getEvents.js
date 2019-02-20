const { Event } = require('../database/models');

exports.getEvents = ((req, res) => {
  Event.findAll()
    .then((events) => {
      if (!events || events.length === 0) return res.status(401).json({ message: 'no data exists' });
      return res.json(events);
    })
    .catch(err => res.status(500).json({ message: err }));
});
