const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
  purchaseName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  buyer: {
    type: String,
    required: true,
  },
  consumers: {
    type: [Number],
  }
}, {
  timestamps: true
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
