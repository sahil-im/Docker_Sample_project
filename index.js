const express = require('express');
const app = express();
require('dotenv').config()
require('./db/db');
app.use(express.json());
const student = require('./routes/router');

app.use('/students',student);
app.listen(process.env.PORT, ()=>
{
    console.log(`listenng PORT ${process.env.PORT}`)
})