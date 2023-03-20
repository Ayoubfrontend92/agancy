import React from 'react'
import { Container } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'

import Banner from '../../images/banner-sample.jpg'

const FinancialStatusCheck = () => {
    return (
        <div className="financial-status-check mb-5">

            <div className="banner position-relative mb-5">
                <img src={Banner} alt="banner" width="100%" height="600" />
                <div className="info position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
                    <h3 className="mb-0">
                        <Translate value="find_more.financial_status.title" />
                    </h3>
                </div>
            </div>


            <Container fluid="lg">


                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <h4 className="text-center mb-5">
                            <Translate value="find_more.financial_check.title_fail" />
                        </h4>

                        <h4 className="text-center mb-5">
                            <Translate value="find_more.financial_check.title_fail_help" />
                        </h4>

                        <h4 className="text-center mb-5">
                            <Translate value="find_more.financial_check.title_success" />
                        </h4>

                        <h2 className="text-center text-black-50 fw-bold mb-5">
                            21JHF4144FDS
                        </h2>

                        <div className="row mb-3">
                            <div className="col-6">
                                <Link to="" className="btn btn-lg w-100 btn-primary py-4">
                                    <Translate value="find_more.financial_check.try_again" />
                                </Link>
                            </div>
                            <div className="col-6">
                                <Link to="" className="btn btn-lg w-100 btn-primary py-4">
                                    <Translate value="find_more.financial_check.retrieve_code" />
                                </Link>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-6">
                                <Link to="" className="btn btn-lg w-100 btn-primary py-4">
                                    <Translate value="find_more.financial_check.check_another" />
                                </Link>
                            </div>
                            <div className="col-6">
                                <Link to="" className="btn btn-lg w-100 btn-primary py-4">
                                    <Translate value="find_more.financial_check.home_page" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

            </Container>

        </div>
    )
}

export default FinancialStatusCheck
