const express = require('express');
const { PORT } = require('./src/config/serverConfig');
const connectDB = require('./src/config/dbConfig');

const app = express();

//middlewares
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.listen(PORT,async ()=>{
    await connectDB();
    console.log(`successfully connected at port ${PORT}`);
})