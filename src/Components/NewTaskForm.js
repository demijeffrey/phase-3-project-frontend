function NewTaskForm() {
    return (
        <form className="center">
            <textarea className="white" type="" placeholder="new task here" />
            <br />
            <select class="browser-default">
                <option value="" disabled selected>Select Day</option>
                <option value="1">Sunday</option>
                <option value="2">Monday</option>
                <option value="3">Tuesday</option>
                <option value="4">Wednesday</option>
                <option value="5">Thursday</option>
                <option value="6">Friday</option>
                <option value="7">Saturday</option>
            </select>
            <br />
            <input type="submit" />
        </form>
    )
}

export default NewTaskForm