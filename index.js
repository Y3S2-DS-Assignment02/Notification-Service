const express = require('express');
const {json} = require("express");
const app = express();
const emailRoutes = require('./routes/emailRoute')
const smsRoutes = require('./routes/smsRoute')

app.use(json());

app.use('/api/email', emailRoutes);
app.use('/api/sms', smsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    
    console.log(`Server running on port ${PORT}`);
});