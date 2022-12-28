import React from 'react'
// import {NavLink} from 'react-router-dom'

function NavLinks({ day, handleClick }) {
    return(
        <div className="grey">
            <a className="waves-effect waves-light btn fixed" onClick={() => handleClick(day)}>{day.name}</a>
            {/* <h5>{day.name}</h5> */}
            <br /><br />
        </div>
    )
}

export default NavLinks