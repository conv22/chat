const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessageSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  room: {
    type: mongoose.Types.ObjectId,
    ref: 'Room',
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Message', MessageSchema);
