import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import { Routes, Route } from "react-router-dom";
import TasksByDay from './Components/TasksByDay';
import AllTasks from './Components/AllTasks';
import Bills from './Components/Bills';


function App() {

  const [days, setDays] = useState([])
  const [tasks, setTasks] = useState([])

  function renderTasks (days) {
    const allTasks = []
    days.map(day => day.tasks.map((task) => {
        task.day = day.name
        allTasks.push(task)
    }))
    setTasks(allTasks)
  }

  const fetchedDays = () => {
    fetch('http://localhost:9292/days')
    .then(res => res.json())
    .then(days => {
      setDays(days)
      renderTasks(days)
    })
  }

  useEffect(() => {
    fetchedDays()
  }, [])

  function addToTasks(newTaskCard) {
    days.filter(day => {
      if(day.id === newTaskCard.day_id){
        newTaskCard.day = day.name
        setTasks([...tasks, newTaskCard])
      } else {
        return null
      }
    })
  }

  function removeTask(id) {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }

  function updateTask(updatedTask) {
      days.filter(day => {
        if(day.id === updatedTask.day_id){
          updatedTask.day = day.name
          setTasks(tasks.map(task => {
            if(task.id === updatedTask.id) {
              return updatedTask
            } else {
              return task
            }
          }))
        }
      })
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<TasksByDay days={days} tasks={tasks} removeTask={removeTask} updateTask={updateTask} />} />
        <Route path="/all-tasks" element={<AllTasks tasks={tasks} removeTask={removeTask} addToTasks={addToTasks} updateTask={updateTask} />} />
        <Route path="/bills" element={<Bills />} />
      </Routes>
    </div>
  );
}

export default App;