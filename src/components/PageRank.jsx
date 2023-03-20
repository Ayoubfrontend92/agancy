import React, { useState } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { Translate } from 'react-redux-i18n';
import { MdClose } from 'react-icons/md'
import { BsStar, BsStarFill } from 'react-icons/bs'
import Rating from 'react-rating'
import { useSelector } from 'react-redux';

const PageRank = () => {

    const locale = useSelector(state => state.i18n.locale)

    const [show, setShow] = useState(false);
    const [rate, setRate] = useState(0)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="" onClick={handleShow} className="btn-timnak mb-5">
                <Translate value="global.ratePage" />
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header className="bg-timnak text-white">
                    <Modal.Title>
                        <Translate value="global.ratePage" />
                    </Modal.Title>
                    <Button variant="" onClick={handleClose} className="text-white p-0">
                        <MdClose size="25px" />
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Rate
                            </Form.Label>
                            <Col sm="10">
                                <Rating
                                    emptySymbol={<BsStar size="30px" color="#c5c5c5" />}
                                    fullSymbol={<BsStarFill size="30px" color="gold" />}
                                    placeholderSymbol={<BsStarFill size="30px" color="gold" />}
                                    direction={locale === 'en' ? "ltr" : "rtl"}
                                    onChange={(rate) => setRate(rate)}
                                    placeholderRating={rate}
                                />
                                <span className="mx-3">({rate})</span>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Category
                            </Form.Label>
                            <Col sm="6">
                                <Form.Select>
                                    <option value=""></option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Comments
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control as="textarea" rows="7" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        <Translate value="global.close" />
                    </Button>
                    <Button variant="" className="btn-timnak">
                        <Translate value="global.submit" />
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PageRank
