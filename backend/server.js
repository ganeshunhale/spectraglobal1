const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// const image =require("../src/Assets/call.png")


const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "rameshrahi1244@gmail.com",
    pass: "bnceniijuawrnsyu",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  
  
  
  const name = req.body.name;
  const email = req.body.email;
  const number = req.body.number; 
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "rameshrahi1244@gmail.com",
    subject: "Contact Form Message From Spectra Global",
    html: `
    
    <p>Name: <span style="color:red;
    font-size: 160%;font-weight:700;">${name}</span></p>
    <p>Email: ${email}</p>
    <p>number: ${number}</p>
    <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});