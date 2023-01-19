import TaskCard from "./TaskCard"
import NewTaskForm from "./NewTaskForm"
import { useState } from "react"

function AllTasks({ tasks, removeTask, addToTasks, updateTask, days }) {

    const displayTasks = tasks.sort((a, b) => (a.day_id > b.day_id) ? 1 : -1)

    // const [dayName, setDayName] = useState('')

    // function dayNames(task) {
    //     days.filter(day => {
    //         if(day.id === task.day_id){
    //             return setDayName(day.name)
    //         }
    //     })
    // }

    return(
        <div>
            <div className="row">
                <div className= "col s3 grey">
                    <NewTaskForm addToTasks={addToTasks} />
                </div>
             <div className= "col s9 teal center">
            {displayTasks.map(task => {
                    // dayNames(task)
                    return <TaskCard key={task.id} taskDay={task.day_id} task={task} removeTask={removeTask} updateTask={updateTask} />
            })}
            </div>
        </div>
    </div>
    )
}

export default AllTasks