import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'

function renderAlphabetInput() {
    let letters = [];
    for (var i = 65; i <= 90; i++) {
        letters.push(<Button key={i} variant="" value={String.fromCharCode(i)}>{String.fromCharCode(i)}</Button>);
    }
    return letters;
}


const Glossary = () => {
    return (
        <div className="glossary">

            <div className="bg-timnak py-5">
                <Container fluid="lg">
                    <h3 className="text-white mb-2">
                        <Translate value="glossary.title" />
                    </h3>

                    <p className="mb-0 text-white">
                        <Translate value="glossary.description" />
                    </p>
                </Container>

            </div>

            <div className="alphabetSearch border-top border-bottom my-5">
                <div className="container">
                    <Form>
                        <div className="d-flex justify-content-evenly" dir="ltr">
                            {renderAlphabetInput()}
                        </div>
                    </Form>
                </div>
            </div>

            <Container fluid="lg">
                <div className="row justify-content-md-center mb-5">
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <Form className="row align-items-end">
                                <div className="col-10">
                                    <Form.Group>
                                        <Form.Label></Form.Label>
                                        <Form.Control type="search" />
                                    </Form.Group>
                                </div>
                                <div className="col-2">

                                    <Button variant="" className="bg-timnak text-white">
                                        <Translate value="visas.applyNow.Search" />
                                    </Button>

                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Glossary
