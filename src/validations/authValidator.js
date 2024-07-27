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
    console.log(decode);
    req.user={
        email : decode.email,
        id : decode.id,
        role : decode.role
    }
    next();
}
function isAdmin(req,res,next)
{
    try {
        let role = req.user.role;
        console.log(role +" authoValidator");
        if(role==='ADMIN')
        {
            console.log("admin is authorized");
            next();
        }
        else{
            return res.status(401).json({
                success : false,
                message : "User is not authorized",
                data :{},
                error :{
                    statusCode : 401,
                    reason : "User is not authorized"
                }
            });
        }
    } catch (error) {
        return res.status(501).json({
            success : false,
            message : "somethng went wrong",
            data :{},
            error :{
                statusCode : 501,
                reason : "somethng went wrong"
            }
        });
    }
}
module.exports={
    isLoggedIn,
    isAdmin
}