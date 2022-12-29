import TaskCard from "./TaskCard"

function AllTasks({ tasks, removeTask }) {

    const displayTasks = tasks.sort((a, b) => (a.day_id > b.day_id) ? 1 : -1)

    return(
        <div>
            <div className="teal">
                <h3 className="center all-tasks-header">All Tasks This Week</h3>
            </div>
            <div className="row container">
                {displayTasks.map(task => {
                    return <TaskCard key={task.id} task={task} removeTask={removeTask} />
                })}
            </div>
        </div>
    )
}

export default AllTasks