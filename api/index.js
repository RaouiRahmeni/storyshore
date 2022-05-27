const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = 8080; 
const mongoose= require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer');
const path = require('path')


dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended : true}))

    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function () {
      console.log("db connected");
    });

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,"images");
    },filename:(req,file,cb) => {
        cb(null, req.body.name)
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
      },
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
});

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);


app.get('*', (req, res) => { 
    res.sendFile(path.resolve(__dirname, '..', 'client', 'build'));
  });
  app.use( express.static(path.join(__dirname, "../client/build")))

app.listen(PORT, ()=>{
    console.log("i got your back")
});