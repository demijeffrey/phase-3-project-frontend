import { useState } from "react"

function EditTaskForm({ task, handleSubmit }) {

    const [editedTaskName, setEditedTaskName] = useState(task.task_name)
    const [editedDay, setEditedDay] = useState('')

    return (
        <form onSubmit={(e) => handleSubmit(e, editedDay, editedTaskName, task)}>
            <input className="white" value={editedTaskName} onChange={e => setEditedTaskName(e.target.value)} />
            <select className="browser-default" onChange={e => setEditedDay(e.target.value)}>
                 <option value="" disabled selected>Select Day</option>
                 <option value="15">Sunday</option>
                 <option value="16">Monday</option>
                 <option value="17">Tuesday</option>
                 <option value="18">Wednesday</option>
                 <option value="19">Thursday</option>
                 <option value="20">Friday</option>
                 <option value="21">Saturday</option>
            </select>
            <input type="submit" />
        </form>
    )
}

export default EditTaskForm