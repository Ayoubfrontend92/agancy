import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'
import ColoredLine from '../components/ColoredLine'

const InternationalServiceCard = ({ data }) => {
    return (
        <div className="international-service bg-white p-3">
            <h4 className="text-center text-timnak mb-3">
                {data.title_fa}
            </h4>
            <ColoredLine />
            <div>
                <ul className="list-unstyled px-4 py-3">
                    {data.services?.map((item, index) => (
                        <li key={index} className={index + 1 < data.services.length ? "mb-3" : ""}>
                            <FiCheckCircle className="text-primary" size="25px" />
                            <span className="text-black-50 fs-5 mx-3">
                                {item.service_fa}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <ColoredLine />

            <h4 className="fw-bold text-black-50 my-3 text-center">
                {data.price} IRR
            </h4>

            <div className="px-4">

                <Link to="/" className="btn btn-timnak w-100 btn-lg mb-3">
                    <Translate value="home.tr_card.btnOrderNow" />
                </Link>

                <Link to="/" className="btn btn-timnak-outline w-100 btn-lg mb-3">
                    <Translate value="home.tr_card.btnReadMore" />
                </Link>

            </div>

        </div>
    )
}

export default InternationalServiceCard
