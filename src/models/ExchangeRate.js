const mongoose = require('mongoose');

const exchangeRateSchema = new mongoose.Schema({
  rate: { type: Number, required: true },
  date: { type: Date, default: Date.now, required: true }
});

module.exports = mongoose.model('ExchangeRate', exchangeRateSchema);
