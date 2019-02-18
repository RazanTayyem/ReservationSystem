const {
  Event, Coffee, Lunch, Equipment,
} = require('../database/models');

exports.getEvent = (req, res) => {
  const { id } = req.params;
  const { userRole } = req;
  Event.findOne({ where: { id }, raw: true })
    .then((event) => {
      if (!event) {
        return res.status(401).json({ message: 'no event exists' });
      }
      Coffee.findOne({ where: { eventId: id }, raw: true }).then((coffee) => {
        if (!coffee) {
          return res.status(401).json({ message: 'no coffee exists' });
        }
        Lunch.findOne({ where: { eventId: id }, raw: true }).then((lunch) => {
          if (!lunch) {
            return res.status(401).json({ message: 'no lunch exists' });
          }
          Equipment.findOne({ where: { eventId: id }, raw: true }).then((equipment) => {
            if (!equipment) {
              return res.status(401).json({ message: 'no equipment exists' });
            }
            return res.json({
              userRole,
              event,
              coffee,
              lunch,
              equipment,
            });
          });
        });
      });
    })
    .catch(err => res.status(500).json({ message: err }));
};
