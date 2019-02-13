const { Event } = require('../database/models');
const { Coffee } = require('../database/models');
const { Lunch } = require('../database/models');

exports.postEvent = (req, res) => {
  const { userId } = req.params;

  Event.create({
    title,
    start_date,
    end_date,
    org_name,
    price,
    capacity,
    note,
    status,
    userId,
    raw: true,
  })
    .then((result) => {
      Coffee.create({
        price,
        note,
        time,
        eventId: result.dataValues.id,
      });
    })
    .then((result) => {
      Lunch.create({
        price,
        note,
        time,
        eventId: result.dataValues.id,
      });
    })
    .catch(() => {
      res.json({ error: 'Something went wrong!' });
    });
};
