const { findUser } = require("../repositories/userRepository");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require("../config/serverConfig");
async function loginService(userDetails)
{
    let user = await findUser({
        email : userDetails.email
    })
    if(!user)
    {
        throw { message : "Invalid user no data available" , statusCode : 401}
    }
    let isValidUser = await bcrypt.compare(userDetails.password,user.password);
    if(!isValidUser)
    {
        throw {message : "invalid user" , statusCode  : 401}
    }

    let token = jwt.sign({email : user.email,id : user._id,role : user.role},SECRET_KEY)
    return token;
}
module.exports={
    loginService
}