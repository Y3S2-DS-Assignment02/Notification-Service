const expressAsyncHandler = require('express-async-handler');
const smsService = require('../services/smsService');

const sendSMSController = expressAsyncHandler(async (req, res) => {
    try {
        const { to, message } = req.body;

        // Validate required fields
        if (!to || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const response = await smsService.sendSMS(to, message);

        // Send the response back to the client
        res.status(200).json({ ...response });
    } catch (error) {
        console.error('Error sending SMS:', error);
        res.status(500).json({ error: 'Failed to send SMS' });
    }
});

module.exports = { sendSMSController };
