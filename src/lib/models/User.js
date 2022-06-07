import mongoose from 'mongoose';

const { Schema } = mongoose;

const coinSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  id: String,
  symbol: String,
  isCurrency: Boolean,
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
      amount: 1000,
      name: 'USD',
      isCurrency: true,
      // id,
      // symbol,
    }],
  },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
