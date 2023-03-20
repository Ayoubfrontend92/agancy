import React from 'react'
import { Col, Container, Form, Nav, Navbar, Row, Button } from 'react-bootstrap'
import { FaTelegramPlane, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa'
import { Translate } from 'react-redux-i18n'
import { NavLink } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'

const Footer = () => {
    return (
        <footer>
            <section className="py-2 footer-sec-1 bg-timnak border-bottom">
                <Container>
                    <Navbar className="w-100 justify-content-between">
                        <b className="h2 mb-0">TIMNAK</b>
                        <Nav>
                            <NavLink className="nav-link text-white" to=""><FaTelegramPlane size="22px" /></NavLink>
                            <NavLink className="nav-link text-white" to=""><FaInstagramSquare size="22px" /></NavLink>
                            <NavLink className="nav-link text-white" to=""><FaLinkedinIn size="22px" /></NavLink>
                        </Nav>
                    </Navbar>
                </Container>
            </section>
            <section className="py-4 footer-sec-2 bg-timnak">
                <Container>
                    <Row className="text-center">
                        <Col md="3">
                            <h5 className="mb-4"><Translate value="footer-sec_title_1" /></h5>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink to="">
                                        <Translate value="footer-sect_1_1"></Translate>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="">
                                        <Translate value="footer-sect_1_2"></Translate>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="">
                                        <Translate value="footer-sect_1_3"></Translate>
                                    </NavLink>
                                </li>
                            </ul>
                        </Col>
                        <Col md="3">
                            <h5 className="mb-4"><Translate value="footer-sec_title_2" /></h5>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink to="">
                                        <Translate value="footer-sect_2_1"></Translate>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="">
                                        <Translate value="footer-sect_2_2"></Translate>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="">
                                        <Translate value="footer-sect_2_3"></Translate>
                                    </NavLink>
                                </li>
                            </ul>
                        </Col>
                        <Col md="3">
                            <h5 className="mb-4"><Translate value="footer-sec_title_3" /></h5>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink to="">
                                        <Translate value="footer-sect_3_1"></Translate>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="">
                                        <Translate value="footer-sect_3_2"></Translate>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="">
                                        <Translate value="footer-sect_3_3"></Translate>
                                    </NavLink>
                                </li>
                            </ul>
                        </Col>
                        <Col md="3">
                            <h5 className="mb-4"><Translate value="footer-sec_title_4" /></h5>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink to="">
                                        <Translate value="footer-sect_4_1"></Translate>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="">
                                        <Translate value="footer-sect_4_2"></Translate>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="">
                                        <Translate value="footer-sect_4_3"></Translate>
                                    </NavLink>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-3 footer-sec-3">
                <Container>
                    <Navbar>
                        <span className="h6 mb-0"><Translate value="global.translate" /></span>
                        <LanguageSwitcher />
                        <Nav className="mx-auto">
                            <NavLink className="nav-link mx-3 text-white" to=""><FaTelegramPlane size="30px" /></NavLink>
                            <NavLink className="nav-link mx-3 text-white" to=""><FaInstagramSquare size="30px" /></NavLink>
                            <NavLink className="nav-link mx-3 text-white" to=""><FaLinkedinIn size="30px" /></NavLink>
                        </Nav>
                    </Navbar>
                </Container>
            </section>
            <section className="py-4 footer-sec-4 bg-timnak">
                <Container>
                    <Row>
                        <Col md="4">
                            <h4 className="mb-4"><Translate value="footer.about" /></h4>
                            <p>
                                <Translate value="footer.about_text" />
                            </p>
                        </Col>
                        <Col md={{ offset: 2, span: 2 }}>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <a href="/" className="text-white text-decoration-none">
                                        Tel 1
                                    </a>
                                </li>
                                <li className="mb-3">
                                    <a href="/" className="text-white text-decoration-none">
                                        Tell 2
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col md="4">
                            <h4 className="mb-4"><Translate value="footer.newsletter_title" /></h4>
                            <Form>
                                <Row className="align-items-center justify">
                                    <Col xs="auto">
                                        <Form.Label htmlFor="emailAddress" className="d-block">
                                            New tours and events in your inbox
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            className="mb-2"
                                            name="email"
                                            id="emailAddress"
                                            placeholder="useremail@test.com"
                                            dir="ltr"
                                        />
                                    </Col>
                                    <Col xs="auto">
                                        <Button type="submit" variant="light" className="mt-4">
                                            <Translate value="footer.newsletter_btn" />
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5 footer-sec-5 bg-white text-black">
                <Container>
                    <Row className="align-items-center">
                        <Col md="8">
                            <ul className="list-unstyled d-flex align-items-center justify-content-start list-cert">
                                <li className="shadow-lg p-3"></li>
                                <li className="shadow-lg p-3"></li>
                                <li className="shadow-lg p-3"></li>
                                <li className="shadow-lg p-3"></li>
                                <li className="shadow-lg p-3"></li>
                            </ul>
                        </Col>
                        <Col md="4">
                            <div className="text-center">
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <NavLink to="" className="text-black text-decoration-none">
                                            <Translate value="footer.certificate_1" />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="" className="text-black text-decoration-none">
                                            <Translate value="footer.certificate_2" />
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-2 footer-sec-6">
                <Container>
                    <Navbar className="justify-content-between">
                        <span className="h1 mb-0 text-timnak">TIMNAK</span>
                        <span><Translate value="footer.address" /></span>
                    </Navbar>
                </Container>
            </section>
            <section className="py-1 footer-sec-7 bg-timnak">
                <Container>
                    <Navbar className="w-100 justify-content-center border-bottom">
                        <Nav>
                            <NavLink className="nav-link mx-3 text-white" to="">
                                <Translate value="footer.final_nav_item_1" />
                            </NavLink>
                            <NavLink className="nav-link mx-3 text-white" to="">
                                <Translate value="footer.final_nav_item_2" />
                            </NavLink>
                            <NavLink className="nav-link mx-3 text-white" to="">
                                <Translate value="footer.final_nav_item_3" />
                            </NavLink>
                        </Nav>
                    </Navbar>
                    <p className="text-center pt-4 pb-2">
                        All rights reserved for TIMNAK . 2005-2021
                    </p>
                </Container>
            </section>
        </footer >
    )
}

export default Footer
