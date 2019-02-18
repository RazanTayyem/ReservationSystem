const express = require('express');
const { login } = require('./controllers/login.js');
const { logout } = require('./controllers/login.js');
const { getEvents } = require('./controllers/getEvents.js');
const { postEvent } = require('./controllers/postEvent.js');
const { getEvent } = require('./controllers/getEvent.js');
const { checkAuth } = require('./controllers/checkAuth.js');
const { auth } = require('./middlewares/auth.js');

const router = express.Router();

router.get('/events', auth, getEvents);
router.get('/checkauth', checkAuth);
router.post('/login', login);
router.get('/logout', logout);
router.post('/event', auth, postEvent);
router.get('/event/:id', auth, getEvent);
module.exports = router;
