import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { Link, useParams } from 'react-router-dom'

const Declaration = () => {

    const { title } = useParams();

    return (
        <div className="py-5">
            <Container>
                <h3>
                    <Translate value="visas.declaration.title" /> {title}
                </h3>
                <p>
                    <Translate value="visas.declaration.text" />
                </p>

                <Form>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label><Translate value="visas.declaration.q_1" /></Form.Label>
                        <div className="">
                            <Form.Check
                                inline
                                label="بلی"
                                name="group1"
                                type="radio"
                            />
                            <Form.Check
                                inline
                                label="خیر"
                                name="group1"
                                type="radio"
                            />
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label><Translate value="visas.declaration.q_2" /></Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>


                    <div className="d-flex align-items-center justify-content-between">
                        <Link to={`/sign-up`} className="btn btn-primary">
                            <Translate value="global.signUp" />
                        </Link>

                        <Link to={`/global-services/${title}/apply-process`} className="btn btn-primary">
                            <Translate value="apply.next_step" />
                        </Link>

                    </div>

                </Form>

            </Container>
        </div>
    )
}

export default Declaration
