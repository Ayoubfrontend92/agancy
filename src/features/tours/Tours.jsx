import React from 'react'
import { Badge, Col, Container, Form, Row } from 'react-bootstrap';
import { BiSpreadsheet } from 'react-icons/bi';
import { Translate } from 'react-redux-i18n';
import { Link, useLocation } from 'react-router-dom';
import CustomToast from '../../components/CustomToast';
import Banner from '../../images/banner-sample.jpg'
import ToursImage from '../../images/tours.svg'

const tours = [
    {
        id: 1,
        image: ToursImage,
        title: "tour-1",
        duration: 3,
        is_group_tour: true
    },
    {
        id: 2,
        image: ToursImage,
        title: "tour-2",
        duration: 3,
        is_group_tour: true
    },
    {
        id: 3,
        image: ToursImage,
        title: "tour-3",
        duration: 3,
        is_group_tour: false
    },
]

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Tours = () => {

    let query = useQuery();

    return (
        <div className="search-tours py-5">


            <Container>

                <div className="banner position-relative mb-4">
                    <img src={Banner} alt="banner" width="100%" height="600" />
                    <div className="info position-absolute bottom-0 w-100 p-3 text-white dark-gradiant">
                        <h3 className="mb-0 text-timnak">
                            <Translate value="tours.banner_title" />
                        </h3>
                    </div>
                </div>

                <Row className="g-5">

                    <Col md="3">
                        <div className="filterBox">
                            <div className="bg-timnak text-white text-center p-3 mb-4">
                                <p className="mb-0">
                                    <Translate value="tours.filterBox_title" />
                                    <CustomToast text="help me" />
                                </p>
                            </div>
                        </div>

                        <Form.Group className="mb-3">
                            <div className="d-flex align-items-center justify-content-between">
                                <span>1</span>
                                <span>30</span>
                            </div>
                            <Form.Range min="1" max="30" defaultValue="1" step="1" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check
                                key={Math.random()}
                                defaultChecked={query.get('tour') === "group-tours"}
                                type="checkbox"
                                name="tourType"
                                label={<Translate value="tours.group" />}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                key={Math.random()}
                                defaultChecked={query.get('tour') === "kish-tours"}
                                type="checkbox"
                                name="tourType"
                                label={<Translate value="tours.kish" />}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                key={Math.random()}
                                defaultChecked={query.get('tour') === "mashhad-tours"}
                                type="checkbox"
                                name="tourType"
                                label={<Translate value="tours.mashhad" />}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                key={Math.random()}
                                defaultChecked={query.get('tour') === "outbound-tours"}
                                type="checkbox"
                                name="tourType"
                                label={<Translate value="tours.Outbound" />}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                key={Math.random()}
                                defaultChecked={query.get('tour') === "exhibition-tours"}
                                type="checkbox"
                                name="tourType"
                                label={<Translate value="tours.Trade_fair" />}
                            />
                        </Form.Group>

                    </Col>

                    <Col className="px-lg-5">
                        {tours.map((tour, index) => (
                            <div className="tour-item d-flex flex-lg-row flex-column mb-3" key={index}>
                                <div className="tourImage mb-lg-0 mb-3">
                                    <img src={tour.image} alt={tour.title} className="img-fluid w-100" height="200" />
                                </div>
                                <div className="tourDetails flex-grow-1 px-lg-3 px-0 d-flex flex-column justify-content-between">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h3>{tour.title}</h3>
                                        {tour.is_group_tour ? <Badge bg="danger">
                                            <Translate value="tours.group_tour" />
                                        </Badge> : ""}
                                    </div>


                                    <div className="d-flex justify-content-between align-items-center">
                                        <h1>{tour.duration} <span className="h5">
                                            <Translate value="tours.days" />
                                        </span></h1>

                                        <Link to={`/events-and-tours/${tour.id}`}>
                                            <BiSpreadsheet />
                                            <Translate value="tours.read" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Col>

                </Row>

            </Container>
        </div>
    )
}

export default Tours
