import { useState } from "react";


export function CreateTodo() {
    //creating local state variable
    const [title ,setTitle] = useState("");
    const [description , setDescription] = useState("");

    return <div>
        <input style={{
                padding : 10,
                margin : 10
            }} type="text" placeholder="title" onChange={function(e){
                const value = e.target.value;
                setTitle(e.target.value)
            }}></input> <br />
            <input style={{
                padding : 10,
                margin : 10
            }} type="text" placeholder="description"onChange={function(e){
                const value = e.target.value;
                setDescription(e.target.value)
            }}></input> <br />

            <button style={{
                padding : 10,
                margin : 10
            }} onClick={() =>{
               fetch("http://localhost:3000/todo",{
                    method : "POST",
                    body: JSON.stringify({ // to send a body as a POST request we need to JSON.stringify the body and also send a
                        title:title,
                        description:description
                    }),
                    headers : {
                        "Content-Type" : "application/json"
                    }
               })
                .then(async function(resposne){
                    const json = await resposne.json();
                    alert("Todo added"); 
                })
            }}>Add todo</button>
        </div>
}