const { verify } = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/serverConfig");

function isLoggedIn(req,res,next)
{
    let token = req.cookies.authToken;
    if(!token)
    {
        return res.status(401).json({
            success : false,
            message : "No Token Provided",
            error : "Not authonicated",
            data : {}
        });
    }
    let decode = verify(token,SECRET_KEY);
    if(!decode)
    {
        return res.status(401).json({
            success : false,
            message : "Token is not authorized",
            error : "TOken is changed",
            data : {}
        });
    }
    req.user={
        email : decode.email,
        id : decode.id
    }
    next();
}
module.exports={
    isLoggedIn
}