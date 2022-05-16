import mongoose from 'mongoose';

const { Schema } = mongoose;

const coinSchema = new Schema({
  id: {
    type: String
  },
  symbol: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  }
}, { timestamps: true });

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  wallet: {
    type: [coinSchema],
    default: [{
      // id,
      // symbol,
      name: 'USD',
      amount: 1000
    }]
  }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
