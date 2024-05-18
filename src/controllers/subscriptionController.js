const Subscription = require('../models/Subscription');

exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    const subscription = new Subscription({ email });
    await subscription.save();
    res.status(201).send('Subscribed successfully.');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
