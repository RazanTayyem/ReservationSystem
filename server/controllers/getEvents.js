const { Event } = require('../database/models');

exports.getEvents = ((req, res, next) => {
  Event.findAll()
    .then((events) => {
      res.json(events);
    })
    .catch((err) => {
      next(err);
    });
});
