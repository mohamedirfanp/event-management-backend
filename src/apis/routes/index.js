const express = require('express');
const router = express.Router();
const auth = require('./authRoutes');
const user = require('./userRoutes');
const event = require('./eventRoutes');

router.use('/auth', auth);
router.use('/user', user);
router.use('/event', event);

module.exports = router;