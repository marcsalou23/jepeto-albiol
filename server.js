const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); // Add CORS middleware

// Route to handle sending emails
app.post("/send-email", (req, res) => {
  // Get email details from request body
  const { name, phone, email, message } = req.body;

  // Create a Nodemailer transporter object with Gmail SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "felixianolopex5@gmail.com",
      pass: "Xaxaxa90",
    },
  });

  // Email message options
  const mailOptions = {
    from: "felixianolopex5@gmail.com",
    to: "felixianolopex5@gmail",
    subject: "New Contact Form Submission",
    text: `
      Name: ${name}\n
      Phone: ${phone}\n
      Email: ${email}\n
      Message: ${message}\n
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
