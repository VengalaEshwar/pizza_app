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
async function logout(req, res) {

    console.log("Cookie from frontend", req.cookies);

    res.cookie("authToken", "", {
        httpOnly: true,
        secure: COOKIE_SECURE,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
        domain: FRONTEND_URL
    });
    return res.status(200).json({
        success: true,
        message: "Log out successfull",
        error: {},
        data: {}
    });
}
module.exports={
    login,
    logout
}