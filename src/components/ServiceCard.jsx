import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ data }) => {
    return (
        <div className="service-card position-relative">
            <Link to={data.hrf} className="d-block">
                <img src={process.env.PUBLIC_URL + data.img} alt={data.title} width="100%" />
                <div className="overlay position-absolute bottom-0 p-3 w-100 bg-glassy">
                    <p className="mb-0 text-dark h3">{data.title}</p>
                </div>
            </Link>
        </div>
    )
}

export default ServiceCard
