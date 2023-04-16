require('dotenv').config();
const {authorRouter } = require('./routes/author.routes')
const express = require("express");
const cors = require("cors");

const port = process.env.PORT;




require("./config/mongoose.config");

const app = express();



app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));
app.use('/api/author' , authorRouter);

app.listen( port, () => console.log(`Listening on port: ${port}`) );