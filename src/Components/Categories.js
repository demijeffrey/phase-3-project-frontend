import React, { useState } from "react"
import DayLinks from "./DayLinks"
import TaskCard from "./TaskCard"

function Categories({ days, tasks, removeTask }) {

    const [day, setDay] = useState('')
    const [dayTasks, setDayTasks] = useState('')

    function handleClick(day) {
        // console.log(day)
        setDay(day)
    }
    // console.log(day)

    return(
        <div className="row">

            <div className="col s3 grey">
                {days.map(day => {
                    return <DayLinks day={day} handleClick={handleClick} />
                })}
            </div>

            {/* <div className="col s9 teal">
                {tasks.map(task => {
                    return <TaskCard task={task} />
                })}
            </div> */}
            <div className="col s9 teal">
                {tasks.map(task => {
                    if(task.day_id === day.id){
                        return <TaskCard task={task} removeTask={removeTask} />
                    }
                })}
            </div>

      </div>
    )
}

export default Categories