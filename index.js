const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const inventoryRoutes = require('./routes/inventory.js');

//app middleware
app.use(bodyParser.json());
app.use(cors()); //use to connect backend and frontend

//route middwware
app.use("/inventory", inventoryRoutes);

const PORT  = 8000;
const DB_URL = 'mongodb+srv://eshaniechathurika:dummy@cluster0.njt6xy6.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(DB_URL)
.then(() => {
    console.log("DB connected");
})
.catch((err) => console.log("DB connection error", err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})