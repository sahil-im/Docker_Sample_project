const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL,
    {
        dbName:process.env.MONGODB_NAME
    }
).then(() => {
    console.log("Connection Sucessful");
}).catch((err) => {
    console.log("Connection UnSucessful");
})