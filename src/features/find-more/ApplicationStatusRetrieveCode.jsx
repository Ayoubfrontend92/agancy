import React from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'

import Banner from '../../images/banner-sample.jpg'

const ApplicationStatusRetrieveCode = () => {
    return (
        <div className="application-status-code mb-5">

            <div className="banner position-relative mb-5">
                <img src={Banner} alt="banner" width="100%" height="600" />
                <div className="info position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
                    <h3 className="mb-0">
                        <Translate value="find_more.financial_status.title" />
                    </h3>
                </div>
            </div>



            <Container fluid="lg">
                <Row className="justify-content-center">
                    <div className="col-md-7">

                        <p className="mb-5 text-center">
                            <Translate value="find_more.application_retrieve_code.code_hint" />
                        </p>

                        <Form>

                            <div className="mb-4">
                                <Form.Control type="text" maxLength="6" minLength="6" size="lg" className="text-center" autoFocus="true" style={{ letterSpacing: "40px" }} />
                            </div>


                            <div className="d-flex align-items-center justify-content-between">
                                <button type="submit" className="btn btn-lg py-3 btn-primary">
                                    <Translate value="find_more.application_retrieve_code.resend_code" />
                                </button>
                                <button type="button" className="btn btn-lg py-3 btn-primary">
                                    <Translate value="find_more.application_retrieve_code.validate_code" />
                                </button>
                            </div>


                        </Form>

                    </div>
                </Row>
            </Container>

        </div>
    )
}

export default ApplicationStatusRetrieveCode
