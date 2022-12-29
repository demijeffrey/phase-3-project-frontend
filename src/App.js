import './App.css';
import { useEffect, useState } from 'react';
import TaskCard from './Components/TaskCard';
import NavBar from './Components/NavBar';
import NavLinks from './Components/DayLinks';
import { Routes, Switch, Route } from "react-router-dom";
import Categories from './Components/Categories';
import NewTaskForm from './Components/NewTaskForm';
import AllTasks from './Components/AllTasks';


function App() {

  const [days, setDays] = useState([])
  const [tasks, setTasks] = useState([])

  const fetchedDays = () => {
    fetch("http://localhost:9292/days")
    .then(res => res.json())
    .then(days => setDays(days))
  }

  const fetchedTasks = () => {
    fetch("http://localhost:9292/tasks")
      .then(res => res.json())
      .then(tasks => setTasks(tasks))
  }

  useEffect(() => {
    fetchedDays()
    fetchedTasks()
  }, [])
  // console.log(tasks)

  function addToTasks(newTask) {
    setTasks([...tasks, newTask])
  }

  function removeTask(id) {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }

  function updateTask(updatedTask) {
    const updatedTaskList = tasks.map(task => {
      if(task.id === updatedTask.id) {
        return updatedTask
      } else {
        return task
      }
    })
    setTasks(updatedTaskList)
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Categories days={days} tasks={tasks} removeTask={removeTask} updateTask={updateTask} />} />
        <Route path='/new-task' element={<NewTaskForm />} addToTasks={addToTasks} />
        <Route path="/all-tasks" element={<AllTasks tasks={tasks} removeTask={removeTask} />} />
      </Routes>
    </div>
  );
}

export default App;