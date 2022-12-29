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
        <form className="container center task-form" onSubmit={handleSubmit}>
            <textarea className="white" type="" placeholder="new task here" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <br />
            <select className="browser-default" onChange={(e) => setNewDay(e.target.value)}>
                <option value="" disabled selected>Select Day</option>
                <option value="15">Sunday</option>
                <option value="16">Monday</option>
                <option value="17">Tuesday</option>
                <option value="18">Wednesday</option>
                <option value="19">Thursday</option>
                <option value="20">Friday</option>
                <option value="21">Saturday</option>
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