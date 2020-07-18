const express = require('express');
const router = express.Router();
const { park } = require('../controllers/parkController');

router.get('/', park.list);

router.post('/', park.add);

router.put('/:_id', park.edit);

module.exports = router;