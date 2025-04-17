const express = require('express');
const router = express.Router();
const auth = require('./authRoutes');
const user = require('./userRoutes');

router.use('/auth', auth);
router.use('/user', user);

module.exports = router;