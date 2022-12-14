const express=require('express');
const Payment = require('../models/Payment')
const User = require('../models/User')
const router=express.Router();
const {body,validationResult} = require('express-validator');
const bcrypt=require('bcryptjs');


router.post('/createuser',[
 body('name','Enter a valid Name').isLength({min:3}),
 body('email','Enter a valid Mail Id').isEmail(),
 body('password','Enter a valid Password').isLength({min:5}),

],async(req,res)=>{
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    try{
     let user=await User.findOne({email:req.body.email});
     if (user){
      return res.status(400).json({success,error:"Sorry a user with this email already exists"})
     }
     const salt=await bcrypt.genSalt(10);
     const secPass=await bcrypt.hash(req.body.password,salt)
     user=await User.create({
      name: req.body.name,
      email: req.body.email,
      password:secPass,
    });
    const data ={
     user:{
     id: user.id
     }
    }
    success=true
    res.json(user)
    }catch(error){
     console.error(error.message);
     res.status(500).send("some error occured")
    }

})

router.post('/login',[
     body('email','Enter a valid Mail Id').isEmail(),
     body('password','Password cannot be blank').exists(),
], async(req,res)=>{
     let success=false;
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }
     const{email,password}=req.body;
     try{
       let user=await User.findOne({email});
       if(!user){
          return res.status(400).json({error:"Please try to login with correct credentials"});
       }
       const passwordcompare=await bcrypt.compare(password,user.password);
       if(!passwordcompare){
          return res.status(400).json({success,error:"Please try to login with correct credentials"});
       }
       const data ={
          user:{
          id: user.id
          }
         }
         success=true;
         res.json({success})
     }catch(error){
          console.error(error.message);
          res.status(500).send("Internal server error occured")
     }
})

router.post('/Payment',[
  body('fname','Enter a valid First Name'),
  body('lname','Enter a valid Last Name'),
  body('email','Enter a valid email'),
  body('age','Enter a valid age'),
  body('gender','Enter a valid First Name gender'),
  body('batch','Enter a valid batch'),
  body('paymentmode','Enter a valid paymentmode'),
  body('cardnumber','Enter a valid cardnumber'),
  body('amount','Enter a valid amount'),
  body('cvc','Enter a valid cvc'),
  body('carddate','Enter a valid carddate'),
  body('cardyear','Enter a valid cardyear'),
  
 
 ],async(req,res)=>{
     let success=false;
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({success, errors: errors.array() });
     }
     try{
      let user=await User.findOne({email:req.body.email});
      if (user){
       return res.status(400).json({success,error:"Sorry a user with this email already exists"})
      }
      // const salt=await bcrypt.genSalt(10);
      // const secPass=await bcrypt.hash(req.body.password,salt)
      user=await Payment.create({
       fname: req.body.fname,
       lname: req.body.lname,
       email: req.body.email,
       age: req.body.age,
       gender: req.body.gender,
       batch: req.body.batch,
       paymentmode: req.body.paymentmode,
       cardnumber: req.body.cardnumber,
       amount:req.body.amount,
       cvc: req.body.cvc,
       carddate: req.body.carddate,
       cardyear: req.body.cardyear,
     });
     const data ={
      user:{
      id: user.id
      }
     }
     success=true
     res.json(user)
     }catch(error){
      console.error(error.message);
      res.status(500).send("some error occured")
     }
 
 })

module.exports=router