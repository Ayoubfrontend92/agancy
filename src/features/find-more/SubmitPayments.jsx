import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import CustomToast from '../../components/CustomToast'
import Banner from '../../images/banner-sample.jpg'

const SubmitPayments = () => {
    return (
        <div className="submit-payments">

            <div className="banner position-relative mb-5">
                <img src={Banner} alt="banner" width="100%" height="600" />
                <div className="info position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
                    <h3 className="mb-0">
                        <Translate value="find_more.submit_payment.title" />
                    </h3>
                </div>
            </div>

            <Container fluid="lg">

                <h4>Dynamic Title</h4> <CustomToast text="help me" />

                <div className="fom-container bg-white shadow-lg rounded my-5 p-4">

                    <Form>

                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2">
                                <Translate value="find_more.submit_payment.q1" />
                            </Form.Label>
                            <Col md="5" sm="10">
                                <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2">
                                <Translate value="find_more.submit_payment.q2" />
                            </Form.Label>
                            <Col md="5" sm="10">
                                <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2">
                                <Translate value="find_more.submit_payment.q3" />
                            </Form.Label>
                            <Col md="5" sm="10">
                                <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2">
                                <Translate value="find_more.submit_payment.q4" />
                            </Form.Label>
                            <Col md="5" sm="10">
                                <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2">
                                <Translate value="find_more.submit_payment.q5" />
                            </Form.Label>
                            <Col md="5" sm="10">
                                <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2">
                                <Translate value="find_more.submit_payment.q6" />
                            </Form.Label>
                            <Col md="5" sm="10">
                                <Form.Control as="textarea" rows="7" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2">
                                <Translate value="find_more.submit_payment.q7" />
                            </Form.Label>
                            <Col md="5" sm="10">
                                <Form.Control type="file" />
                                <Form.Text>
                                    <Translate value="find_more.submit_payment.q7_help" />
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2"></Form.Label>
                            <Col md="5" sm="10">
                                <Button variant="primary" size="lg">
                                    <Translate value="find_more.submit_payment.btn" />
                                </Button>
                            </Col>
                        </Form.Group>


                    </Form>

                </div>

            </Container>

        </div>
    )
}

export default SubmitPayments
