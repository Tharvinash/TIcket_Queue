const mongoose = require('mongoose');

const CounterSchema = new mongoose.Schema({
  counterId: {
    type: Number,
    required: true,
  },
  currentNumber: {
    type: Number,
    required: true,
  },
  servingStatus: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('counter', CounterSchema);
