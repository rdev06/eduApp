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
let courseSchema = mongoose.Schema({
    course: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    nov: {
        type: Number,
        require: true
    },
});

//for defining models

let course = mongoose.model('course', courseSchema);
module.exports = course;
