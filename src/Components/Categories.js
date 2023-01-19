import React, { useState } from "react"
import DayLinks from "./DayLinks"
import TaskCard from "./TaskCard"

function Categories({ days, removeTask, updateTask }) {

    const [day, setDay] = useState({tasks: []})
    const [isTrue, setIsTrue] = useState(true)

    function handleClick(day) {
        setIsTrue(false)
        setDay(day)
    }

    return(
        <div className="row">

            <div className="col s2 grey">
                {days.map(day => {
                    return <DayLinks key={day.id} day={day} handleClick={handleClick} />
                })}
            </div>
            <div className="col s10 teal">
                {isTrue ? <div><h4 className="center task-header">A daily task planner and monthly bill tracker to keep all your ducks in a row!</h4><h4 className="center">🦆🦆🦆🦆🦆🦆🦆</h4></div> : null}
                {day.tasks.map(task => {
                    return <TaskCard key={task.id} taskDay={day.name} task={task} removeTask={removeTask} updateTask={updateTask} />
                })}
            </div>

      </div>
    )
}

export default Categories