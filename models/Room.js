const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  members: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
});

module.exports = mongoose.model('Room', RoomSchema);
