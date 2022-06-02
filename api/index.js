const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = 3899;
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer');
var cors = require('cors')

mongoose.connect(process.env.MONGO_URL).then(() => console.log('connected'))
    .catch(e => console.log(e));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    }, filename: (req, file, cb) => {
        cb(null, req.body.name)
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});
app.use(express.json())
app.use(cors())
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);
app.listen(PORT, () => console.log(`server is running at ${PORT}`))

