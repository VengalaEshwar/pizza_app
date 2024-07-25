const express = require('express');
const cookieParser = require('cookie-parser');
const { PORT } = require('./src/config/serverConfig');
const connectDB = require('./src/config/dbConfig');
const User = require('./src/schema/useSchema');
const userRouter = require("./src/routes/userRoutes");
const cartRouter = require("./src/routes/cartRoutes");
const authRouter = require("./src/routes/authRoutes");
const { isLoggedIn } = require('./src/validations/authValidator');


const app = express();

//middlewares
app.use(express.json());
app.use(express.text());
app.use(cookieParser())
app.use(express.urlencoded());
app.use("/users",userRouter);
app.use("/carts",cartRouter);
app.use("/auth",authRouter);
app.get("/ping",isLoggedIn,(req,res)=>{
    res.json({
        message : "pong"
    })
})
app.listen(PORT,async ()=>{
    await connectDB();
    console.log(`successfully connected at port ${PORT}`); 
})