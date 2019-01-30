const mongoose = require('mongoose');
const database = require('../config/database')
mongoose.connect(database.database, {
    useNewUrlParser: true
});
const db = mongoose.connection;

//for successful connection

db.once('open', () => {
    console.log('connected to MongoDB successfully!!!');

});

//for error in connection
db.on('error', (err) => {
    console.log(err);

});

//for defining schema
let orderSchema = mongoose.Schema({
    email:{
        type:String,
        ref:'user',
        required:true
    },
    courses:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course',
        required:true
    },
    quantity:{
        type: Number,
        default:1
    }
});

//for defining models

let order = mongoose.model('order', orderSchema);
module.exports = order;
