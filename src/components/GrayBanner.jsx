import React from 'react'
import { Container } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'

const GrayBanner = ({ title }) => {
    return (
        <div className="mb-5 py-5" style={{ background: "#505050" }}>
            <Container>
                <h4 className="text-white mb-0">
                    <Translate value={title} />
                </h4>
            </Container>
        </div>
    )
}

export default GrayBanner
