const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const dotenv = require('dotenv');

const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
dotenv.config();

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    w: 2,
    useUnifiedTopology: true 
}, () => {
    console.log("connected to db")
})

app.use(express.json())

app.use("/api/user", authRoute);
app.use("/api/posts", postRoute)
app.listen(port, () => {
    console.log("running")
})
