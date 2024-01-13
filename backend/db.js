/*
    *Todo{
        title : string,
        description : string,
        cpmpleted : boolean
    }
*/

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://parijatbhatt1:XriKznROSZhGhSL8@cluster0.2nwhboq.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}