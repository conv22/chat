const Message = require('../models/Message');
const Room = require('../models/Room');
const User = require('../models/User');

exports.GET_ALL_ROOMS = async (req, res) => {
  try {
    const rooms = await Room.find({});
    return res.json(rooms);
  } catch (e) {
    return res.status(500).json('Something went wrong');
  }
};

exports.GET_USER_USERNAME = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(400).json('User not found');
    }
    return res.json(user);
  } catch (e) {
    return res.status(500).json('Something went wrong');
  }
};

exports.POST_USER = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      const newUser = new User({ username: username });
      await newUser.save();
      return res.json(newUser);
    }
    return res.json(user);
  } catch (e) {
    return res.status(500).json({ msg: 'Something went wrong', e });
  }
};
