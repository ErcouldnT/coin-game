import 'dotenv/config';
import mongoose from 'mongoose';

import User from './models/User.js';

mongoose.connect(process.env.MONGO_URI, (error) => {
  console.log(error
    ? `Mongo failed: ${error.message}`
    : 'Mongo connected!');
});

const finder = async (userid) => {
  try {
    const user = await User.findById(userid);
    return user;
  } catch (error) {
    console.log(error);
  };
};

export default finder;
