const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Models that might need indexes or initial setup
const Subscription = require('../models/Subscription');
const ExchangeRate = require('../models/ExchangeRate');

const migrate = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB for migration');

    // Migration: create indexes if they don't exist
    await Subscription.init();
    await ExchangeRate.init();

    console.log('Migration completed');
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    mongoose.connection.close();
  }
};

migrate().catch(error => console.error('Migration failed:', error));
