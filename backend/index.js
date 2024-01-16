// write a basic express boilerplate code,
// with express.json() middlware

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/todo",async(req,res) =>{ // here we create a new todo with title and a description
    const createPayload = req.body;
    const parsePayload  = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You entered wrong inputs",
        })
        return;
    }
    // put it in the database(mongoDb)
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false,
    })
+
    res.json({
        msg : "Todo created successfully",
    })
})

app.get("/todo", async(req,res)=>{ // here we get all todos in the list
    const todos = await todo.find({});
    res.json({
        todos : []
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
    await todo.update({      // update function expects 2 args 1. which todo you want to update, 2. what do you want to update
        _id : req.body.id,    
    },{
        completed : true
    })
    res.json({
        msg : "Todo marked as completed",
    })
})

app.listen(3000,() =>{
    console.log("Server is running on port 3000");
})
