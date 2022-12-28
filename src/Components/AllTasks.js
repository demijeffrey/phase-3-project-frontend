import TaskCard from "./TaskCard"

function AllTasks({ tasks, removeTask }) {

    return(
        <div>
            <div className="teal">
                <h3 className="center grey-text text-darken-4">All Tasks This Week</h3>
            </div>
            <div className="">
                {tasks.map(task => {
                    return <TaskCard task={task} removeTask={removeTask} />
                })}
            </div>
        </div>
    )
}

export default AllTasks