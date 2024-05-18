const axios = require('axios');
const ExchangeRate = require('../models/ExchangeRate');

exports.getExchangeRate = async (req, res) => {
  try {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
    const rate = response.data.rates.UAH;

    const exchangeRate = new ExchangeRate({ rate });
    await exchangeRate.save();

    res.json({ rate });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
