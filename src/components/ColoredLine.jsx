import React from 'react'

const ColoredLine = ({ className, variant, color }) => {
    return (
        <div className={"colored-line " + (variant ? variant : "") + " " + (className ? className : "")} style={{ backgroundColor: color ? color : "#c5c5c5" }}></div>
    )
}

export default ColoredLine
