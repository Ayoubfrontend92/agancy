import React from 'react'
import { Link } from 'react-router-dom'

const HoverableCard = ({ data }) => {
    return (
        <div className="service-card-hoverable position-relative">
            <Link to={data.hrf} className="d-block">
                <img src={process.env.PUBLIC_URL + data.img} alt={data.title} width="100%" />
                <div className="overlay position-absolute bottom-0 top-0 left-0 right-0 p-3 w-100 d-flex align-items-center justify-content-center">
                    <p className="mb-0 h3">{data.title}</p>
                </div>
            </Link>
        </div>
    )
}

export default HoverableCard
