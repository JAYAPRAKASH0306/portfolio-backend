const express = require("express");
const bodyParser = require("body-parser");
require ('dotenv').config()
const cors=require("cors")
const app = express();
const PORT = process.env.PORT||8080;

const contactRoute = require("./routes/Portfolioroutes"); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// Use the route
app.use("/api/v1/portfolio", contactRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
