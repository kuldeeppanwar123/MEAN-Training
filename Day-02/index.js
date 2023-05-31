import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.get('/',(req,res)=>{res.sendFile(__dirname + "/home.html")});
app.get('/xyz',(req,res)=>{
    const a = req.query.username;
    const b = req.query.age;
    const c = req.query.dept;

    const info = {
        'username':a,
        "age":b,
        "dept":c
    }
    res.json(info);
});
app.get('/about',(req,res)=>{res.sendFile(__dirname + "/about.html")});
app.get('/contact',(req,res)=>{res.sendFile(__dirname + "/contact.html")});
app.get('/login',(req,res)=>{res.sendFile(__dirname + "/login.html")});


app.listen(3000 , ()=>{console.log('server is listening 3000');})
