const mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({

  nowServing: {
    type: Number,
    required: true,
  },
  lastNumber: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('status', StatusSchema);