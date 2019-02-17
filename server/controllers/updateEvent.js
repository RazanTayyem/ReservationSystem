const { Event } = require('../database/models');

exports.updateEvent = (req, res) => {
  Event.update({ status: 1 }, { where: { id: req.params.id } })
    .then(() => res.json({ success: 'status updated' }))
    .catch(() => res.status(500).json({ error: 'something wrong in query ' }));
};
