const axios = require('axios');

exports.getExchangeRate = async (req, res) => {
  try {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
    const rate = response.data.rates.UAH;
    res.status(200).json(rate);
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    res.status(500).send('Failed to fetch exchange rate');
  }
};
