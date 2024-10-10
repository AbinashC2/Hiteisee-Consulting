import express from "express";
const app = express();
let port = process.env.PORT || 8000;
import cors from 'cors';
// console.log(__dirname, "dirname")
// require('dotenv').config({path: path.resolve(__dirname, '../.env') })

import { config } from 'dotenv';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import nodeMailer from "nodemailer";
import multer from "multer";

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: resolve(__dirname, '../.env') }); // Adjusting path to find .env

// Set up file storage (using multer)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Append the original extension to the file
    }
});  


app.use(
    cors({
      origin: '*',
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      exposedHeaders: ['X-Custom-Header', 'X-Another-Header'],
    })
);

// Now you can access your environment variables
console.log(process.env.MAIL_USERNAME,'username');

const upload = multer({ storage: storage });

const contact = multer()

const transPorter = nodeMailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
      }
});


app.get('/',async (req,res)=>{
    try {
        res.send('hello')
    } catch (error) {
        return res.status(200).json({
            message:"Welcome to nyc"
        })
    }
})
 
app.post('/send-email-hr', upload.single('resume'), (req,res) =>{
    console.log(12423747823647234);
    console.log('body',req.body);

    const {name,email,phone,designation} = req.body;
    console.log({name,email,phone,designation});
    const resumePath = req.file ? req.file.path : null;

    let information = transPorter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `Job Application For ${designation}`,
        text: `New job application.\n\nCandidate Details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDesignation: ${designation}`,
        attachments: [
            {
              filename: req.file.originalname, // Resume file name
              path: resumePath, // Resume file path
            }
          ]
    }, (error,info) => {
        if(error){
            console.log("Error: ",error);
            res.status(500).json({message: "Error sending mail", error});
        }
        else{
            console.log("Mail sent " + info.response);
            res.status(200).json({message: "Email sent successfully"})
        }
    })


})
app.listen(port, (err) =>{
    if(err) throw err;
    console.log(`server is listening on port ${port}`)
})