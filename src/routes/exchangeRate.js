const express = require('express');
const { getExchangeRate } = require('../controllers/exchangeRateController');

const router = express.Router();

router.get('/', getExchangeRate);

module.exports = router;
