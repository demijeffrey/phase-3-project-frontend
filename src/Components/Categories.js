import React from "react"
import NavLinks from "./NavLinks"
import TaskCard from "./TaskCard"

function Categories({ days, tasks }) {
    return(
        <div className="row">

            <div className="col s3 grey">
                {days.map(day => {
                    return <NavLinks day={day} />
                })}
            </div>

            <div className="col s9 teal">
                {tasks.map(task => {
                    return <TaskCard task={task} />
                })}
            </div>

      </div>
    )
}

export default Categories