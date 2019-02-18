const { Event } = require('../database/models');

exports.updateEvent = (req, res) => {
  if (req.userRole === 'admin') {
    Event.update({ status: 1 }, { where: { id: req.params.id } })
      .then((result) => {
        if (result) {
          res.json({ success: 'status updated' });
        } else {
          res.json({ sucess: 'status did not get updated!' });
        }
      })
      .catch(() => res.status(500).json({ error: 'something wrong in query ' }));
  } else {
    res.json({ error: 'not auth' });
  }
};
