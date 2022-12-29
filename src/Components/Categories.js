import React, { useState } from "react"
import DayLinks from "./DayLinks"
import TaskCard from "./TaskCard"

function Categories({ days, tasks, removeTask, updateTask }) {

    const [day, setDay] = useState('')
    const [dayTasks, setDayTasks] = useState('')

    function handleClick(day) {
        // console.log(day)
        setDay(day)
    }
    // console.log(day)

    return(
        <div className="row">

            <div className="col s2 grey">
                {days.map(day => {
                    return <DayLinks day={day} handleClick={handleClick} />
                })}
            </div>
            <div className="col s10 teal">
                {tasks.map(task => {
                    if(task.day_id === day.id){
                        return <TaskCard task={task} removeTask={removeTask} updateTask={updateTask} />
                    }
                })}
            </div>

      </div>
    )
}

export default Categories