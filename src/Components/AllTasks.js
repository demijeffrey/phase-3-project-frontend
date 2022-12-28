import TaskCard from "./TaskCard"

function AllTasks({ tasks, removeTask }) {

    return(
        <div>
            <div className="teal col s4">
                <h3 className="center grey-text text-darken-4">All Tasks This Week</h3>
                {tasks.map(task => {
                    return <TaskCard task={task} removeTask={removeTask} />
                })}
            </div>
        </div>
    )
}

export default AllTasks