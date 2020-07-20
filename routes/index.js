const express = require('express');
const router = express.Router();

const booksRoutes = require('./parks');

router.use('/parks', parksRoutes);

module.exports = router;