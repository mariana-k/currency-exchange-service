const mongoose = require('mongoose');
const app = require('./src/app');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('Could not connect to MongoDB:', err);
  });
