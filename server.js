const express = require("express");
const bodyParser = require("body-parser");
require ('dotenv').config()
const cors=require("cors")
const app = express();
const PORT = process.env.PORT||8080;
const pdfFilePath = require("./resume/resume")
const fs = require("fs");

const contactRoute = require("./routes/Portfolioroutes"); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.get("/resume.pdf", (req, res) => {
  const pdfFilePath = "./resume/resume.pdf"; // Provide the correct path to your PDF file
  res.download(pdfFilePath, "resume.pdf");

  // Check if the file exists
});
app.get("/img", (req, res) => {
  const imgFilePath = "./resume/img.jpg"; // Provide the correct path to your image file

  // Serve the image using the "sendFile" method
  res.sendFile(imgFilePath, { root: __dirname });
});

// Use the route
app.use("/api/v1/portfolio", contactRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
