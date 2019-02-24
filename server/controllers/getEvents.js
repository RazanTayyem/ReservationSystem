const { Event, Service } = require('../database/models');

exports.getEvents = (req, res) => {
  const { id } = req.params;
  console.log('integer', id);
  Event.findAll({ where: { serviceId: id }, raw: true })
    .then((events) => {
      if (!events || events.length === 0) return res.status(401).json({ message: 'no data exists' });
      Service.findOne({ where: { id }, raw: true }).then((service) => {
        res.json({ service, events });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err });
    });
};
