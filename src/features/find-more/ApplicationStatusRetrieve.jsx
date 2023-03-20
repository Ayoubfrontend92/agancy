import React from 'react'
import { Card, Container, Form } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import CustomToast from '../../components/CustomToast'
import Banner from '../../images/banner-sample.jpg'

const ApplicationStatusRetrieve = () => {
    return (
        <div className="application-retrieve">


            <div className="banner position-relative mb-5">
                <img src={Banner} alt="banner" width="100%" height="600" />
                <div className="info position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
                    <h3 className="mb-0">
                        <Translate value="find_more.application_retrieve.title" />
                    </h3>
                </div>
            </div>

            <Container fluid="lg">

                <h4 className="fw-bold">
                    <Translate value="find_more.application_retrieve.title" /> <CustomToast text="help me" />
                </h4>
                <p className="mb-5">
                    <Translate value="find_more.application_retrieve.intro" />
                </p>

                <Form>

                    <Card
                        bg="light"
                        className="mb-5"
                    >
                        <Card.Header>
                            <Translate value="find_more.application_retrieve.card1_head" />
                        </Card.Header>
                        <Card.Body className="bg-white">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6 col-6">
                                    <div className="mb-3">
                                        <Form.Label className="text-black-50">
                                            <Translate value="find_more.application_retrieve.q1" />
                                        </Form.Label>
                                        <Form.Control type="date" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-6">
                                    <div className="mb-3">
                                        <Form.Label className="text-black-50">
                                            <Translate value="find_more.application_retrieve.q2" />
                                        </Form.Label>
                                        <Form.Control type="date" />
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card
                        bg="light"
                        className="mb-5"
                    >
                        <Card.Header>
                            <Translate value="find_more.application_retrieve.card2_head" />
                        </Card.Header>
                        <Card.Body className="bg-white">
                            <div className="row">
                                <div className="col-lg-7 col-sm-6 col-6">
                                    <div className="mb-3">
                                        <Form.Label className="text-black-50">
                                            <Translate value="find_more.application_retrieve.q3" />
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-sm-6 col-6">
                                    <div className="mb-3">
                                        <Form.Label className="text-black-50">
                                            <Translate value="find_more.application_retrieve.q4" />
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-sm-6 col-6">
                                    <div className="mb-3">
                                        <Form.Label className="text-black-50">
                                            <Translate value="find_more.application_retrieve.q5" />
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-sm-6 col-6">
                                    <div className="mb-3">
                                        <Form.Label className="text-black-50">
                                            <Translate value="find_more.application_retrieve.q6" />
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card
                        bg="light"
                        className="mb-5"
                    >
                        <Card.Header>
                            <Translate value="find_more.application_retrieve.card3_head" />
                        </Card.Header>
                        <Card.Body className="bg-white">
                            <div className="row">
                                <div className="col-lg-7 col-12">
                                    <div className="mb-3">
                                        <Form.Label className="text-black-50">
                                            <Translate value="find_more.application_retrieve.q7" />
                                        </Form.Label>
                                        <Form.Select>
                                            <option value=""></option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card
                        bg="light"
                        className="mb-5"
                    >
                        <Card.Header>
                            <Translate value="find_more.application_retrieve.card4_head" />
                        </Card.Header>
                        <Card.Body className="bg-white">
                            <div className="row">
                                <div className="col-lg-7 col-12">
                                    <div>
                                        <Form.Label className="text-black-50">
                                            <Translate value="find_more.application_retrieve.q8" />
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-12 text-center my-4">
                                    <Translate value="global.or" />
                                </div>
                                <div className="col-lg-7 col-12">
                                    <div className="mb-3">
                                        <Form.Label className="text-black-50">
                                            <Translate value="find_more.application_retrieve.q9" />
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card
                        bg="light"
                        className="mb-5"
                    >
                        <Card.Header>
                            <Translate value="find_more.application_retrieve.card5_head" />
                        </Card.Header>
                        <Card.Body className="bg-white">
                            <Form.Label className="text-black-50">
                                <Translate value="find_more.application_retrieve.q10" />
                            </Form.Label>
                            <div>
                                <Form.Check
                                    inline
                                    label={<Translate value="find_more.application_retrieve.q11" />}
                                    name="group1"
                                    type="radio"
                                />
                                <Form.Check
                                    inline
                                    label={<Translate value="find_more.application_retrieve.q12" />}
                                    name="group1"
                                    type="radio"
                                />
                            </div>
                        </Card.Body>
                    </Card>

                    <div className="d-flex align-items-center justify-content-between mb-5">
                        <button type="submit" className="btn btn-lg py-3 btn-primary">
                            <Translate value="find_more.application_retrieve.btnSubmit" />
                        </button>
                        <button type="button" className="btn btn-lg py-3 btn-primary">
                            <Translate value="find_more.application_retrieve.btnExit" />
                        </button>
                    </div>

                </Form>

            </Container>



        </div>
    )
}

export default ApplicationStatusRetrieve
