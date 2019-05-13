const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user:'stakanome@gmail.com',
    pass:'7qvt6t2738'
  }
})

const mailOptions = {
  from:'stakanome@gmail.com',
  to:'hermantolakoro@gmail.com',
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
