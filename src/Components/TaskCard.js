import { useEffect, useState } from "react"

function TaskCard ( {task} ) {

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

    return(
        <div class="row">
        <div class="col s3 m4">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{task.task_name}</span>
              <p>{day}</p>
            </div>
            <div class="card-action">
              <a href="#">Completed ✔</a>
              <a href="#">Delete</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default TaskCard