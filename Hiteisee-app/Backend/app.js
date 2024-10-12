import express from 'express'

let port =  8000;
import cors from 'cors';
// console.log(__dirname, "dirname")
// require('dotenv').config({path: path.resolve(__dirname, '../.env') })

import { config } from 'dotenv';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import nodeMailer from "nodemailer";
import multer from "multer";
import bodyParser from 'body-parser'

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

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
 
app.post('/career-send-mail', (req,res) =>{
    console.log(12423747823647234);
    console.log('body',req.body);

    const {name,email,phone,designation} = req.body;
    console.log({name,email,phone,designation});
    // const resumePath = req.file ? req.file.path : null;

    

})
app.listen(port, (err) =>{
    if(err) throw err;
    console.log(`server is listening on port ${port}`)
})