import React from 'react'
import { Container } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'
import Banner from '../../images/banner-sample.jpg'

const ConfirmPayment = () => {
    return (
        <div className="confirm-payment mb-5">

            <div className="banner position-relative mb-5">
                <img src={Banner} alt="banner" width="100%" height="600" />
                <div className="info position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
                    <Container fluid="lg">
                        <h3 className="mb-0">
                            <Translate value="find_more.submit_payment.title" />
                        </h3>
                    </Container>
                </div>
            </div>

            <Container fluid="lg">
                <h3 className="text-center fw-bold">
                    <Translate value="find_more.submit_payment_confirm.title" />
                </h3>

                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-8 col-10">
                        <div className="d-flex align-items-center justify-content-between my-5">
                            <p className="text-timnak fw-bold h4">
                                <Translate value="find_more.submit_payment_confirm.trace_code" />
                            </p>
                            <p className="text-black-50 h2 fw-bold">
                                SS523A564D
                            </p>
                        </div>

                        <p className="text-center mb-5">
                            <Translate value="find_more.submit_payment_confirm.note" />
                        </p>

                        <div className="text-center">
                            <Link to="/find-more/financial-status" className="btn btn-lg btn-primary">
                                <Translate value="find_more.submit_payment_confirm.link" />
                            </Link>
                        </div>

                    </div>
                </div>

            </Container>
        </div>
    )
}

export default ConfirmPayment
