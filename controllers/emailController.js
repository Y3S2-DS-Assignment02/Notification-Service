const expressAsyncHandler = require("express-async-handler");
const emailService = require('../services/emailService');

const sendEmailController = expressAsyncHandler(async (req, res) => {
  const { email, subject, message } = req.body;

  try {
    const result = await emailService.sendEmail(email, subject, message);
    res.status(200).send({ message: "Email sent successfully!", result });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ message: "Email could not be sent", error });
  }
});

module.exports = { sendEmailController };
