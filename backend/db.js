/*
    *Todo{
        title : string,
        description : string,
        cpmpleted : boolean
    }
*/

const mongoose = require("mongoose");

mongoose.connect("");

const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}