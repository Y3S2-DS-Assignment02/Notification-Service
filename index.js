const express = require('express');
const {json} = require("express");
const app = express();
const emailRoutes = require('./routes/emailRoute')
app.use(json());

app.use('/api/email', emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    
    console.log(`Server running on port ${PORT}`);
});