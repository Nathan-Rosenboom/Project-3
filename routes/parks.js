const express = require('express');
const router = express.Router();
const { park } = require('../controllers');

router.get('/', park.list);

router.post('/', park.add);

module.exports = router;