import { useEffect, useState } from "react"
import '../App.css';

function TaskCard ({ task, removeTask }) {

    // console.log(task.day_id)

    const [day, setDay] = useState('')
    const dayID = task.day_id

    const fetchedDay = () => {
        fetch(`http://localhost:9292/days/${dayID}`)
        .then(res => res.json())
        .then(day => setDay(day.name))
      }

    useEffect(() => {
        fetchedDay()
    }, [])

    function handleDelete(id) {
        fetch(`http://localhost:9292/tasks/${id}`, {
            method: "DELETE"
        })
        removeTask(id)
    }
    

    return(
        <div class="cards center">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{task.task_name}</span>
              <p>{day}</p>
            </div>
            <div class="card-action">
              <a href="#">Completed ✔</a>
              <a href="#" onClick={() => handleDelete(task.id)}>Delete</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default TaskCard