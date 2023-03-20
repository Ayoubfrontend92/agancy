import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Translate } from 'react-redux-i18n';
import { Link } from 'react-router-dom';

const AllServices = () => {

    const asias = [
        {
            id: 1,
            title_en: "caq",
            title_fa: "عنوان فارسی",
            imgage: "https://picsum.photos/seed/picsum/200/100",
        },
        {
            id: 2,
            title_en: "visa-pick-up",
            title_fa: "عنوان فارسی",
            imgage: "https://picsum.photos/seed/picsum/200/100",
        },
        {
            id: 3,
            title_en: "assessment",
            title_fa: "عنوان فارسی",
            imgage: "https://picsum.photos/seed/picsum/200/100",
        },
        {
            id: 4,
            title_en: "cv-resume",
            title_fa: "عنوان فارسی",
            imgage: "https://picsum.photos/seed/picsum/200/100",
        },
        {
            id: 5,
            title_en: "filing-forms",
            title_fa: "عنوان فارسی",
            imgage: "https://picsum.photos/seed/picsum/200/100",
        },
        {
            id: 6,
            title_en: "us-lotter",
            title_fa: "عنوان فارسی",
            imgage: "https://picsum.photos/seed/picsum/200/100",
        },
    ]

    return (
        <div className="all-services">

            <div className="bg-timnak py-4 mb-5">
                <Container>
                    <h3 className="text-white">
                        <Translate value="globalServices.all_services.title" />
                    </h3>
                </Container>
            </div>

            <Container className="mb-5">

                <p className="mb-4 text-muted">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste doloremque ratione odit, laboriosam quaerat consectetur ducimus corporis animi expedita, dicta quos ut vel dolores ipsa sit similique, distinctio dignissimos voluptate!
                </p>

                <Row className="g-4">
                    {asias.map((item, index) => (
                        <Col md="4" key={index}>
                            <Card>
                                <Card.Img variant="top" src={item.imgage} />
                                <Card.Body>
                                    <Link to={`/global-services/${item.title_en}`} variant="primary" className="text-dark text-decoration-none">
                                        <Card.Title>{item.title_fa}</Card.Title>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>
        </div>
    )
}

export default AllServices
