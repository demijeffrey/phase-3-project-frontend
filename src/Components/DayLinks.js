import React from 'react'

function DayLinks({ day, handleClick }) {
    return(
        <div className="grey">
            <a className="waves-effect waves-light btn fixed" onClick={() => handleClick(day)}>{day.name}</a>
            <br /><br />
        </div>
    )
}

export default DayLinks