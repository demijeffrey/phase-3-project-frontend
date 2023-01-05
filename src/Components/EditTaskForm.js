import { useState } from "react"

function EditTaskForm({ task, handleSubmit }) {

    const [editedTaskName, setEditedTaskName] = useState(task.task_name)
    const [editedDay, setEditedDay] = useState(task.day_id)

    return (
        <form onSubmit={(e) => handleSubmit(e, editedDay, editedTaskName, task)}>
            <input className="white" value={editedTaskName} onChange={e => setEditedTaskName(e.target.value)} />
            <select className="browser-default" value={editedDay} onChange={e => setEditedDay(e.target.value)}>
                 <option value="22">Sunday</option>
                 <option value="23">Monday</option>
                 <option value="24">Tuesday</option>
                 <option value="25">Wednesday</option>
                 <option value="26">Thursday</option>
                 <option value="27">Friday</option>
                 <option value="28">Saturday</option>
            </select>
            <input type="submit" />
        </form>
    )
}

export default EditTaskForm