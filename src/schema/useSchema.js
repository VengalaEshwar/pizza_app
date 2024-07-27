const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema= mongoose.Schema({
    firstName : {
        type : "String",
        required : [true,"FirstName is required"],
        minlength : [5,"minimum length should be 5"],
        lowercase : true,
        trim : true
    },
    lastName : {
        type : "String",
        required : [true,"LastName is required"],
        minlength : [5,"minimum length should be 5"],
        lowercase : true,
        trim : true
    },
    mobileNO :{
        type : "String",
        required : true ,
        unique : [true,"number already exists"],
        maxlength : [10,"Enter valid mobile no"], 
        minlength : [10,"Enter valid mobile no"]
    },
    email :{
        type : "String",
        required : true,
        unique : [true,"already email exists"],
        trim : true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password :{
        type : "String",
        required : true,
        minlength : [6,"password length should be minimum 5"]
    },
    role :{
        type : String,
        required : false,
        default : "USER",
        enum : ['USER','ADMIN']
    }
     
},{
    timestamps : true
});
userSchema.pre('save', async function(){
    const temp =  await bcrypt.hash(this.password,10);
     this.password=temp;
});
const User = mongoose.model("user",userSchema);
module.exports=User;