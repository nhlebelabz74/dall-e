const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/connectDB');
const { errorHandler } = require('./middleware');
require('dotenv').config();
const cors = require('cors');

const { 
    dalleRouter, 
    postRouter 
} = require('./routers');

const PORT = process.env.PORT;

// Create express app
const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/api/v1', [postRouter, dalleRouter]);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.status(200).send('Hello from the DALL-E API');
});

connectDB(false); //true if we want to connect to the online database

mongoose.connection.on("connected", async () => {
    console.log("SUCCESSFULLY CONNECTED TO DATABASE");
    app.listen(PORT, () => {
        console.log(`server listening on port: ${PORT}...`)
    });
});
mongoose.connection.on("disconnected", () => {
    console.log("Lost connection to database")
});