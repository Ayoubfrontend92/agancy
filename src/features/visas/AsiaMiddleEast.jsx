import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { Link, useRouteMatch } from 'react-router-dom'

const AsiaMiddleEast = () => {

    const { url } = useRouteMatch();

    const asias = [
        {
            id: 1,
            title_en: "title_en",
            title_fa: "عنوان فارسی",
            imgage: "https://picsum.photos/seed/picsum/200/100",
        },
        {
            id: 2,
            title_en: "title_en",
            title_fa: "عنوان فارسی",
            imgage: "https://picsum.photos/seed/picsum/200/100",
        },
        {
            id: 3,
            title_en: "title_en",
            title_fa: "عنوان فارسی",
            imgage: "https://picsum.photos/seed/picsum/200/100",
        },
        {
            id: 4,
            title_en: "title_en",
            title_fa: "عنوان فارسی",
            imgage: "https://picsum.photos/seed/picsum/200/100",
        },
        {
            id: 5,
            title_en: "title_en",
            title_fa: "عنوان فارسی",
            imgage: "https://picsum.photos/seed/picsum/200/100",
        },
    ]

    return (
        <div className="visas-asia-middle-east py-5">
            <Container>

                <h2 className="text-timnak text-center mb-5">
                    <Translate value="visas.title" />
                </h2>

                <Row className="g-4">
                    {asias.map((item, index) => (
                        <Col md="4" key={index}>
                            <Card>
                                <Card.Img variant="top" src={item.imgage} />
                                <Card.Body>
                                    <Link to={`${url}/${item.id}`} variant="primary" className="text-dark text-decoration-none">
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

export default AsiaMiddleEast
