import './App.css';
import { useEffect, useState } from 'react';
import TaskCard from './Components/TaskCard';

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

  return (
    <div>
      <div className="row">

        <div className="col s3 grey">
          
        </div>

        <div className="col s9 teal">
          <TaskCard tasks={tasks} />
        </div>

      </div>
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