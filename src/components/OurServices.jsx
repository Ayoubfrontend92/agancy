import React from 'react'
import { Container } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'

const OurServices = ({ title, children }) => {
    return (
        <div className="our-services my-5">

            <Container fluid="lg">
                <div className="title position-relative d-flex align-items-center justify-content-center mb-5">
                    <span><Translate value={title} /></span>
                </div>
                {children}
            </Container>

        </div>
    )
}

export default OurServices
