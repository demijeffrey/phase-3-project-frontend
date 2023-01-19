import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import { Routes, Route } from "react-router-dom";
import Categories from './Components/Categories';
import AllTasks from './Components/AllTasks';
import Bills from './Components/Bills';


function App() {

  const [days, setDays] = useState([])
  const [tasks, setTasks] = useState([])

  const renderDays = (tasks) => {
      const taskDays = tasks.map(task => {
          return task.day
      })
      const uniqueIds = []
      const uniqueDays = taskDays.filter(day => {
        const isDuplicate = uniqueIds.includes(day.id);
        if (!isDuplicate) {
          uniqueIds.push(day.id);
          return true;
        }
        return false;
      })
      setDays(uniqueDays.sort((a, b) => (a.id > b.id) ? 1 : -1))
  }

  const fetchedTasks = () => {
    fetch("http://localhost:9292/tasks")
      .then(res => res.json())
      .then(tasks => {
        setTasks(tasks)
        renderDays(tasks)
      })
  }

  useEffect(() => {
    fetchedTasks()
  }, [])

  function addToTasks(newTaskCard) {
    setTasks([...tasks, newTaskCard])
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
        <Route path="/all-tasks" element={<AllTasks tasks={tasks} removeTask={removeTask} addToTasks={addToTasks} updateTask={updateTask} />} />
        <Route path="/bills" element={<Bills />} />
      </Routes>
    </div>
  );
}

export default App;