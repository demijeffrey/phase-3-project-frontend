import './App.css';
import { useEffect, useState } from 'react';
import TaskCard from './Components/TaskCard';
import NavBar from './Components/NavBar';
import NavLinks from './Components/NavLinks';
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

  // function handleSubmit(e, newTask, newDay) {
  //   e.preventDefault()
  //   fetch("http://localhost:9292/tasks", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type" : "application/json",
  //     },
  //     body: JSON.stringify({
  //       task_name: newTask,
  //       day_id: newDay,
  //     }),
  //   })
  //   .then(res => res.json)
  //   .then(newTaskCard => {
  //     setTasks([...tasks, newTaskCard])
  //   })
  // }
  function addToTasks(newTask) {
    setTasks([...tasks, newTask])
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/categories' element={<Categories days={days} tasks={tasks} />} />
        <Route exact path='/new-task' element={<NewTaskForm />} addToTasks={addToTasks} />
        <Route exact path="/all-tasks" element={<AllTasks tasks={tasks} />} />
      </Routes>
    </div>
  );
}

export default App;


{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */}