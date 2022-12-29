import { useEffect, useState } from "react"
import '../App.css';
import EditTaskForm from "./EditTaskForm";

function TaskCard ({ task, removeTask, updateTask }) {

    // console.log(task.day_id)

    const [isTrue, setIsTrue] = useState(false)
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

    function editClick(id) {
      setIsTrue(!isTrue)
        // fetch(`http://localhost:9292/tasks/${id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type" : "application/json"
        //     },
        //     body: JSON.stringify({})
        // })
    }

    function handleSubmit(e, editedDay, editedTaskName, task) {
      e.preventDefault()
      fetch(`http://localhost:9292/tasks/${task.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          task_name: editedTaskName,
          day_id: editedDay
        })
      })
      .then(res => res.json())
      .then(updatedTask => {
        updateTask(updatedTask)
        setIsTrue(!isTrue)
      })
    }

    return(
      <div>
        <div class="container center">
          <div class="col s12 m6">
          {isTrue ? <EditTaskForm task={task} handleSubmit={handleSubmit} /> : null}
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">{task.task_name}</span>
                <p>{day}</p>
              </div>
              <div class="card-action">
                <a href="#" onClick={() => editClick(task.id)}>Edit ✎</a>
                <a href="#" onClick={() => handleDelete(task.id)}>Delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default TaskCard