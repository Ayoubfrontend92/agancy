import React from 'react'
import { Container, Form, Table } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { Link, useRouteMatch } from 'react-router-dom'

const SearchJobOpening = () => {

    const { url } = useRouteMatch();

    return (
        <div className="search-job-opening mb-5">

            <div className="bg-timnak py-5 mb-5">
                <Container fluid="lg">
                    <h3 className="text-white mb-0">
                        <Translate value="about.careers.search.title" />
                    </h3>
                </Container>
            </div>

            <Container fluid="lg">

                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8">
                        <div style={{ background: "#F3F3F3" }} className="p-3">
                            <Form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="mb-3">
                                            <Form.Label className="text-timnak fw-bold">
                                                <Translate value="about.careers.search.q1_label" />
                                            </Form.Label>
                                            <Form.Select>
                                                <option value=""></option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="mb-3">
                                            <Form.Label className="text-timnak fw-bold">
                                                <Translate value="about.careers.search.q1_label" />
                                            </Form.Label>
                                            <Form.Select>
                                                <option value=""></option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="mb-3">
                                            <Form.Label className="text-timnak fw-bold">
                                                <Translate value="about.careers.search.q1_label" />
                                            </Form.Label>
                                            <Form.Select>
                                                <option value=""></option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="mb-3">
                                            <Form.Label className="text-timnak fw-bold">
                                                <Translate value="about.careers.search.q1_label" />
                                            </Form.Label>
                                            <Form.Select>
                                                <option value=""></option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-timnak-outline" type="reset">
                                        Reset
                                    </button>
                                    <span className="mx-2"></span>
                                    <button className="btn btn-timnak-outline" type="submit">
                                        Submit
                                    </button>
                                </div>

                            </Form>
                        </div>
                    </div>
                </div>

                <Table hover className="mb-5">
                    <thead className="text-timnak">
                        <tr>
                            <th>
                                <Translate value="about.careers.search.thead_1" />
                            </th>
                            <th>
                                <Translate value="about.careers.search.thead_1" />
                            </th>
                            <th>
                                <Translate value="about.careers.search.thead_1" />
                            </th>
                            <th>
                                <Translate value="about.careers.search.thead_1" />
                            </th>
                            <th>
                                <Translate value="about.careers.search.thead_1" />
                            </th>
                            <th>
                                <Translate value="about.careers.search.thead_1" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link to={`${url}/1`}>
                                    PROGRAMME MANAGEMENT OFFICER
                                </Link>
                            </td>
                            <td>
                                162841
                            </td>
                            <td>
                                Economic, Social and Development
                            </td>
                            <td>
                                Programme Management
                            </td>
                            <td>
                                Shiraz
                            </td>
                            <td>
                                Oct. 10, 2021
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to={`${url}/2`}>
                                    PROGRAMME MANAGEMENT OFFICER
                                </Link>
                            </td>
                            <td>
                                162841
                            </td>
                            <td>
                                Economic, Social and Development
                            </td>
                            <td>
                                Programme Management
                            </td>
                            <td>
                                Shiraz
                            </td>
                            <td>
                                Oct. 10, 2021
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to={`${url}/3`}>
                                    PROGRAMME MANAGEMENT OFFICER
                                </Link>
                            </td>
                            <td>
                                162841
                            </td>
                            <td>
                                Economic, Social and Development
                            </td>
                            <td>
                                Programme Management
                            </td>
                            <td>
                                Shiraz
                            </td>
                            <td>
                                Oct. 10, 2021
                            </td>
                        </tr>
                    </tbody>
                </Table>


                <div className="d-flex justify-content-center">
                    <Link to="/about/careers/self-assesment" className="btn btn-lg btn-timnak-outline">
                        <Translate value="about.careers.search.btnSelfAssessment" />
                    </Link>
                </div>

            </Container>

        </div>
    )
}

export default SearchJobOpening
