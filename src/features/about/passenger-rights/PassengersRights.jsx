import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'
import Banner from '../../../components/Banner'

const rights = [
    {
        id: 1,
        title_en: "caq",
        title_fa: "عنوان فارسی",
        imgage: "https://picsum.photos/300/150?random=1",
    },
    {
        id: 2,
        title_en: "visa-pick-up",
        title_fa: "عنوان فارسی",
        imgage: "https://picsum.photos/300/150?random=2",
    },
    {
        id: 3,
        title_en: "assessment",
        title_fa: "عنوان فارسی",
        imgage: "https://picsum.photos/300/150?random=3",
    },
    {
        id: 4,
        title_en: "cv-resume",
        title_fa: "عنوان فارسی",
        imgage: "https://picsum.photos/300/150?random=4",
    },
    {
        id: 5,
        title_en: "filing-forms",
        title_fa: "عنوان فارسی",
        imgage: "https://picsum.photos/300/150?random=5",
    },
    {
        id: 6,
        title_en: "us-lotter",
        title_fa: "عنوان فارسی",
        imgage: "https://picsum.photos/300/150?random=6",
    },
]

const PassengersRights = () => {
    return (
        <div className="passenger-right mb-5">
            <Banner title="passenger_rights.title" />

            <Container fluid="lg">
                <p className="h5 mb-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat perspiciatis at quo esse laudantium corporis odit, ut exercitationem soluta consequuntur quos aperiam dolorum iusto eius nisi. Earum iusto et sequi.
                </p>


                <Row className="g-4 mb-5">
                    {rights.map((item, index) => (
                        <Col md="4" key={index}>
                            <Link to={`/about/passenger-rights/${item.id}`} variant="primary" className="text-dark text-decoration-none">
                                <Card>
                                    <Card.Img variant="top" src={item.imgage} />
                                    <Card.Body>
                                        <Card.Title>{item.title_fa}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>

                <div className="text-center">
                    <Link to="/about/passenger-rights/claim" className="btn btn-primary btn-lg">
                        <Translate value="passenger_rights.claimBtn" />
                    </Link>
                </div>

            </Container>

        </div>
    )
}

export default PassengersRights
