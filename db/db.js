const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/", {
    dbName:"portfolio",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  msg: String,
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
