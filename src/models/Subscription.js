const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }
});

// Create an index on the email field
subscriptionSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('Subscription', subscriptionSchema);
