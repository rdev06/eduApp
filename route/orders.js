const express = require('express');
const { check, validationResult } = require('express-validator/check');
const { saitize } = require('express-validator/filter');
const bcrypt = require('bcryptjs');
//const passport = require('passport');
const user = require('../models/users.js');
const order = require('../models/order.js');
//const course = require('../models/course.js');
const route = express.Router();


route.get('/orders',(req,res)=>{
    order.find()
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
})

route.post('/add_order/:id',(req,res)=>{
    user.findById(req.params.id,(err,result)=>{
        if (err) {
            console.log(err);
        } else {
            let o = new order({
                email:result.email,
                courses:req.body.courseID,
                quantity:req.body.quantity,
            })
            o.save((err)=>{
                if (err) {
                    console.log(err);
                } else{
                    res.end();
                }
            })
        }
    })

})


route.delete('/delete_order/:id',(req,res)=>{
    order.findOneAndDelete(req.params.id,(err)=>{
        if (err) {
            console.log(err);
        }else{
            res.end();
        }
    })
})

module.exports = route;