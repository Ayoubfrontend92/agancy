import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'

const PassengerRightsClaim = () => {
    return (
        <div className="passenger-rights-claim py-5">
            <Container fluid="lg">

                <h4>Dynamic Title</h4>

                <div className="fom-container bg-white shadow-lg rounded my-5 p-4">

                    <Form>

                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2">
                                <Translate value="passenger_rights.claim.q1" />
                            </Form.Label>
                            <Col md="5" sm="10">
                                <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2">
                                <Translate value="passenger_rights.claim.q2" />
                            </Form.Label>
                            <Col md="5" sm="10">
                                <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2">
                                <Translate value="passenger_rights.claim.q3" />
                            </Form.Label>
                            <Col md="5" sm="10">
                                <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2">
                                <Translate value="passenger_rights.claim.q4" />
                            </Form.Label>
                            <Col md="5" sm="10">
                                <Form.Select>
                                    <option value=""></option>
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2">
                                <Translate value="passenger_rights.claim.q5" />
                            </Form.Label>
                            <Col md="5" sm="10">
                                <Form.Select>
                                    <option value=""></option>
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2">
                                <Translate value="passenger_rights.claim.q6" />
                            </Form.Label>
                            <Col md="5" sm="10">
                                <Form.Control as="textarea" rows="7" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2">
                                <Translate value="passenger_rights.claim.q7" />
                            </Form.Label>
                            <Col md="5" sm="10">
                                <Form.Control type="file" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2"></Form.Label>
                            <Col md="5" sm="10">
                                <Button variant="primary" size="lg">
                                    <Translate value="passenger_rights.claim.btn" />
                                </Button>
                            </Col>
                        </Form.Group>

                    </Form>

                </div>

            </Container>
        </div>
    )
}

export default PassengerRightsClaim
