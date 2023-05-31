import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from "body-parser";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// to read data from req.body body-parser middleware is used.
app.use(bodyParser.urlencoded());

// middleware for render static file such as css, images, js,audio, video.
// we made public folder as static folder.
app.use(express.static("public"));

app.get('/',(req,res)=>{res.sendFile(__dirname + "/home.html")});
app.get('/about',(req,res)=>{res.sendFile(__dirname + "/about.html")});
app.get('/contact',(req,res)=>{res.sendFile(__dirname + "/contact.html")});
app.get('/login',(req,res)=>{res.sendFile(__dirname + "/login.html")});
app.get('/resume',(req,res)=>{res.sendFile(__dirname+"/resume.pdf")});

app.get('/xyz',(req,res)=>{
    const city = req.query.city;
    const devices = req.query.devices;
    const branch = req.query.branch;

    const info = {
        'city':city,
        "devices":devices,
        "branch":branch

    }
    res.json(info);
});

app.post("/xyz",(req,res)=>{
    res.json(req.body)
})


app.listen(3000 , ()=>{console.log('server is listening 3000');})
