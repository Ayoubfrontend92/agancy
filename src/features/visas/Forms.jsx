import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'

const formItems = [
    {
        id: 1,
        title: "form title",
        url: "https://test.com",
    },
    {
        id: 2,
        title: "form title",
        url: "https://test.com",
    },
    {
        id: 3,
        title: "form title",
        url: "https://test.com",
    },
    {
        id: 4,
        title: "form title",
        url: "https://test.com",
    },
]

const Forms = () => {
    return (
        <div className="downloadable-forms">
            <div className="bg-primary py-5 mb-5">
                <Container fluid="lg">
                    <h3 className="text-white fw-bold">
                        <Translate value="visas.forms.title" />
                    </h3>
                    <p className="text-white mb-0">
                        Dynamic Text
                    </p>
                </Container>
            </div>

            <Container fluid="lg">

                <h4>Dynamic text</h4>

                <div className="form-container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <Form>

                                <div className="mb-3">
                                    <Form.Label>
                                        <Translate value="visas.forms.q1" />
                                    </Form.Label>
                                    <Form.Select>
                                        <option value=""></option>
                                    </Form.Select>
                                </div>

                                <div className="mb-3">
                                    <Form.Label>
                                        <Translate value="visas.forms.q2" />
                                    </Form.Label>
                                    <Form.Select>
                                        <option value=""></option>
                                    </Form.Select>
                                </div>

                                <div className="d-flex justify-content-center mt-5">
                                    <button className="btn btn-primary btn-lg w-75">
                                        <Translate value="visas.forms.btn" />
                                    </button>
                                </div>

                            </Form>
                        </div>
                    </div>
                </div>

                <div className="dowloads">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <ul className="list-unstyled mb-0">
                                {formItems.map((item, index) => (
                                    <li key={index} className="d-flex justify-content-between align-items-center mb-4">
                                        <b>{item.title}</b>
                                        <a href={item.url} download className="btn btn-outline-secondary">
                                            <Translate value="visas.forms.download" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </Container>

        </div>
    )
}

export default Forms
