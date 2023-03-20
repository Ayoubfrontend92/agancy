import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'
import CustomToast from '../../components/CustomToast'

const Login = () => {
    return (
        <div className="auth-pages">

            <div className="bg-timnak py-5">
                <Container fluid="lg">
                    <h3 className="text-white mb-0">
                        <Translate value="find_more.auth.login.title" />
                    </h3>
                </Container>
            </div>

            <div className="py-5">
                <Container fluid="lg">
                    <p>
                        <Translate value="find_more.auth.login.descriptions" />
                    </p>

                    <div className="mt-5">
                        <h2 className="mb-3">
                            <Translate value="find_more.auth.login.sign_in" /> <CustomToast text="help me" />
                        </h2>
                        <div className="row">
                            <div className="col-md-9 col-12 mb-md-0 mb-3">
                                <div className="bg-white shadow-sm rounded p-3">
                                    <div className="row g-0">
                                        <div className="col-md-7 mb-md-0 mb-3">
                                            <Form>
                                                <div className="mb-3">
                                                    <Form.Label><Translate value="find_more.auth.login.usename" /></Form.Label>
                                                    <Form.Control type="text" name="username" />
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label><Translate value="find_more.auth.login.password" /></Form.Label>
                                                    <Form.Control type="password" name="password" />
                                                </div>
                                                <button className="btn btn-timnak shadow-lg px-5" type="submit">
                                                    <Translate value="find_more.auth.login.sign_in" />
                                                </button>
                                            </Form>
                                        </div>
                                        <div className="col-md-1 d-md-block d-none">
                                            <div className="line h-100 m-auto" style={{ width: "2px", backgroundColor: "#C2C2C2" }}></div>
                                        </div>
                                        <div className="col-md-4 text-center">
                                            <p className="fw-bold mb-3">
                                                <Translate value="find_more.auth.login.forget_title" />
                                            </p>
                                            <p className="text-muted mb-3">
                                                <Translate value="find_more.auth.login.forget_description" />
                                            </p>
                                            <Link to="/find-more/forgot-password" className="btn btn-timnak shadow-lg px-5">
                                                <Translate value="find_more.auth.login.forget_link" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-12 text-center">
                                <h2 className="mb-3">
                                    <Translate value="find_more.auth.login.no_account" />
                                </h2>
                                <Link to="/find-more/signup-travelers-client" className="btn w-100 btn-lg btn-timnak shadow-lg px-5 mb-3">
                                    <Translate value="find_more.auth.login.travelers_and_clients" />
                                </Link>
                                <Link to="/find-more/signup-traveler-agancies" className="btn w-100 btn-lg btn-timnak shadow-lg px-5">
                                    <Translate value="find_more.auth.login.iranian_travel_agency" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </Container>
            </div>

        </div>
    )
}

export default Login
