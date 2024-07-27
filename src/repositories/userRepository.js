const User = require("../schema/useSchema");
async function findUser(userDetails){  
    let response = await User.findOne(userDetails);
    return response;
}
async function insertUser(userDetails)
{
    
    const userData = await User.create({
        firstName : userDetails.firstName,
        lastName : userDetails.lastName,
        mobileNO : userDetails.mobileNO,
        email : userDetails.email,
        password : userDetails.password,
        role : userDetails.role
    })
    return userData;
}
module.exports={
    findUser,
    insertUser
};