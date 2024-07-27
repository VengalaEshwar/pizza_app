const { createProductRepo, getProductByIdRepo,deleteProductByIdRepo } = require("../repositories/productRepository");
const cloudinary = require('../config/cloudinaryConfig');
const fs = require('fs/promises');
async function createProduct(productDetails){
    try {
        let productImage = productDetails.imagePath;
        response=await cloudinary.uploader.upload(productImage);
        await createProductRepo({
            ...productDetails,
            productImage : response.secure_url
        });
        await fs.unlink(productImage);
        return response;
    } catch (error) {
        console.log(error );
    }
}
async function getProductByIdService(id){
    try {
        let product = await getProductByIdRepo(id);
        return product;
    } catch (error) {
        console.log(error)
    }
}
async function deleteProductByIdService(id){
    try {
        let product = await deleteProductByIdRepo(id);
        return product;
    } catch (error) {
        console.log(error)
    }
}
module.exports={createProduct,getProductByIdService,deleteProductByIdService};