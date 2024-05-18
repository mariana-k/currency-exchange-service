const mongoose = require('mongoose');

const exchangeRateSchema = new mongoose.Schema({
  rate: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ExchangeRate', exchangeRateSchema);
