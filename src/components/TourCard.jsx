import React from 'react'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'

const TourCard = ({ data }) => {
    return (
        <div className="tour-card position-relative">

            <div className="item">
                <img src={data.image} alt={data.title_en} />

                <div className="content">
                    <h4 className="fw-bold text-timnak">
                        {data.title_en}
                    </h4>

                    <div className="descs">
                        <p>
                            {data.text_en.substring(0, 100) + '...'}
                        </p>
                    </div>

                    <p className="text-black-50 fw-bold">
                        {data.price}
                    </p>

                    <p className="text-black-50 fw-bold">
                        IRR
                    </p>
                </div>

            </div>
            <div className="overlay">

                <h4 className="fw-bold text-white mb-4">
                    {data.title_en}
                </h4>

                <div className="descs mb-4">
                    <p className="text-white">
                        {data.text_en.substring(0, 100) + '...'}
                    </p>
                </div>

                <p className="text-white">
                    Agust 5, 2021
                </p>

                <div className="mt-auto">
                    <Link to="" className="btn btn-lg btn-light mb-3 w-100">
                        <Translate value="home.tour_card.book_now" />
                    </Link>

                    <Link to="" className="btn btn-lg btn-outline-light w-100">
                        <Translate value="home.tour_card.book_now" />
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default TourCard
