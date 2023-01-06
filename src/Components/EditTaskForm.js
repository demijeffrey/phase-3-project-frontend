import { useState } from "react"

function EditTaskForm({ task, handleSubmit }) {

    const [editedTaskName, setEditedTaskName] = useState(task.task_name)
    const [editedDay, setEditedDay] = useState(task.day_id)

    return (
        <form onSubmit={(e) => handleSubmit(e, editedDay, editedTaskName, task)}>
            <input className="white" value={editedTaskName} onChange={e => setEditedTaskName(e.target.value)} />
            <select className="browser-default" value={editedDay} onChange={e => setEditedDay(e.target.value)}>
                 <option value="29">Sunday</option>
                 <option value="30">Monday</option>
                 <option value="31">Tuesday</option>
                 <option value="32">Wednesday</option>
                 <option value="33">Thursday</option>
                 <option value="34">Friday</option>
                 <option value="35">Saturday</option>
            </select>
            <input type="submit" />
        </form>
    )
}

export default EditTaskForm