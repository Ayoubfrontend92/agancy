import React from 'react'
import { Container, Nav, Tab } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import VisaItemAbout from './VisaItemAbout'
import VisaItemDocuments from './VisaItemDocuments'
import VisaItemEligibility from './VisaItemEligibility'
import VisaItemFaq from './VisaItemFaq'
import VisaItemGuide from './VisaItemGuide'
import VisaItemInstalments from './VisaItemInstalments'
import VisaItemOverview from './VisaItemOverview'

const VisaItem = () => {
    return (
        <div className="visa-item mb-5">

            <Tab.Container defaultActiveKey="overview">

                <div className="bg-primary py-5">
                    <Container fluid="lg">
                        <h3 className="text-white fw-bold">
                            Dynamic country
                        </h3>
                        <p className="text-white mb-0">
                            Dynamic Text
                        </p>
                    </Container>
                </div>
                <div className="bg-primary mb-5">
                    <Container fluid="lg">

                        <Nav variant="pills" className="flex-row" id="visaItem-nav">
                            <Nav.Item>
                                <Nav.Link eventKey="overview" >
                                    <Translate value="visas.item.overview_label" />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="about">
                                    <Translate value="visas.item.about_label" />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="eligibility">
                                    <Translate value="visas.item.eligibility_label" />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="visa_guide">
                                    <Translate value="visas.item.visa_guide_label" />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="documents">
                                    <Translate value="visas.item.documents_label" />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="instalments">
                                    <Translate value="visas.item.instalments_label" />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="faq">
                                    <Translate value="visas.item.faq_label" />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </div>

                <Container fluid="lg">
                    <Tab.Content>
                        <Tab.Pane eventKey="overview">
                            <VisaItemOverview />
                        </Tab.Pane>
                        <Tab.Pane eventKey="about">
                            <VisaItemAbout />
                        </Tab.Pane>
                        <Tab.Pane eventKey="eligibility">
                            <VisaItemEligibility />
                        </Tab.Pane>
                        <Tab.Pane eventKey="visa_guide">
                            <VisaItemGuide />
                        </Tab.Pane>
                        <Tab.Pane eventKey="documents">
                            <VisaItemDocuments />
                        </Tab.Pane>
                        <Tab.Pane eventKey="instalments">
                            <VisaItemInstalments />
                        </Tab.Pane>
                        <Tab.Pane eventKey="faq">
                            <VisaItemFaq />
                        </Tab.Pane>
                    </Tab.Content>

                    <div className="row justify-content-center mb-3">
                        <div className="col-md-6">
                            <button className="btn btn-primary btn-lg w-100 py-3 rounded-0">
                                <Translate value="visas.item.btnApply" />
                            </button>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <button className="btn btn-secondary btn-lg w-100 py-3 rounded-0">
                                <Translate value="visas.item.btnNotAvailable" />
                            </button>
                        </div>
                    </div>

                </Container>

            </Tab.Container>

        </div>
    )
}

export default VisaItem
