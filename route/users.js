const express = require('express');
const { check, validationResult } = require('express-validator/check');
const { saitize } = require('express-validator/filter');
const bcrypt = require('bcryptjs');
//const passport = require('passport');
const user = require('../models/users.js');
const order = require('../models/order.js');
//const course = require('../models/course.js');
const route = express.Router();



route.get('/users',(req,res)=>{
        /* user.find({},(err,doc)=>{
                const response = {
                        all:doc.map(x=>{
                                return {
                                        email:x.email,
                                }e
                        }) 
                };
                res.status(200).json(response); 
        });  */
        user.find()
        .select('email')
        //.populate({path:'orders',populate:{path:'courses'}})
        .exec()
        .then(doc=>{
                const response = {
                        message:'All Users!!!',
                        all:doc.map(x=>{
                                return {
                                        email:x.email,
                                }
                        }) 
                        /* doc.forEach(x => {
                                return {
                                      x  //email:x.email,
                                }
                        }) */
                };
                res.status(200).json(response); 
                //res.status(200).json(doc)
        })
        .catch(err=>{
                console.log(err);
                
        })
        }      
)

route.post('/add_user',(req,res)=>{
        user.find({email:req.body.email},(err,data)=>{
                if (err) {
                       console.log(err);
                } else {
                if (data[0]) {
                        res.status('302').json({
                                message:'user already exit',
                                profile:data
                        })   
                } else {
                        const n = new user({
                                email:req.body.email,
                                password:req.body.password
                        })
                        n.save((err,out)=>{
                                if (err) {
                                       console.log(err);
                                } else {
                                        res.status('201').json({
                                                message:'user added successfully',
                                                result:out
                                        })  
                                }
                        })
                }
                }
                
        })
})


route.get('/user/:id',(req,res)=>{
        user.findById(req.params.id)
        .select('name email age order')
        //.populate({path:'orders',select:'_id',mat  ,populate:{path:'courses',select:'course nov'}})
        .exec()
        .then(doc=>{
                res.status(200).json({
                        message:'Details of this user',
                        detail:doc
                })
        })
        .catch(err=>{
                console.log(err);
        })
})


route.post('/update_user/:id',(req,res)=>{
        let u = {};
        req.body.name?u.name=req.body.name:'';
        req.body.age?u.age=req.body.age:'';
        user.findByIdAndUpdate(req.params.id,{$set:u},{upsert:true},(err)=>{
                if (err) {
                        console.log(err); 
                }
                console.log(req.body);
                res.end();
        });
})


route.get('/user/order/:id',(req,res)=>{
        user.findById(req.params.id,(err,result)=>{
                if (err) {
                       console.log(err);
                } else {
                        order.find({email:result.email})
                        //.select()
                        .populate('courses','course description nov')
                        .exec()
                        .then(order=>{
                                res.status(200).json({
                                    message:'List of orders',
                                    all:order,
                                })
                            })
                        .catch(err=>console.log(err))
                }
        })
})

/* route.post('/subscribe/:id',(req,res)=>{
        let u = req.body.order;
        user.findByIdAndUpdate(req.params.id,{$push:{orders:u}},{upsert:true},(err)=>{
                if (err) {
                       console.log(err);
                } else {
                        res.end();
                }
        })
}) */

route.delete('/user/:id',(req,res)=>{
        user.findOneAndDelete(req.params.id,(err)=>{
                if (err) {
                       console.log(err);
                }
        })
})

module.exports = route;