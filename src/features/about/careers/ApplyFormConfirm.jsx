import React from 'react'
import { Container } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { FiCheckCircle } from 'react-icons/fi'

const ApplyFormConfirm = () => {
    return (
        <div className="apply-form-confirm mb-5">

            <div className="bg-timnak py-5 mb-5">
                <Container fluid="lg">
                    <h3 className="text-white mb-0">
                        <Translate value="about.careers.applyF_confirm.title" />
                    </h3>
                </Container>
            </div>

            <Container fluid="lg">

                <div className="d-flex justify-content-center py-5">

                    <FiCheckCircle size="100px" color="#005300" />

                </div>

                <p className="mb-5">
                    <Translate value="about.careers.applyF_confirm.thanks" />
                </p>

                <p className="mb-5">
                    <Translate value="about.careers.applyF_confirm.onlySuit" />
                </p>

                <p className="mb-1">
                    <Translate value="about.careers.applyF_confirm.bestReg" />
                </p>
                <p className="mb-1">
                    <Translate value="about.careers.applyF_confirm.timnakGroup" />
                </p>

            </Container>


        </div>
    )
}

export default ApplyFormConfirm
