const Subscription = require('../models/Subscription');

exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    const existingSubscription = await Subscription.findOne({ email });

    if (existingSubscription) {
      return res.status(409).send('E-mail вже є в базі даних');
    }

    const subscription = new Subscription({ email });
    await subscription.save();
    res.status(200).send('E-mail додано');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
