const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const inventoryRoutes = require('./routes/inventory.js');
const cutomerCareRoutes = require('./routes/customer.js');

//app middleware
app.use(bodyParser.json());
app.use(cors()); //use to connect backend and frontend

//route middwware
app.use("/customercare", cutomerCareRoutes);

const PORT  = 8000;
const DB_URL = 'mongodb+srv://project1:project1@cluster0.b1cggpg.mongodb.net/Vidama'


mongoose.connect(DB_URL)
.then(() => {
    console.log("DB connected");
})
.catch((err) => console.log("DB connection error", err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})