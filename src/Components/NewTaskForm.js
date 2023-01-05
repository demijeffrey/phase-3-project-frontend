import { useState } from "react"

function NewTaskForm({ addToTasks }) {

    const [newTask, setNewTask] = useState('')
    const [newDay, setNewDay] = useState('')
    const [isTrue, setIsTrue] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/tasks", {
          method: "POST",
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify({
            task_name: newTask,
            day_id: newDay,
          }),
        })
        .then(res => res.json)
        .then(newTaskCard => {
          addToTasks(newTaskCard)
        })
        setNewDay("")
        setNewTask("")
        setIsTrue(true)
      }


    return (
      <div>
        <h4 className="center new-task-header">New Task</h4>
        <form className="container center task-form" onSubmit={handleSubmit}>
            <textarea className="white" type="" placeholder="new task here" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <br />
            <select className="browser-default" onChange={(e) => setNewDay(e.target.value)}>
                <option value="" disabled selected>Select Day</option>
                <option value="22">Sunday</option>
                <option value="23">Monday</option>
                <option value="24">Tuesday</option>
                <option value="25">Wednesday</option>
                <option value="26">Thursday</option>
                <option value="27">Friday</option>
                <option value="28">Saturday</option>
            </select>
            <br />
            <input type="submit" />
        </form>
        <br />
        {isTrue ? <h5 className="center">Task successfully added!</h5> : null}
      </div>
    )
}

export default NewTaskForm