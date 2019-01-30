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
let userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
/*     orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order',
    }], */
});

//for defining models

let user = mongoose.model('user', userSchema);
module.exports = user;
