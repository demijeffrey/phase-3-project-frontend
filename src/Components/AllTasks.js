import TaskCard from "./TaskCard"

function AllTasks({ tasks }) {
    return(
        <div className="teal col s5 pull-s7">
            {tasks.map(task => {
                return <TaskCard task={task} />
            })}
        </div>
    )
}

export default AllTasks