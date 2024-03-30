const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Create a transporter using ProtonMail's SMTP server
const transporter = nodemailer.createTransport({
  host: "185.70.40.103", // ProtonMail's SMTP server IP address
  port: 587,
  secure: false,
  auth: {
    user: "zuorkindio@proton.me",
    pass: "Papapa90",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

app.use(express.json());
app.use(cors());

app.post("/api/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: "zuorkindio@proton.me", // Your ProtonMail email address
    to: "someonecool@email.com", // Recipient's email address
    subject: `Contact Form Submission - ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    } else {
      console.log("Email sent:", info.response);
      res.json({ message: "Email sent successfully" });
    }
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
