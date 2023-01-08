import TaskCard from "./TaskCard"
import NewTaskForm from "./NewTaskForm"

function AllTasks({ tasks, removeTask, addToTasks, updateTask }) {

    const displayTasks = tasks.sort((a, b) => (a.day_id > b.day_id) ? 1 : -1)

    return(
        <div>
            <div className="row">
                <div className= "col s3 grey">
                    <NewTaskForm addToTasks={addToTasks} />
                </div>
             <div className= "col s9 teal center">
            {displayTasks.map(task => {
                    return <TaskCard key={task.id} task={task} removeTask={removeTask} updateTask={updateTask} />
            })}
            </div>
        </div>
    </div>
    )
}

export default AllTasks