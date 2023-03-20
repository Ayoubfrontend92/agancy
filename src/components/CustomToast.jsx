import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { BiQuestionMark } from 'react-icons/bi'

const CustomToast = ({ text, placement }) => {
    return (

        <OverlayTrigger
            placement={placement ? placement : "top"}
            overlay={
                <Tooltip>
                    {text}
                </Tooltip>
            }
        >
            <span className="bg-primary customBadge">
                <BiQuestionMark />
            </span>
        </OverlayTrigger>

    )
}

export default CustomToast
