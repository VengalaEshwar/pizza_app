const dotenv = require('dotenv');
dotenv.config();
module.exports={
    PORT : process.env.PORT,
    DB_URL : process.env.DB_URL,
    SECRET_KEY : process.env.SECRET_KEY,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME
}