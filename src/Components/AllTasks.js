import TaskCard from "./TaskCard"
import NewTaskForm from "./NewTaskForm"

function AllTasks({ tasks, removeTask, addToTasks }) {

    const displayTasks = tasks.sort((a, b) => (a.day_id > b.day_id) ? 1 : -1)

    return(
        // <div>
        //     <div className="teal">
        //         <h3 className="center all-tasks-header">All Tasks This Week</h3>
        //     </div>
        //     <div className="row container">
                // {displayTasks.map(task => {
                //     return <TaskCard key={task.id} task={task} removeTask={removeTask} />
                // })}
        //     </div>
        // </div>
        <div>
        <div className="row">
            <div className= "col s3 grey">
                <NewTaskForm addToTasks={addToTasks} />
            </div>
            <div className= "col s9 teal center">
            {displayTasks.map(task => {
                    return <TaskCard key={task.id} task={task} removeTask={removeTask} />
                })}
            </div>
        </div>
    </div>
    )
}

export default AllTasks