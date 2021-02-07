const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.post('/', mainController.POST_USER);

module.exports = router;
