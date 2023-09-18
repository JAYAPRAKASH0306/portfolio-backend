// const nodemailer = require("nodemailer");
// require("dotenv").config();

// // Transporter
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.USER,
//     pass: process.env.PASSWORD,
//   },
// });

// const sendEmailController = (req, res) => {
//   try {
//     const { name, email, msg } = req.body;

//     // Validation
//     if (!name || !email || !msg) {
//       return res.status(400).json({
//         success: false,
//         message: "Please Provide All Fields",
//       });
//     }

//     // Email matter
//     transporter.sendMail({
//       to: process.env.USER,
//       from: process.env.USER,
//       subject: "Regarding Mern Portfolio App",
//       html: `
//         <h5>Detail Information</h5>
//         <ul>
//           <li><p>Name : ${name}</p></li>
//           <li><p>Email : ${email}</p></li>
//           <li><p>Message : ${msg}</p></li>
//         </ul>
//       `,
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Your Message Send Successfully",
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       message: "Send Email API Error",
//       error: error.message,
//     });
//   }
// };

// module.exports = { sendEmailController };
