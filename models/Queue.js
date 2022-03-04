const mongoose = require('mongoose');

const QueueSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
  },
  timeReleased: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('queue', QueueSchema);
