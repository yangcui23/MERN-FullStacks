require('dotenv').config();

const express = require("express");
const cors = require("cors");

const port = process.env.PORT;

const app = express();


require("./config/mongoose.config");

app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

const ProductRoutes =  require("./routes/product.route");
ProductRoutes(app);



app.listen( port, () => console.log(`Listening on port: ${port}`) );