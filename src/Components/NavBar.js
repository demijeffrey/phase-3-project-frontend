function NavBar() {
    return(
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo center">Daily Task Planner</a>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><a href="all-tasks">All Tasks</a></li>
                    <li><a href="/">Tasks By Day</a></li>
                    <li><a href="new-task">Create New Task</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar