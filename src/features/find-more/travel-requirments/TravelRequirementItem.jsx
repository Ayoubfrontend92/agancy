import React from 'react'
import { Container } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import Banner from '../../../components/Banner'

const TravelRequirementItem = () => {
    return (
        <div className="travel-requirement-item mb-5">

            <Banner title="find_more.tr_req.title" />

            <Container fluid="lg">

                <div className="d-flex align-items-center mb-5">

                    <img src="https://www.countryflags.io/ir/flat/64.png" alt="" width="100" height="100" />

                    <h4 className="fw-bold text-primary mx-3">
                        <Translate value="find_more.tr_req.title_items" /> {"{ region name }"}
                    </h4>

                </div>

                <ul className="list-unstyled">

                    <li className="mb-4">

                        <div className="d-flex align-items-center">
                            <img src="" alt="" width="50" height="50" />
                            <h5 className="fw-bold mx-2">
                                What are the country entry and exit requirements?
                            </h5>
                        </div>

                        <p className="text-black-50">
                            * Any travellers aged 12 and over who is allowed to enter
                        </p>

                    </li>
                    <li className="mb-4">

                        <div className="d-flex align-items-center">
                            <img src="" alt="" width="50" height="50" />
                            <h5 className="fw-bold mx-2">
                                What are the country entry and exit requirements?
                            </h5>
                        </div>

                        <p className="text-black-50">
                            * Any travellers aged 12 and over who is allowed to enter
                        </p>

                    </li>
                    <li className="mb-4">

                        <div className="d-flex align-items-center">
                            <img src="" alt="" width="50" height="50" />
                            <h5 className="fw-bold mx-2">
                                What are the country entry and exit requirements?
                            </h5>
                        </div>

                        <p className="text-black-50">
                            * Any travellers aged 12 and over who is allowed to enter
                        </p>

                    </li>
                    <li className="mb-4">

                        <div className="d-flex align-items-center">
                            <img src="" alt="" width="50" height="50" />
                            <h5 className="fw-bold mx-2">
                                What are the country entry and exit requirements?
                            </h5>
                        </div>

                        <p className="text-black-50">
                            * Any travellers aged 12 and over who is allowed to enter
                        </p>

                    </li>

                </ul>

            </Container>



        </div>
    )
}

export default TravelRequirementItem
