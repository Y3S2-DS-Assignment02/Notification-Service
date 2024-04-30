const axios = require('axios');

exports.sendSMS = async (to, message) => {
    try {
        const user_id = process.env.USER_ID;
        const api_key = process.env.API_KEY;
        const sender_id = process.env.SENDER_ID;

        // Validate required fields
        if (!user_id || !api_key || !sender_id) {
            throw new Error('Missing required environment variables');
        }

        // Construct the URL
        const url = `https://app.notify.lk/api/v1/send`;

        // Construct the request payload
        const payload = {
            user_id,
            api_key,
            sender_id,
            to,
            message,
        };

        // Make the POST request to the API
        const response = await axios.post(url, payload);

        return response.data;
    } catch (error) {
        throw error;
    }
};
