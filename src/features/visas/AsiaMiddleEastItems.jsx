import React, { useState } from 'react'
import { Alert, Col, Container, Row, Tab, Button, Accordion, Modal, Tabs } from 'react-bootstrap'
import { FaExclamation } from 'react-icons/fa'
import { Translate } from 'react-redux-i18n'
import { Link, useParams } from 'react-router-dom'
import Banner from '../../images/banner-sample.jpg'

const AsiaMiddleEastItems = () => {

    const { id } = useParams();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="item py-5">
            <Container>
                <div className="banner position-relative">
                    <img src={Banner} alt="banner" width="100%" height="600" />
                    <div className="info position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
                        <h3 className="mb-0">{id}</h3>
                    </div>
                </div>

                <Alert variant="warning" className="mt-3">
                    <Alert.Heading>
                        <FaExclamation size="40px" />
                        Oh snap! You got an error!
                    </Alert.Heading>
                    <p>
                        Change this and that and try again. Duis mollis, est non commodo
                        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                        Cras mattis consectetur purus sit amet fermentum.
                    </p>
                </Alert>

                <Tabs defaultActiveKey="overview" className="mb-3 bg-primary custom-tab-blue nav-justified">
                    <Tab eventKey="overview" title={<Translate value="global.Overview" />} className="py-4">
                        <Row>
                            <Col md="4">
                                <p className="text-primary upper-case">
                                    <Translate value="caq.Service_Title" />
                                </p>
                            </Col>
                            <Col md="4">
                                <p className="text-primary upper-case">
                                    <Translate value="caq.Processing_time" />
                                </p>
                            </Col>
                            <Col md="4">
                                <p className="text-primary upper-case">
                                    <Translate value="caq.Cost" />
                                </p>
                            </Col>
                        </Row>

                        <div className="d-flex flex-column align-items-center mt-4">
                            <Button variant="primary" className="px-5 mb-2" onClick={handleShow}>
                                <Translate value="global.apply_now" />
                            </Button>
                            <Button variant="secondary" className="px-5">
                                <Translate value="global.not_available" />
                            </Button>
                        </div>

                    </Tab>
                    <Tab eventKey="about" title={<Translate value="global.About" />} className="py-4">

                        <ul className="list-unstyled">

                            <li>
                                <h5 className="text-primary mb-4">
                                    Title
                                </h5>
                                <p className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </p>
                            </li>
                            <li>
                                <h5 className="text-primary mb-4">
                                    Title
                                </h5>
                                <p className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </p>
                            </li>

                        </ul>

                        <div className="d-flex flex-column align-items-center mt-4">
                            <Button variant="primary" className="px-5 mb-2" onClick={handleShow}>
                                <Translate value="global.apply_now" />
                            </Button>
                            <Button variant="secondary" className="px-5">
                                <Translate value="global.not_available" />
                            </Button>
                        </div>

                    </Tab>
                    <Tab eventKey="documents" title={<Translate value="global.Documents" />} className="py-4">

                        <h5 className="border-bottom pb-3 mb-5">
                            Doc Title
                        </h5>

                        <div className="d-flex flex-column align-items-center mt-4">
                            <Button variant="primary" className="px-5 mb-2" onClick={handleShow}>
                                <Translate value="global.apply_now" />
                            </Button>
                            <Button variant="secondary" className="px-5">
                                <Translate value="global.not_available" />
                            </Button>
                        </div>
                    </Tab>
                    <Tab eventKey="faq" title={<Translate value="global.FAQ" />} className="py-4">

                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <div className="d-flex flex-column align-items-center mt-4">
                            <Button variant="primary" className="px-5 mb-2" onClick={handleShow}>
                                <Translate value="global.apply_now" />
                            </Button>
                            <Button variant="secondary" className="px-5">
                                <Translate value="global.not_available" />
                            </Button>
                        </div>
                    </Tab>
                </Tabs>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title><Translate value="global.how_to_proceed" /></Modal.Title>
                    </Modal.Header>
                    <Modal.Footer className="justify-content-center">
                        <Button variant="secondary">
                            <Translate value="global.sgnUp" />
                        </Button>
                        <Link to={`/visas/asia-and-middle-east/${id}/visa-declaration`} className="btn btn-primary">
                            <Translate value="global.apply_whithout_signUp" />
                        </Link>
                    </Modal.Footer>
                </Modal>

            </Container>
        </div>
    )
}

export default AsiaMiddleEastItems
