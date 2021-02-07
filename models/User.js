const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  friends: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
  rooms: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Room',
    },
  ],
});

module.exports = mongoose.model('User', UserSchema);
