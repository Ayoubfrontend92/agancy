import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { FaUsers } from 'react-icons/fa';
import { MdExitToApp, MdForum, MdVerifiedUser } from 'react-icons/md';
import { Translate } from 'react-redux-i18n';
import { Link, useRouteMatch } from 'react-router-dom';

import CustomToast from '../../components/CustomToast'

function renderAlphabetInput() {
    let letters = [];
    for (var i = 65; i <= 90; i++) {
        letters.push(<Button key={i} variant="" value={String.fromCharCode(i)}>{String.fromCharCode(i)}</Button>);
    }
    return letters;
}

const schools = [
    {
        id: 1,
        title: "School name 1",
        school_type: "University",
        is_verified: false
    },
    {
        id: 2,
        title: "School name 2",
        school_type: "College",
        is_verified: true
    },
    {
        id: 3,
        title: "School name 3",
        school_type: "School",
        is_verified: false
    },
]

const ApplyNow = () => {

    const { url } = useRouteMatch()

    return (
        <div className="apply-now">
            <div className="container py-5">

                <h4 className="text-center mb-4">
                    <Translate value="visas.applyNow.search_title" />
                </h4>

                <div className="row justify-content-md-center">
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <Form className="row align-items-end">
                                <div className="col-10">
                                    <Form.Group>
                                        <Form.Label>
                                            <Translate value="visas.applyNow.Country" />
                                        </Form.Label>
                                        <Form.Select>
                                            <option value=""></option>
                                            <option value=""></option>
                                            <option value=""></option>
                                            <option value=""></option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="col-2">

                                    <Button variant="" className="bg-timnak text-white">
                                        <Translate value="visas.applyNow.Search" />
                                    </Button>

                                </div>
                            </Form>
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
                        <Translate value="visas.applyNow.Schools" /> <CustomToast text="help me" />
                    </h4>
                    <div className="alert alert-warning text-center">
                        <p className="mb-0">
                            <Translate value="visas.applyNow.cant_find" />
                        </p>
                    </div>

                    <div className="schools my-4">
                        {schools.map((school, index) => (
                            <div key={school.id} className="shadow-lg p-3 d-flex align-items-center justify-content-between rounded mb-4">
                                <span>{school.title}</span>
                                {school.is_verified && (<p className="text-timnak mb-0">
                                    <MdVerifiedUser size="30px" color="#521232" />
                                    <Translate value="visas.applyNow.verified" />
                                </p>)}
                                <Link to={`${url}/${school.id}`} className="btn btn-timnak-outline rounded-pill">{school.school_type}</Link>
                            </div>
                        ))}
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

        </div>
    )
}

export default ApplyNow
