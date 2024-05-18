const nodemailer = require('nodemailer');
const Subscription = require('../models/Subscription');
const ExchangeRate = require('../models/ExchangeRate');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.sendDailyEmails = async () => {
  try {
    const rate = await ExchangeRate.findOne().sort({ date: -1 }).exec();
    const subscribers = await Subscription.find().exec();
    const emails = subscribers.map(sub => sub.email);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: emails,
      subject: 'Daily Exchange Rate',
      text: `The current exchange rate is 1 USD = ${rate.rate} UAH`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  } catch (error) {
    console.log('Error in sendDailyEmails:', error);
  }
};
