const mongoose = require("mongoose");
const uri="mongodb+srv://jayaprakash:16p25l0052@jp.djhe0bu.mongodb.net/portfolio"

// Check if the MONGODB_URI environment variable is set
if (!uri) {
  console.error("MONGODB_URI environment variable is not set.");
  process.exit(1);
}


// Connect to MongoDB using the provided URI
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  msg: String,
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
