import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'


function App() {
  const [todo,setTodo] = useState([]);

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todo}></Todos>
    </div>
  )
}

export default App
