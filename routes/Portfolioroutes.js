const express = require("express");
const router = express.Router();
const Contact = require('../db/db'); // Import the MongoDB model

router.post("/send", async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    if (!name || !email || !msg) {
      return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newContact = new Contact({ name, email, msg });
    await newContact.save();

    res.status(200).json({ success: true, message: "Message saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
