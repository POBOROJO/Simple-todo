// write a basic express boilerplate code,
// with express.json() middlware

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
app.use("express.json()");

app.post("/todo",async(req,res) =>{ // here we create a new todo with title and a description
    const createPayload = req.body;
    const parsePayload  = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You entered inputs",
        })
        return;
    }
    // put it in the database(mongoDb)
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false,
    })

    res.json({
        msg : "Todo created successfully",
    })
})

app.get("/todo", async(req,res)=>{ // here we get all todos in the list
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed" ,async(req,res)=>{ // here we mark a todo as completed
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You entered inputs",
        })
        return;
    }
    await todo.update({
        _id : req.body.id,    
    },{
        completed : true
    })
    res.json({
        msg : "Todo marked as completed",
    })
})

