import React, { useState } from 'react'
import { Nav } from 'react-bootstrap';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const CustomDropDown = ({ navtitle, children }) => {

    const [open, setOpen] = useState(false);

    const handleMouseOver = () => {
        if (window.innerWidth > 992)
            setOpen(true)
    }

    const handleMouseLeave = () => {
        if (window.innerWidth > 992)
            setOpen(false)
    }

    return (
        <Nav.Item className="position-relative" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <div className="d-flex d-lg-block justify-content-between">
                {navtitle}
                {open ? <BsChevronUp className="d-lg-none d-inline cursor-pointer" onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open} />
                    : <BsChevronDown className="d-lg-none d-inline cursor-pointer" onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open} />}

            </div>
            <div className={open ? "sub-navs open" : "sub-navs"}>
                {children}
            </div>
        </Nav.Item>
    )
}

export default CustomDropDown
