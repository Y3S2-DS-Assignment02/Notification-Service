const express = require('express');
const router = express.Router();
const smsController = require('../controllers/smsController');


router.post('/sendSMS',smsController.sendSMSController)

module.exports = router;