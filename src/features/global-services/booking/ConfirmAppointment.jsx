import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'

const ConfirmAppointment = () => {
    return (
        <div className="appointment-confirmed d-flex align-items-center" style={{ minHeight: '60vh' }}>

            <Container fluid="lg">

                <h2 className="text-timnak text-center mb-5"><Translate value="consultant.confirm.title" /></h2>

                <Row>

                    <Col lg={{ span: 8, offset: 2 }}>

                        <ul className="list-unstyled mb-5">
                            <li>
                                <b>
                                    <Translate value="consultant.confirm.field_of_consultation"></Translate>
                                </b>
                            </li>
                            <li>
                                <b>
                                    <Translate value="consultant.confirm.mode_of_consultation"></Translate>
                                </b>
                            </li>
                            <li>
                                <b>
                                    <Translate value="consultant.confirm.reference"></Translate>
                                </b>
                            </li>
                            <li>
                                <b>
                                    <Translate value="consultant.confirm.appointment_date_time"></Translate>
                                </b>
                            </li>
                            <li>
                                <b>
                                    <Translate value="consultant.confirm.full_name"></Translate>
                                </b>
                            </li>
                            <li>
                                <b>
                                    <Translate value="consultant.confirm.location:"></Translate>
                                </b>
                            </li>
                            <li>
                                <b>
                                    <Translate value="consultant.confirm.tel"></Translate>
                                </b>
                            </li>
                        </ul>

                        <p>
                            <Translate value="consultant.confirm.face2face"></Translate>
                        </p>
                        <p>
                            <Translate value="consultant.confirm.online"></Translate>
                        </p>

                    </Col>

                </Row>

                <div className="d-flex justify-content-center mt-3">
                    <a href="/" className="btn btn-primary btn-lg px-5"><Translate value="global.backHome" /></a>
                </div>

            </Container>

        </div>
    )
}

export default ConfirmAppointment
