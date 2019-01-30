const express = require('express');
const { check, validationResult } = require('express-validator/check');
const { saitize } = require('express-validator/filter');
const bcrypt = require('bcryptjs');
//const passport = require('passport');
//const user = require('../models/users.js');
//const order = require('../models/order.js');
const course = require('../models/course.js');
const route = express.Router();

route.get('/courses',(req,res)=>{
    course.find()
    //.select()
    .exec()
    .then(sub=>{
        res.status(200).json({
            message:'All User',
            all:sub
        }) 
    })
    .catch()
})

route.post('/add_course',(req,res)=>{
    let c = new course({
        course:req.body.course,
        description:req.body.description,
        nov:req.body.nov,
    })
    c.save((err)=>{
        if (err) {
            console.log(err);
        }else{
            res.end();
        }
    })
})

route.delete('/delete_course/:id',(req,res)=>{
    course.findOneAndDelete(req.params.id,(err)=>{
        if (err) {
            console.log(err);
        }else{
            res.end();
        }
    })
})

module.exports = route;