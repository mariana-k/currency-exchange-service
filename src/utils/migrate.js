const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const migrate = async () => {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected to MongoDB');

  // Implement your migration logic here
  // E.g., creating initial collections or setting up indexes

  mongoose.connection.close();
  console.log('Migration completed');
};

migrate().catch(error => console.error('Migration failed:', error));
