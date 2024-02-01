
const nodemailer = require("nodemailer");
const userModel = require("../models/user.model");

const userController  = {};

// create account
userController.createOne = async(req,res) => {
// check if the user exist
try{
const { email } = req.body;
const existingUser = await userModel.findOne({email : email});

if(existingUser){
return res.status(400).json({
    message:`Invitation sent already, please check your email`,
    status:"error",
    statusCode:400
})
}

// create the user account in the database
const user = userModel.create({email});

// send email to the user inviting him/her foor the awaiting list
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Welcome onboard ",
    html: `
    <body style="background-color:white;height:100%; width:100%">
    <div styles="min-height:100vh; width:100%; padding:20px">
    <h2>Nice Joining Our WaitList &#128640;!</h2>
    <p>We are happy to have you join our wait list</p>
    <span>please stay tuned</span>
    <p>If you didn't request for this code, you can safely ignore this message. Someone might have typed your email address by mistake <br/> Thanks.</p>
    </div>
    </body>
    `,
  };

  transporter.sendMail(mailOptions, function (error, succes) {
    if (error) {
     console.log(error)
      return res.json({ error: error });
    }
    // console.log("email sent successfully")
   return res.status(200).json({
    message:`joined successfully`,
    status:"success",
    statusCode:200,
    data:user,
 }) 
  });

}
catch(err){
return res.status(400).json({
 message:"Internal Server Error",
 status:"error",
 statusCode:400
})
}

}


userController.getAllUsers = async(req,res) => {
const allUsers = await userModel.find({});

return res.status(200).json({
    status:"success",
    statusCode:200,
    data:allUsers
})
}

module.exports = userController;



// login a user