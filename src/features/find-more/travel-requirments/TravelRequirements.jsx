import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import Banner from '../../../components/Banner'
import CustomToast from '../../../components/CustomToast'

const TravelRequirements = () => {



    return (
        <div className="travel-requirements">

            <Banner title="find_more.tr_req.title" />

            <Container fluid="lg">

                <h4 className="fw-bold text-center">
                    <Translate value="find_more.tr_req.title_2" />
                </h4>

                <p className="text-center">
                    <Translate value="find_more.tr_req.title_3" />
                </p>


                <div className="py-5">
                    <Form>
                        <div className="row justify-content-center">
                            <div className="col-md-8">

                                <h3 className="text-primary fw-bold mb-4">
                                    <Translate value="find_more.tr_req.form_title" /> <CustomToast text="help me" />
                                </h3>

                                <Form.Group>
                                    <Form.Label>
                                        <Translate value="find_more.tr_req.q_label" />
                                    </Form.Label>
                                    <Form.Select>
                                        <option value=""></option>
                                    </Form.Select>
                                </Form.Group>

                                <div className="text-center mt-5">
                                    <button type="submit" className="btn btn-lg btn-primary rounded-0">
                                        <Translate value="find_more.tr_req.btnSubmit" />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </Form>
                </div>

                <div className="noteAt">
                    <h5 className="mb-4">
                        <Translate value="find_more.tr_req.note" />
                    </h5>
                    <ul className="list-unstyled">
                        <li className="mb-4">
                            <p>
                                <Translate value="find_more.tr_req.note_1" />
                            </p>
                        </li>
                        <li className="mb-4">
                            <p>
                                <Translate value="find_more.tr_req.note_2" />
                            </p>
                        </li>
                        <li className="mb-4">
                            <p>
                                <Translate value="find_more.tr_req.note_3" />
                            </p>
                        </li>
                    </ul>
                </div>

            </Container>

        </div>
    )
}

export default TravelRequirements
