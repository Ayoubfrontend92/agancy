import React from 'react'
import { Container } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import BannerImage from '../images/banner-sample.jpg'

const Banner = ({ api, title }) => {
    return (
        <div className="banner position-relative mb-5">
            <img src={BannerImage} alt="banner" width="100%" height="600" />
            <div className="info position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
                <Container>
                    <h3 className="mb-0">
                        <Translate value={title} />
                    </h3>
                </Container>
            </div>
        </div>
    )
}

export default Banner
