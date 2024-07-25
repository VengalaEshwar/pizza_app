const {loginService} = require('../services/authServices')
async function login(req,res)
{
    try {
        let response=await loginService(req.body);
        res.cookie("authToken",response,{
            httpOnly : true,
            secure : false, //https only
            maxAge : 7*24*60*60*1000
        });
        res.status(201).json({
            status : true,
            message : "successfully logined",
            data : {},
            error : {}
        });
    } catch (error) {
        res.status(error.statusCode).json({
            status : false,
            message : error.message,
            data : {},
            error : error
        })
    }
}
module.exports={
    login
}