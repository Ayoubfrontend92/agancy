import React, { useState } from 'react'
import { Alert, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap'
import { FaBus, FaCar, FaExclamation, FaUsers } from 'react-icons/fa'
import { MdExitToApp, MdForum } from 'react-icons/md'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'
import CustomToast from '../../components/CustomToast'


const SingleTour = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="single-tour">

            <div className="hero position-relative">
                <img src="https://picsum.photos/800/300" className="img-fluid w-100" style={{ objectFit: "fill" }} height="300" alt="tour-title" />
                <div className="overlay position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center">

                    <Container>

                        <h2 className="text-white">
                            Title
                        </h2>

                    </Container>
                </div>
            </div>

            <div className="py-5">
                <Container>

                    <Alert variant="warning" className="mb-5">
                        <Alert.Heading>
                            <FaExclamation size="40px" />
                            Oh snap! You got an error!
                        </Alert.Heading>
                        <p>
                            Change this and that and try again. Duis mollis, est non commodo
                            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                            Cras mattis consectetur purus sit amet fermentum.
                        </p>
                    </Alert>

                    <Row className="g-5">

                        <Col md="9">

                            <div className="bg-white shadow-lg mb-3 p-3 rounded">

                                <div className="content">
                                    <ul className="list-unstyled text-timnak mb-0">
                                        <li>
                                            Country State City
                                        </li>
                                        <li>
                                            Country State City
                                        </li>
                                        <li>
                                            Country State City
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="bg-white shadow-lg mb-3 p-3 rounded">

                                <div className="title d-flex justify-content-between mb-4">
                                    <h4><Translate value="tours.single.Brief_text" /></h4>
                                </div>

                                <div className="content">
                                    <ul className="list-unstyled text-muted">
                                        <li className="mb-3">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum magnam quasi nisi eos aut eaque illo molestias consectetur, nam, expedita sapiente iure iste voluptatibus atque odio. Quod iure iusto natus!
                                        </li>
                                        <li className="mb-3">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum magnam quasi nisi eos aut eaque illo molestias consectetur, nam, expedita sapiente iure iste voluptatibus atque odio. Quod iure iusto natus!
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum magnam quasi nisi eos aut eaque illo molestias consectetur, nam, expedita sapiente iure iste voluptatibus atque odio. Quod iure iusto natus!
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="bg-white shadow-lg mb-3 p-3 rounded">

                                <div className="title d-flex justify-content-between mb-4">
                                    <h4><Translate value="tours.single.Legs" /> <CustomToast text="help me" /></h4>

                                    <div className="w-25">
                                        <Form.Select aria-label="Default select example">
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </div>

                                </div>

                                <div className="content">
                                    <div className="legs-item mb-2">
                                        <ul className="list-unstyled d-flex flex-lg-row flex-column align-items-lg-baseline align-items-center justify-content-evenly border rounded">
                                            <li className="px-2">
                                                <small className="font-weight-bold d-block my-2 text-center">Dept. Date Time</small>
                                                <p className="text-center">20Apr.2021 1530</p>
                                            </li>
                                            <li className="px-2">
                                                <small className="font-weight-bold d-block my-2 text-center">Duration</small>
                                                <p className="text-center">5 hours</p>
                                            </li>
                                            <li className="px-2">
                                                <small className="font-weight-bold d-block my-2 text-center">Dept. region</small>
                                                <p className="text-center">Tehran</p>
                                            </li>
                                            <li className="text-center px-2">
                                                <small className="font-weight-bold d-block my-2 text-center">Tr. mode</small>
                                                <FaBus />
                                            </li>
                                            <li className="px-2">
                                                <small className="font-weight-bold d-block my-2 text-center">Dest. region</small>
                                                <p className="text-center">Shiraz</p>
                                            </li>
                                            <li className="border-start border-end px-2">
                                                <small className="font-weight-bold d-block my-2 text-center">Acco type</small>
                                                <p className="text-center">4 star hotel </p>
                                            </li>
                                            <li className="border-end px-1">
                                                <small className="font-weight-bold d-block my-2 text-center">Carrier co.</small>
                                                <img src="https://picsum.photos/30/30" alt="" width="30" height="30" className="img-fluid rounded-circle" />
                                                <span className="mx-2">Iran Air</span>
                                            </li>
                                            <li className="px-2">
                                                <small className="font-weight-bold d-block my-2 text-center">Flight type</small>
                                                <p className="text-center">
                                                    <small className="font-weight-bold mx-2">
                                                        Allowed Luggage "20" Kg
                                                    </small>
                                                    Economy
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="bg-white shadow-lg mb-3 p-3 rounded">

                                <div className="title d-flex justify-content-between mb-4">
                                    <h4><Translate value="tours.single.Itinerary" /> <CustomToast text="help me" /></h4>

                                    <div className="w-25">
                                        <Form.Select aria-label="Default select example">
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </div>

                                </div>

                                <div className="content">
                                    <div className="legs-item itern mb-2">
                                        <ul className="list-unstyled d-flex flex-lg-row flex-column align-items-lg-baseline align-items-center justify-content-start border rounded">
                                            <li className="px-2 border-end">
                                                <small className="font-weight-bold d-block my-2 text-center">#</small>
                                                <p className="text-center">1</p>
                                            </li>
                                            <li className="px-2">
                                                <small className="font-weight-bold d-block my-2 text-center">Region</small>
                                                <p className="text-center">Tehran</p>
                                            </li>
                                            <li className="px-2">
                                                <small className="font-weight-bold d-block my-2 text-center">Night region</small>
                                                <p className="text-center">Tehran</p>
                                            </li>
                                            <li className="px-2 border-start border-end">
                                                <small className="font-weight-bold d-block my-2 text-center">Accommodation</small>
                                                <p className="text-center">4 start hotel</p>
                                            </li>
                                            <li className="px-2 border-end">
                                                <small className="font-weight-bold d-block my-2 text-center">Activity</small>
                                                <p>Tehran</p>
                                            </li>
                                            <li className="px-2">
                                                <small className="font-weight-bold d-block my-2 text-center">Meal</small>
                                                <p className="text-center">Breakfast/Lunch/Dinner</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="bg-white shadow-lg mb-3 p-3 rounded">

                                <div className="title d-flex justify-content-between mb-4">
                                    <h4><Translate value="tours.single.Packing_list" /> <CustomToast text="help me" /></h4>
                                </div>

                                <div className="content">
                                    <ol className="text-muted">
                                        <li className="mb-3">
                                            xxx
                                        </li>
                                        <li className="mb-3">
                                            xxx
                                        </li>
                                        <li>
                                            xxx
                                        </li>
                                    </ol>
                                </div>

                            </div>
                            <div className="bg-white shadow-lg mb-3 p-3 rounded">

                                <div className="title d-flex justify-content-between mb-4">
                                    <h4 className="text-danger"><Translate value="tours.single.Not_recommended" /> <CustomToast text="help me" /></h4>
                                </div>

                                <div className="content">
                                    <ol className="text-muted">
                                        <li className="mb-3">
                                            xxx
                                        </li>
                                        <li className="mb-3">
                                            xxx
                                        </li>
                                        <li>
                                            xxx
                                        </li>
                                    </ol>
                                </div>

                            </div>
                            <div className="bg-white shadow-lg mb-3 p-3 rounded">

                                <div className="title d-flex justify-content-between mb-4">
                                    <h4><Translate value="tours.single.Included_serviceces" /> <CustomToast text="help me" /></h4>
                                </div>

                                <div className="content">
                                    <ol className="text-muted">
                                        <li className="mb-3">
                                            xxx
                                        </li>
                                        <li className="mb-3">
                                            xxx
                                        </li>
                                        <li>
                                            xxx
                                        </li>
                                    </ol>
                                </div>

                            </div>
                            <div className="bg-white shadow-lg mb-3 p-3 rounded">

                                <div className="title d-flex justify-content-between mb-4">
                                    <h4><Translate value="tours.single.Sponsor" /> <CustomToast text="help me" /></h4>
                                </div>

                                <div className="content">
                                    <div className="row g-4">
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="sponserItem">
                                                <img src="https://picsum.photos/300/200" className="img-fluid mb-3" alt="" />
                                                <Link to="/" className="d-block text-center text-timnak text-decoration-none">
                                                    Sponser Title
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="sponserItem">
                                                <img src="https://picsum.photos/300/200" className="img-fluid mb-3" alt="" />
                                                <Link to="/" className="d-block text-center text-timnak text-decoration-none">
                                                    Sponser Title
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="sponserItem">
                                                <img src="https://picsum.photos/300/200" className="img-fluid mb-3" alt="" />
                                                <Link to="/" className="d-block text-center text-timnak text-decoration-none">
                                                    Sponser Title
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="sponserItem">
                                                <img src="https://picsum.photos/300/200" className="img-fluid mb-3" alt="" />
                                                <Link to="/" className="d-block text-center text-timnak text-decoration-none">
                                                    Sponser Title
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="sponserItem">
                                                <img src="https://picsum.photos/300/200" className="img-fluid mb-3" alt="" />
                                                <Link to="/" className="d-block text-center text-timnak text-decoration-none">
                                                    Sponser Title
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="sponserItem">
                                                <img src="https://picsum.photos/300/200" className="img-fluid mb-3" alt="" />
                                                <Link to="/" className="d-block text-center text-timnak text-decoration-none">
                                                    Sponser Title
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="bg-white shadow-lg mb-3 p-3 rounded">

                                <div className="title d-flex justify-content-between mb-4">
                                    <h4><Translate value="tours.single.Price_list" /> <CustomToast text="help me" /></h4>
                                </div>

                                <div className="content">
                                    <Table bordered>
                                        <tbody>
                                            <tr>
                                                <th rowSpan="2">
                                                    <Translate value="tours.single.tbl_h_1" />
                                                </th>
                                                <th rowSpan="2">
                                                    <Translate value="tours.single.tbl_h_2" />
                                                </th>
                                                <th colSpan="4">
                                                    <Translate value="tours.single.tbl_h_3" />
                                                </th>
                                                <th rowSpan="2">
                                                    <Translate value="tours.single.tbl_h_4" />
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <Translate value="tours.single.tbl_h_5" />
                                                </th>
                                                <th>
                                                    <Translate value="tours.single.tbl_h_6" />
                                                </th>
                                                <th>
                                                    <Translate value="tours.single.tbl_h_7" />
                                                </th>
                                                <th>
                                                    <Translate value="tours.single.tbl_h_8" />
                                                </th>
                                            </tr>

                                            <tr>
                                                <td>item</td>
                                                <td>item</td>
                                                <td>item</td>
                                                <td>item</td>
                                                <td>item</td>
                                                <td>item</td>

                                                <td>
                                                    <button className="btn btn-sm btn-primary" onClick={handleShow}>
                                                        <Translate value="tours.single.btnBookNow" />
                                                    </button>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td>item</td>
                                                <td>item</td>
                                                <td>item</td>
                                                <td>item</td>
                                                <td>item</td>
                                                <td>item</td>

                                                <td>
                                                    <button className="btn btn-sm btn-primary" onClick={handleShow}>
                                                        <Translate value="tours.single.btnBookNow" />
                                                    </button>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td>item</td>
                                                <td>item</td>
                                                <td>item</td>
                                                <td>item</td>
                                                <td>item</td>
                                                <td>item</td>

                                                <td>
                                                    <button className="btn btn-sm btn-secondary" disabled>
                                                        <Translate value="tours.single.btnNotAvailable" />
                                                    </button>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>

                            </div>

                        </Col>
                        <Col md="3">
                            <div className="bg-white shadow-lg mb-3 p-3 text-center rounded">
                                <h4><Translate value="tours.single.Booking_till" /> <CustomToast text="help me" /></h4>
                                <h5 className="text-timnak mb-0">8Oct. 2020</h5>
                            </div>
                            <div className="bg-white shadow-lg mb-3 p-3 text-center rounded">
                                <h4><Translate value="tours.single.Departure" /> <CustomToast text="help me" /></h4>
                                <h5 className="text-timnak mb-0">15 Oct.  20:30</h5>
                            </div>
                            <div className="bg-white shadow-lg mb-3 p-3 text-center rounded d-flex justify-content-between">
                                <div className="">
                                    <h4><Translate value="tours.single.Days" /></h4>
                                    <h5 className="text-timnak mb-0">5</h5>
                                </div>
                                <div className="">
                                    <h4><Translate value="tours.single.Nights" /></h4>
                                    <h5 className="text-timnak mb-0">4</h5>
                                </div>
                            </div>
                            <div className="bg-white shadow-lg mb-3 p-3 text-center rounded">
                                <h4><Translate value="tours.single.Accommodation_type" /></h4>
                                <h5 className="text-timnak mb-0">Hotel 3 stars</h5>
                            </div>
                            <div className="bg-white shadow-lg mb-3 p-3 text-center rounded">
                                <h4><Translate value="tours.single.Vehicle_type" /></h4>
                                <h5 className="text-timnak mb-0">
                                    <FaCar />
                                </h5>
                            </div>
                            <div className="bg-white shadow-lg mb-3 p-3 text-center rounded">
                                <h4><Translate value="tours.single.Age_range" /></h4>
                                <h5 className="text-timnak mb-0">25-55</h5>
                            </div>
                            <div className="bg-white shadow-lg mb-3 p-3 text-center rounded">
                                <h4><Translate value="tours.single.Meal_pattern" /></h4>
                                <h5 className="text-timnak mb-0">Meal pattern id</h5>
                            </div>
                            <div className="bg-white shadow-lg mb-3 p-3 text-center rounded">
                                <h4><Translate value="tours.single.Allowed_Luggage" /></h4>
                                <h5 className="text-timnak mb-0">000 KG</h5>
                            </div>
                            <div className="bg-white shadow-lg mb-3 p-3 text-center rounded">
                                <h4><Translate value="tours.single.Hotline" /></h4>
                                <h5 className="text-timnak mb-0">digit</h5>
                            </div>
                        </Col>

                    </Row>

                </Container>
            </div>

            <div className="container">
                <div className="my-5">
                    <h3 className="text-primary mb-4 text-center">
                        Similar Tours
                    </h3>
                    <div className="row g-4">
                        <div className="col-md-3 col-12">
                            <Link to="/" className="d-block">
                                <img src="https://picsum.photos/800/500" alt="" className="img-fluid rounded" />
                            </Link>
                        </div>
                        <div className="col-md-3 col-12">
                            <Link to="/" className="d-block">
                                <img src="https://picsum.photos/800/500" alt="" className="img-fluid rounded" />
                            </Link>
                        </div>
                        <div className="col-md-3 col-12">
                            <Link to="/" className="d-block">
                                <img src="https://picsum.photos/800/500" alt="" className="img-fluid rounded" />
                            </Link>
                        </div>
                        <div className="col-md-3 col-12">
                            <Link to="/" className="d-block">
                                <img src="https://picsum.photos/800/500" alt="" className="img-fluid rounded" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

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

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Translate value="tours.single.modal_title" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer className="d-flex justify-content-between">
                    <Link to="" className="btn btn-outline-primary">
                        <Translate value="tours.single.modal_btnApply" />
                    </Link>

                    <Link to="" className="btn btn-outline-warning">
                        <Translate value="tours.single.modal_btnSignup" />
                    </Link>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default SingleTour
