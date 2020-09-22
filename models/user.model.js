const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  owed: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
