import React from 'react'

function DayLinks({ day, handleClick }) {
    
    return(
        <div className="grey">
            <br />
            <a className="waves-effect waves-light btn fixed btn-large" onClick={() => handleClick(day)}>{day.name}</a>
            <br />
        </div>
    )
}

export default DayLinks