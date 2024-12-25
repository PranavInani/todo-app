import { useState, useEffect} from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"


function App() {

  const [todos, setTodos] = useState([
        {
          title: "Learn React",
          complete: false
        }
  ])

  const [selectedTab, setSelectedTab] = useState('All')

  function handleAddTask(newTodo) {
    const newTodoList = [...todos, {title: newTodo, complete: false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo.complete = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index)
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app',JSON.stringify({ todos : currTodos}))
  }

  useEffect(() => {
    if(!localStorage || !localStorage.getItem('todo-app')) { return }
    let db = JSON.parse(localStorage.getItem('todo-app'));
    setTodos(db.todos)
  })

  return (
    <>
      <Header todos = {todos}/>
      <Tabs selectedTab = {selectedTab} setSelectedTab = {setSelectedTab} todos = {todos}/>
      <TodoList todos = {todos} selectedTab = {selectedTab} handleDeleteTodo = {handleDeleteTodo} handleCompleteTodo = {handleCompleteTodo}/>
      <TodoInput handleAddTask = {handleAddTask}/>
    </>
  )
}

export default App
