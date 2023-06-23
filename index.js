const express = require("express");
const sequelize = require("./database/db");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const paymentRoute = require('./router/paymentRoute');

app.use(cors());
app.use(bodyParser.json())
app.use(express.json());


app.use("/api",paymentRoute)
app.listen(port, async (e) => {
    await sequelize.authenticate()
    console.log('Database Connected!');
    console.log(`Server running on PORT ${port}!`);
})