const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const inventoryRoutes = require('./routes/inventory.js');
const orderRoutes = require('./routes/order_placement.js');

//app middlewarennpm 
app.use(bodyParser.json());
app.use(cors()); //use to connect backend and frontend

//route middwware
app.use("/inventory", inventoryRoutes);
app.use("/order_placement", orderRoutes);



//database name
const PORT  = 8000;
const DB_URL ='mongodb+srv://chamudiniayodya23:chamudiniayodya23@cluster0.tezdeov.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(DB_URL)
.then(() => {
    console.log("DB connected");
})
.catch((err) => console.log("DB connection error", err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})
