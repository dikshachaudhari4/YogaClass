const mongoose=require('mongoose');
const {Schema}=mongoose;
const PaymentSchema = new Schema({
   fname:{
       type:String,
       required:true
     },
   lname:{
        type:String,
        required:true
      },
   email:{
       type:String,
       required:true,
   },
   age:{
       type:Number,
       required:true,
   },
   gender:{
       type:String,
       required:true,
   },
   batch:{
    type:String,
    required:true,
   },
   paymentmode:{
    type:String,
    required:true,
   },
   cardnumber:{
    type:String,
    required:true,
   },
   amount:{
    type:Number,
    required:true,
   },
   cvc:{
    type:Number,
    required:true,
   },
   carddate:{
    type:String,
    required:true,
   },
   cardyear:{
    type:String,
    required:true,
   },
   date:{
   type:Date,
   default:Date.now
   }
  });
  const Pay=mongoose.model('pay',PaymentSchema);
  module.exports = Pay