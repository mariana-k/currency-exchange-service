const express = require('express');
const router = express.Router();
const { getExchangeRate } = require('../controllers/exchangeController');

router.get('/', getExchangeRate);

module.exports = router;
