import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'
import CustomToast from '../../components/CustomToast'
import Banner from '../../images/banner-sample.jpg'

const ApplicationStatus = () => {
    return (
        <div className="financial-status">


            <div className="banner position-relative mb-5">
                <img src={Banner} alt="banner" width="100%" height="600" />
                <div className="info position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
                    <h3 className="mb-0">
                        <Translate value="find_more.application_status.title" />
                    </h3>
                </div>
            </div>


            <Container fluid="lg">

                <h3 className="fw-bold">
                    <Translate value="find_more.application_status.instr" />
                </h3>

                <p className="fw-bold mb-5">
                    <Translate value="find_more.financial_status.intro" />
                </p>

                <div className="row justify-content-center">
                    <div className="col-lg-7">

                        <Form>

                            <div className="mb-4 text-center">
                                <Form.Label className="h2 text-primary mb-5">
                                    <Translate value="find_more.financial_status.qLabel" /> <CustomToast text="help me" />
                                </Form.Label>
                                <Form.Text className="text-center d-block">
                                    <Translate value="find_more.financial_status.qHelp" />
                                </Form.Text>
                                <Form.Control size="lg" type="text" className="text-center" style={{ letterSpacing: "30px" }} />
                            </div>


                            <div className="text-center mb-5">
                                <Link to="/find-more/application-status/check" className="btn btn-lg btn-primary">
                                    <Translate value="find_more.financial_status.link" />
                                </Link>
                            </div>

                            <div className="mb-5">
                                <p className="text-danger">
                                    <Translate value="find_more.financial_status.back" />
                                    <Link to="/find-more/submit-payments">
                                        <Translate value="find_more.financial_status.back_link" />
                                    </Link>
                                </p>
                            </div>

                        </Form>

                    </div>
                </div>

            </Container>



        </div>
    )
}

export default ApplicationStatus
