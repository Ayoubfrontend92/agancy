import React from 'react'
import { Form, Button, Table, Row, Col, Container } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { Link, useRouteMatch } from 'react-router-dom';
import { MdExitToApp, MdForum, MdPhone } from 'react-icons/md';
import { FaEnvelope, FaUsers } from 'react-icons/fa';
import OurServices from '../../components/OurServices'
import ServiceCard from '../../components/ServiceCard';
import HoverableCard from '../../components/HoverableCard';
import ColoredLine from '../../components/ColoredLine';
import PageRank from '../../components/PageRank';
import CustomToast from '../../components/CustomToast';

function renderAlphabetInput() {
    let letters = [];
    for (var i = 65; i <= 90; i++) {
        letters.push(<Button key={i} variant="" value={String.fromCharCode(i)}>{String.fromCharCode(i)}</Button>);
    }
    return letters;
}

const services = [

    {
        hrf: "/contact-us",
        img: '/assets/images/service-11.svg',
        title: <Translate value="home.section3.Resume_Writing" />
    },
    {
        hrf: "/book-consultation",
        img: '/assets/images/service-13.svg',
        title: <Translate value="home.section3.Consultation" />
    },
    {
        hrf: "/general-brief",
        img: '/assets/images/service-10.svg',
        title: <Translate value="home.section3.Visa_Analyzing_Tool" />
    },
]

const services2 = [

    {
        hrf: "",
        img: 'https://picsum.photos/150/100',
        title: "dynamic title"
    },
    {
        hrf: "",
        img: 'https://picsum.photos/150/100',
        title: "dynamic title"
    },
    {
        hrf: "",
        img: 'https://picsum.photos/150/100',
        title: "dynamic title"
    },
]

const ApplyNowSchool = () => {

    const { url } = useRouteMatch()

    return (
        <div className="apply-now-school">
            <div className="school-banner position-relative">
                <img src="https://picsum.photos/800/200" alt="" className="img-fluid" width="100%" height="200" />
                <div className="overlay position-absolute top-0 end-0 start-0 bottom-0 p-5 text-white w-100" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
                    <div className="container">
                        <h3>School Name</h3>
                        <div className="row justify-content-center mt-5">
                            <div className="col-md-6 text-center">
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="search" />
                                    </Form.Group>
                                    <Button variant="" className="bg-timnak text-white px-5">
                                        <Translate value="visas.applyNow.Search" />
                                    </Button>
                                </Form>
                            </div>
                        </div>

                    </div>
                </div>
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

            <div className="search-results mb-5">
                <div className="container">
                    <h4 className="text-timnak mb-4">
                        <Translate value="visas.applyNow.Programs" />
                    </h4>
                    <div className="alert alert-warning text-center">
                        <p className="mb-0">
                            <Translate value="visas.applyNow.cant_find" />
                        </p>
                    </div>

                    <div className="schools my-4">
                        <Table striped>
                            <thead className="bg-light text-timnak">
                                <tr>
                                    <th><Translate value="visas.applyNow.school.Programs" /> <CustomToast text="help me" /></th>
                                    <th><Translate value="visas.applyNow.school.Duration" /></th>
                                    <th><Translate value="visas.applyNow.school.Start" /></th>
                                    <th><Translate value="visas.applyNow.school.Language(s)" /></th>
                                    <th><Translate value="visas.applyNow.school.Features" /></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Link to={`${url}/apply-form/1`}>Program Title</Link>
                                    </td>
                                    <td>2Y-3M-0W-0D</td>
                                    <td>Fall</td>
                                    <td>Lang. name1</td>
                                    <td>Majors</td>
                                    <td>
                                        <Link className="btn btn-outline-secondary" to={`${url}/apply-form/1`}>Apply Now</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to={`${url}/apply-form/2`}>Program Title</Link>
                                    </td>
                                    <td>2Y-3M-0W-0D</td>
                                    <td>Fall</td>
                                    <td>Lang. name1</td>
                                    <td>Majors</td>
                                    <td>
                                        <Link className="btn btn-outline-secondary" to={`${url}/apply-form/1`}>Apply Now</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to={`${url}/apply-form/3`}>Program Title</Link>
                                    </td>
                                    <td>2Y-3M-0W-0D</td>
                                    <td>Fall</td>
                                    <td>Lang. name1</td>
                                    <td>Majors</td>
                                    <td>
                                        <Link className="btn btn-outline-secondary" to={`${url}/apply-form/1`}>Apply Now</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                </div>

            </div>

            <OurServices title="global.our_services">
                <Row>

                    {services.map((service, index) => (
                        <Col lg="4" sm="6" className="mb-md-0 mb-3" key={index}>
                            <ServiceCard data={service} />
                        </Col>
                    ))}

                </Row>
            </OurServices>

            <OurServices title="global.explor_furthure" >

                <Row>

                    {services2.map((service, index) => (
                        <Col lg="4" sm="6" className="mb-md-0 mb-3" key={index}>
                            <HoverableCard data={service} />
                        </Col>
                    ))}

                </Row>

            </OurServices>

            <Container fluid="lg">
                <div className="anyQuestions text-white p-3 rounded" style={{ background: "#316D91" }}>
                    <div className="row align-items-center">
                        <div className="col-md-5 col-12 mb-md-0 mb-3">
                            <h4 className="fw-bold">
                                <Translate value="global.any_questions.title" />
                            </h4>
                            <ColoredLine variant="bg-white" />
                            <p>
                                <Translate value="global.any_questions.desc_1" />
                            </p>
                            <p>
                                <Translate value="global.any_questions.desc_2" />
                            </p>
                        </div>
                        <div className="col-md-7 col-12 mb-md-0 mb-3">
                            <div className="row">
                                <div className="col-4 text-center">
                                    <Link to="" className="text-white h3 text-decoration-none">
                                        <MdForum size="80px" />
                                        <h4>
                                            <Translate value="global.any_questions.icon_1" />
                                        </h4>
                                    </Link>
                                </div>
                                <div className="col-4 text-center">
                                    <Link to="" className="text-white h3 text-decoration-none">
                                        <MdPhone size="80px" />
                                        <h4>
                                            <Translate value="global.any_questions.icon_2" />
                                        </h4>
                                    </Link>
                                </div>
                                <div className="col-4 text-center">
                                    <Link to="" className="text-white h3 text-decoration-none">
                                        <FaEnvelope size="80px" />
                                        <h4>
                                            <Translate value="global.any_questions.icon_3" />
                                        </h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <OurServices title="global.features" >
                <Row>

                    <Col lg="4" sm="6" className="mb-md-0 mb-3">
                        <Link to="" className="text-decoration-none">
                            <div className="bg-light p-3">
                                <h1 className="text-danger">
                                    <Translate value="global.feature1" />
                                </h1>
                                <ColoredLine className="mb-3" variant="bg-danger" />
                                <small className="text-dark">
                                    <Translate value="global.feature1_guide" />
                                </small>
                            </div>
                        </Link>
                    </Col>
                    <Col lg="4" sm="6" className="mb-md-0 mb-3">
                        <Link to="" className="text-decoration-none">
                            <div className="bg-light p-3">
                                <h1 className="text-primart">
                                    <Translate value="global.feature2" />
                                </h1>
                                <ColoredLine className="mb-3" variant="bg-primary" />
                                <small className="text-dark">
                                    <Translate value="global.feature2_guide" />
                                </small>
                            </div>
                        </Link>
                    </Col>
                    <Col lg="4" sm="6" className="mb-md-0 mb-3">
                        <Link to="" className="text-decoration-none">
                            <div className="bg-light p-3">
                                <h1 className="text-timnak">
                                    <Translate value="global.feature3" />
                                </h1>
                                <ColoredLine className="mb-3" variant="bg-timnak" />
                                <small className="text-dark">
                                    <Translate value="global.feature3_guide" />
                                </small>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </OurServices>

            <PageRank />

            <div className="bg-primary text-white">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4 col-12">
                            <Link to="/" className="d-block text-center text-white">
                                <MdForum size="60px" />
                                <p className="mt-2 mb-2">
                                    <Translate value="global.FAQ" />
                                </p>
                            </Link>
                        </div>
                        <div className="col-md-4 col-12">
                            <Link to="/" className="d-block text-center text-white">
                                <FaUsers size="60px" />
                                <p className="mt-2 mb-2">
                                    <Translate value="global.Events_Tours" />
                                </p>
                            </Link>
                        </div>
                        <div className="col-md-4 col-12">
                            <Link to="/" className="d-block text-center text-white">
                                <MdExitToApp size="60px" />
                                <p className="mt-2 mb-3">
                                    <Translate value="global.signUp" />
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ApplyNowSchool
