import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'

const Visas = () => {
    return (
        <div className="visas">

            <div className="bg-primary py-5 mb-5">
                <Container fluid="lg">
                    <h3 className="text-white fw-bold">
                        <Translate value="visas.titleSearch" />
                    </h3>
                </Container>
            </div>

            <Container fluid="lg">

                <div className="row justify-content-center mb-5">
                    <div className="col-lg-7 col-12">
                        <Form>
                            <Form.Group className="mb-5">
                                <Form.Label>
                                    <Translate value="visas.search_label" />
                                </Form.Label>
                                <Form.Select size="lg">
                                    <option value=""></option>
                                </Form.Select>
                            </Form.Group>

                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-timnak-outline btn-lg">
                                    <Translate value="visas.searchBtn" />
                                </button>
                            </div>

                        </Form>
                    </div>
                </div>

                <div className="search-results">

                    <ul className="list-unstyled">
                        <li className="fs-5 mb-3">
                            <Link to="/visas/1">
                                {"{Main cat title} {Visa Title}"}
                            </Link>
                        </li>
                        <li className="fs-5 mb-3">
                            <Link to="/visas/1">
                                {"{Main cat title} {Visa Title}"}
                            </Link>
                        </li>
                        <li className="fs-5 mb-3">
                            <Link to="/visas/1">
                                {"{Main cat title} {Visa Title}"}
                            </Link>
                        </li>
                    </ul>

                </div>

            </Container>

        </div>
    )
}

export default Visas
