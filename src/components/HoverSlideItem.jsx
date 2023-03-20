import React from 'react'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'

const HoverSlideItem = ({ data, link, link_text }) => {
    return (
        <div className="hover-slide-card">
            <img src={data.image} alt={data.title_en} />
            <div className="overlay">
                <h4 className="fw-bold text-primary mb-3">
                    {data.title_en}
                </h4>
                <h6 className="fw-bold text-warning">
                    {data.text_en}
                </h6>
                <div className="d-flex justify-content-end mt-auto">
                    <Link to={link} className="btn btn-timnak-outline">
                        <Translate value={link_text} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HoverSlideItem
