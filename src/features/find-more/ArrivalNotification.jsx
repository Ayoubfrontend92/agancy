import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { FaPlaneArrival } from 'react-icons/fa'
import Banner from '../../images/banner-sample.jpg'
import CustomToast from '../../components/CustomToast'

const ArrivalNotification = () => {

    const [notifyType, setNotifyType] = useState(null);

    const handleRadioChange = (e) => {
        setNotifyType(e.target.value);
    }

    const renderNotifyType = () => {
        switch (notifyType) {
            case "phonenumber":
                return <>
                    <p className="text-center fw-bold mb-3">
                        <Translate value="find_more.arrivals.notif.notify_by_phonenumber_text" />
                    </p>

                    <div className="mb-5">
                        <Form.Label htmlFor=""></Form.Label>
                        <Form.Control type="text" />
                    </div>
                </>;
            case "email":
                return <>
                    <p className="text-center fw-bold mb-3">
                        <Translate value="find_more.arrivals.notif.notify_by_email_text" />
                    </p>

                    <div className="mb-5">
                        <Form.Label htmlFor=""></Form.Label>
                        <Form.Control type="email" />
                    </div>
                </>;

            default:
                return "";
        }
    }

    return (
        <div className="arrivals">

            <div className="banner position-relative mb-5">
                <img src={Banner} alt="banner" width="100%" height="600" />
                <div className="info position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
                    <h3 className="mb-0">
                        <Translate value="find_more.arrivals.notif.title" />
                    </h3>
                </div>
            </div>

            <Container fluid="lg">

                <CustomToast text="help me" />
                <div className="flightInfo border rounded mb-5">
                    <div className="row align-items-center">
                        <div className="col-md-10">
                            <div className="p-3 d-flex">
                                <img src="https://picsum.photos/100" className="img-fluid rounded shadow-sm" alt="timnak" width="100" height="100" />
                                <ul className="list-unstyled px-3 mb-0">
                                    <li className="mb-3">
                                        CD7896SA -
                                        <span className="mx-2">
                                            <Translate value="find_more.arrivals.notif.arrived_from" />
                                        </span>
                                        IRAN
                                    </li>
                                    <li className="mb-3">
                                        Saturday - {new Date().toLocaleDateString()}
                                    </li>
                                    <li>
                                        Turkish Airline
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="p-3 d-flex flex-column text-primary align-items-center">
                                <FaPlaneArrival size="60px" />
                                <small className="my-2">
                                    <Translate value="find_more.arrivals.notif.on_time" />
                                </small>
                                <p className="h3">23:12</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Row className="justify-content-center">
                    <Col md={{ span: 6 }}>

                        <Form>

                            <div className="btn-group mb-5 w-100" role="group" aria-label="Basic radio toggle button group" onChange={handleRadioChange}>
                                <input type="radio" className="btn-check" name="notify_type" id="item1" defaultValue="email" autoComplete="off" />
                                <label className="btn btn-outline-primary btn-lg rounded-0" style={{ width: "50%" }} htmlFor="item1">
                                    <Translate value="find_more.arrivals.notif.notify_by_email" />
                                </label>

                                <input type="radio" className="btn-check" name="notify_type" id="item2" autoComplete="off" defaultValue="phonenumber" />
                                <label className="btn btn-outline-primary btn-lg rounded-0" style={{ width: "50%" }} htmlFor="item2">
                                    <Translate value="find_more.arrivals.notif.notify_by_phonenumber" />
                                </label>
                            </div>

                            {renderNotifyType()}

                            {notifyType && <div className="mb-5 text-center">
                                <button type="submit" className="btn shadow-lg px-5 btn-lg">
                                    <Translate value="find_more.arrivals.notif.btnSubmit" />
                                </button>
                            </div>}

                        </Form>

                        {notifyType &&
                            <p>
                                <Translate value="find_more.arrivals.notif.respect" />
                            </p>
                        }

                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default ArrivalNotification
