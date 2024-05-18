const express = require('express');
const mongoose = require('mongoose');
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

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Import routes
const exchangeRateRoutes = require('./routes/exchangeRate');
const subscriptionRoutes = require('./routes/subscription');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/rate', exchangeRateRoutes);
app.use('/api/subscribe', subscriptionRoutes);

// Schedule daily emails
const { sendDailyEmails } = require('./services/emailService');
cron.schedule('0 0 * * *', sendDailyEmails);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
