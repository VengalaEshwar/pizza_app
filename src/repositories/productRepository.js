const { ConnectionClosedEvent } = require('mongodb');
const Product = require('../schema/productSchema');
async function createProductRepo(productDetails){
    try {
        const response = await Product.create(productDetails);
        return response;
    } catch (error) {
        // throw {error : "Something went wrong" ,statusCode : 501};
        console.log(error);
    }
}
async function getProductByIdRepo(id){
    try {
        const response = await Product.findOne({_id : id});
        console.log(response);
        return response;
    } catch (error) {
        // throw {error : "Something went wrong" ,statusCode : 501};
        console.log(error);
    }
}
async function deleteProductByIdRepo(id){
    try {
        const response = await Product.deleteOne({_id : id});
        console.log(response);
        return response;
    } catch (error) {
        // throw {error : "Something went wrong" ,statusCode : 501};
        console.log(error);
    }
}
module.exports={createProductRepo,getProductByIdRepo,deleteProductByIdRepo} ;
