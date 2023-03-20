import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import GrayBanner from '../../../components/GrayBanner'

const Feedback = () => {
    return (
        <div className="feedback-page">

            <GrayBanner title="find_more.feedback.title" />

            <Container fluid="lg">

                <h4>Dynamic Title</h4>

                <div className="fom-container bg-white shadow-lg rounded my-5 p-4">

                    <Form>

                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2">
                                <Translate value="find_more.feedback.q1" />
                            </Form.Label>
                            <Col md="5" sm="10">
                                <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2">
                                <Translate value="find_more.feedback.q2" />
                            </Form.Label>
                            <Col md="5" sm="10">
                                <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2">
                                <Translate value="find_more.feedback.q3" />
                            </Form.Label>
                            <Col md="5" sm="10">
                                <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2">
                                <Translate value="find_more.feedback.q4" />
                            </Form.Label>
                            <Col md="5" sm="10">
                                <Form.Control as="textarea" rows="7" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Form.Label column sm="2"></Form.Label>
                            <Col md="5" sm="10">
                                <Button variant="primary" size="lg">
                                    <Translate value="find_more.feedback.btn" />
                                </Button>
                            </Col>
                        </Form.Group>

                    </Form>

                </div>

            </Container>

        </div>
    )
}

export default Feedback
