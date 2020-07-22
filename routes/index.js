const express = require('express');
const router = express.Router();

const parksRoutes = require('./parks');

router.use('/parks', parksRoutes);

module.exports = router;