import React from 'react'
import { NavLink } from 'react-router-dom'

function DayLinks({ day, handleClick }) {
    
    return(
        <nav className="grey">
            <NavLink className="waves-effect waves-light btn fixed btn-large" to={day.id} onClick={() => handleClick(day)}>{day.name}</NavLink>
            <br />
        </nav>
    )
}

export default DayLinks