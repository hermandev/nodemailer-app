const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user:'email@gmail.com',
    pass:'password'
  }
})

const mailOptions = {
  from:'email@gmail.com',
  to:'emailtujuan@gmail.com',
  subject:'Sending Email using Node.js',
  text:'Halo ini adalah email percobaan menggunakan nodemailer dari nodeJS'
}

transporter.sendMail(mailOptions, (error, info) => {
  if(error) {
    console.log("Error....")
  } else {
    console.log("Email Send: " + info.response)   
  }
})
