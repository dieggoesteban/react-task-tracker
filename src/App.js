import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Got a gym subscription",
        day: "22/02/2021",
        reminder: true
    },
    {
        id: 2,
        text: "Go to the glasses store",
        day: "27/02/2021",
        reminder: true
    },
    {
        id: 3,
        text: "Sign up to college classes",
        day: "23/02/2021",
        reminder: false
    },
    {
        id: 4,
        text: "Keep learning React!",
        day: "25/02/2021",
        reminder: false
    },
  ])


  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1    
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))  
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {... task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}></Header>
      {
        showAddTask && <AddTask onAdd={addTask}></AddTask>
      }
      {
        tasks.length > 0 
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> 
          : 'No tasks pending '
      }
    </div>
  )
}

export default App