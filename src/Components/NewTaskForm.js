import { useState } from "react"

function NewTaskForm({ addToTasks }) {

    const [newTask, setNewTask] = useState('')
    const [newDay, setNewDay] = useState('')

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
        .then(res => res.json())
        .then(newTaskCard => {
          addToTasks(newTaskCard)
        })
        setNewDay("0")
        setNewTask("")
      }


    return (
      <div>
        <h4 className="center new-task-header">New Task</h4>
        <form className="container center task-form" onSubmit={handleSubmit}>
            <textarea className="white" type="" placeholder="new task here" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <br />
            <select className="browser-default" value={newDay} onChange={(e) => setNewDay(e.target.value)}>
                <option value="0">Select Day</option>
                <option value="57">Sunday</option>
                <option value="58">Monday</option>
                <option value="59">Tuesday</option>
                <option value="60">Wednesday</option>
                <option value="61">Thursday</option>
                <option value="62">Friday</option>
                <option value="63">Saturday</option>
            </select>
            <br />
            <input type="submit" />
        </form>
      </div>
    )
}

export default NewTaskForm