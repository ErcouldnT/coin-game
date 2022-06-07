import 'dotenv/config';
import mongoose from 'mongoose';

const db = mongoose.connect(process.env.MONGO_URI, (error) => {
  console.log(error
    ? `Mongo failed: ${error.message}`
    : 'Mongo connected!');
});

export default db;
