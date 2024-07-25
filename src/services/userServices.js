const { findUser, insertUser } = require("../repositories/userRepository");

  async function registerUser(userDetails) {
    let user =await findUser({
      email: userDetails.email,
      mobilNO: userDetails.mobilNO,
    });
    if (user) {
      throw { reason: "Enter a valid Information", statusCode: 401 };
    }
    let userData = await insertUser({ 
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      mobileNO: userDetails.mobileNO,
      email: userDetails.email,
      password: userDetails.password
    });
    if(!userData)
    {
        throw { reason : "Something went,wrong",statusCode : 501}
    }
    return userData;
  }
module.exports = {registerUser};
