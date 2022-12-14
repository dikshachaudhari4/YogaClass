const mongoose=require('mongoose');
const mongoURI="mongodb://127.0.0.1:27017/Tesr";
const connectToMongo = async()=>{
    try{
        await mongoose.connect(mongoURI);
        console.log("Connected to Mongo Successfully");
    }catch(err)
    {
        console.log("failed",err);
    }
};

module.exports = connectToMongo;