import TaskCard from "./TaskCard"

function AllTasks({ tasks, removeTask }) {

    return(
        <div className="teal col s5 pull-s7">
            <h3 className="center grey-text text-darken-4">All Tasks This Week</h3>
            {tasks.map(task => {
                return <TaskCard task={task} removeTask={removeTask} />
            })}
        </div>
    )
}

export default AllTasks