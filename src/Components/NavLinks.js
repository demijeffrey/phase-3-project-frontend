import React from 'react'
// import {NavLink} from 'react-router-dom'

function NavLinks( {day} ) {
    return(
        <nav className="navbar-fixed">
            {/* <a className="waves-effect waves-light btn fixed">{day.name}</a> */}
            <h5>{day.name}</h5>
            <br /><br /><br />
        </nav>
    )
}

export default NavLinks