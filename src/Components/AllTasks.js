import TaskCard from "./TaskCard"

function AllTasks({ tasks, removeTask }) {

    const displayTasks = tasks.sort((a, b) => (a.day_id > b.day_id) ? 1 : -1)
    // console.log(displayTasks)

    return(
        <div>
            <div className="teal">
                <h3 className="center grey-text text-darken-4">All Tasks This Week</h3>
            </div>
            <div className="">
                {displayTasks.map(task => {
                    return <TaskCard task={task} removeTask={removeTask} />
                })}
            </div>
        </div>
    )
}

export default AllTasks