import React, { useState } from "react"
import DayLinks from "./DayLinks"
import TaskCard from "./TaskCard"

function Categories({ days, tasks, removeTask, updateTask }) {

    const [day, setDay] = useState('')
    const [isTrue, setIsTrue] = useState(true)

    function handleClick(day) {
        // console.log(day)
        setIsTrue(false)
        setDay(day)
    }
    // console.log(day)

    return(
        <div className="row">

            <div className="col s2 grey">
                {days.map(day => {
                    return <DayLinks key={day.id} day={day} handleClick={handleClick} />
                })}
            </div>
            <div className="col s10 teal">
                {isTrue ? <h4 className="center">A daily task planner to keep all your ducks in a row!</h4> : null}
                {tasks.map(task => {
                    if(task.day_id === day.id){
                        return <TaskCard key={task.id} task={task} removeTask={removeTask} updateTask={updateTask} />
                    }
                })}
            </div>

      </div>
    )
}

export default Categories