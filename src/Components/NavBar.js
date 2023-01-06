function NavBar() {
    
    return(
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">Task Planner and Bill Tracker</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="all-tasks">Tasks</a></li>
                    <li><a href="/home">Tasks By Day</a></li>
                    <li><a href="new-task">Create New Task</a></li>
                    <li><a href="bills">Bills</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar