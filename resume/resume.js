const fs = require("fs");

function servePDF(req, res) {
  const pdfFilePath = "./resume/resume.pdf"; 
  // Check if the file exists
  if (fs.existsSync(pdfFilePath,img)) {
return res;
} else {
    res.status(404).send("File not found");
  }
}

module.exports = servePDF;
