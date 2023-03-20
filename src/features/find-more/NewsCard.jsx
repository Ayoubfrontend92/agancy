import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { FiGlobe, FiShare2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import CustomToast from '../../components/CustomToast'

const NewsCard = () => {

    const [readMore, setReadMore] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="news-item bg-white shadow-sm rounded border mb-3">
            <div className="row">
                <div className="col-md-10 col-12">
                    <div className="p-3">
                        <div className="title d-flex justify-content-between">
                            <h4>Title {readMore && <button className="btn p-0" onClick={() => setReadMore(false)}>(minimize)</button>} </h4>
                            <small className="text-timnak">Category</small>
                        </div>
                        {!readMore && (
                            <p className="text-muted mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit...
                                <button className="btn" onClick={() => setReadMore(true)}>Read more</button>
                            </p>
                        )}
                        {readMore && (
                            <div className="openedItems">
                                <div className="row">
                                    <div className="col-md-10 col-12 mb-md-0 mb-3">
                                        <p style={{ textAlign: "justify" }}>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum suscipit dignissimos minima placeat, id et odit ea facilis natus sit corrupti est. Beatae in labore asperiores accusamus, veritatis debitis. Temporibus?
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum suscipit dignissimos minima placeat, id et odit ea facilis natus sit corrupti est. Beatae in labore asperiores accusamus, veritatis debitis. Temporibus?
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum suscipit dignissimos minima placeat, id et odit ea facilis natus sit corrupti est. Beatae in labore asperiores accusamus, veritatis debitis. Temporibus?
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum suscipit dignissimos minima placeat, id et odit ea facilis natus sit corrupti est. Beatae in labore asperiores accusamus, veritatis debitis. Temporibus?
                                        </p>
                                    </div>
                                    <div className="col-md-2 col-12 mb-md-0 mb-3">
                                        <img src="https://picsum.photos/200/120" alt="" height="120" className="img-fluid" />
                                    </div>
                                </div>

                                <ul className="list-unstyled d-flex w-100">
                                    <li className="mx-2">
                                        #tag-1
                                    </li>
                                    <li className="mx-2">
                                        #tag-2
                                    </li>
                                </ul>

                                <div className="attachments">
                                    <h6 className="fw-bold">Download Attachments:</h6>
                                    <ol>
                                        <li>
                                            <a href="/" download>file-1</a>
                                        </li>
                                        <li>
                                            <a href="/" download>file-1</a>
                                        </li>
                                    </ol>
                                </div>

                            </div>
                        )}
                    </div>
                </div>
                <div className="col-md-2 col-12 border-start">
                    <div className="text-center p-3 d-flex flex-md-column flex-row justify-content-evenly align-items-center h-100">
                        <b className="d-block">
                            20 Oct 2020
                        </b>
                        {readMore && (
                            <>
                                <div className="mt-auto">
                                    <FiGlobe size="50px" color="#adb5bd" className="d-block mx-auto" />
                                    <img src="https://www.countryflags.io/be/flat/64.png" alt="country-name" className="mb-1 mx-auto d-block" />
                                </div>
                                <button className="btn btn-link mt-md-auto" onClick={handleShow}>
                                    <FiShare2 size="50px" />
                                    <CustomToast text="help me" />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="bg-timnak text-white">
                    <Modal.Title>Share this page</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-6 mb-3">
                            <Link to="/" className="btn w-100 btn-light text-timnak">Gmail</Link>
                        </div>
                        <div className="col-6 mb-3">
                            <Link to="/" className="btn w-100 btn-light text-timnak">Yahoo</Link>
                        </div>
                        <div className="col-6 mb-3">
                            <Link to="/" className="btn w-100 btn-light text-timnak">Instagram</Link>
                        </div>
                        <div className="col-6 mb-3">
                            <Link to="/" className="btn w-100 btn-light text-timnak">Telegram</Link>
                        </div>
                        <div className="col-6">
                            <Link to="/" className="btn w-100 btn-light text-timnak">Whatsapp</Link>
                        </div>
                        <div className="col-6">
                            <Link to="/" className="btn w-100 btn-light text-timnak">LinkedIn</Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default NewsCard
