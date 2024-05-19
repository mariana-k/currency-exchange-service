const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const cron = require('node-cron');
const dotenv = require('dotenv');
dotenv.config();

let swaggerDocument;
try {
  swaggerDocument = YAML.load('./gses2swagger.yaml');
} catch (error) {
  console.error('Error loading Swagger YAML file:', error.message);
  process.exit(1); // Exit the process if the YAML file cannot be loaded
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const exchangeRateRoutes = require('./routes/exchangeRate');
const subscriptionRoutes = require('./routes/subscription');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/rate', exchangeRateRoutes);
app.use('/api/subscribe', subscriptionRoutes);

// Schedule daily emails
const { sendDailyEmails } = require('./services/emailService');
sendDailyEmails(); // temporary to send emails immediately
cron.schedule('0 0 * * *', sendDailyEmails);

module.exports = app; // Export the app instance without starting the server
