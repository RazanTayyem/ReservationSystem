const express = require('express');

const router = express.Router();
const { getEvents } = require('./controllers/getEvents.js');

router.get('/events', getEvents);
module.exports = router;
