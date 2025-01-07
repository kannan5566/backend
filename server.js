const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const router = require('./view/getView'); 

// MIDDLEWARES
app.use(express.json());
app.use(cors());

console.log(process.env.MONGOOSE_URL)
// MONGOOSE CONNECTION
mongoose.connect(process.env.MONGOOSE_URL)
    .then(() => {
        console.log('Database connected successfully!');
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });

// Use the routes from the router
app.use("/register", router);

// PORT DETAILS
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
