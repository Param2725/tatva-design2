const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
  ip: {
    type: String,
    default: 'unknown',
  },
  country: {
    type: String,
    default: 'Unknown',
  },
  region: {
    type: String,
    default: 'Unknown',
  },
  city: {
    type: String,
    default: 'Unknown',
  },
  page: {
    type: String,
    required: true,
  },
  referrer: {
    type: String,
    default: '',
  },
  device: {
    type: String,
    enum: ['mobile', 'desktop', 'tablet'],
    default: 'desktop',
  },
  browser: {
    type: String,
    default: 'Unknown',
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Indexes for fast aggregation queries
visitSchema.index({ timestamp: -1 });
visitSchema.index({ ip: 1 });
visitSchema.index({ city: 1 });
visitSchema.index({ page: 1 });
visitSchema.index({ device: 1 });

module.exports = mongoose.model('Visit', visitSchema);
