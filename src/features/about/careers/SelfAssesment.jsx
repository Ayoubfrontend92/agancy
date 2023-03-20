import React from 'react'
import { Container, Form, Table } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]


const SelfAssesment = () => {

    const colourStyles = {
        multiValue: (styles, { data }) => {
            return {
                ...styles,
                backgroundColor: "#FFF",
            };
        },
        multiValueLabel: (styles, { data }) => ({
            ...styles,
            color: "#521232",
        }),
        multiValueRemove: (styles, { data }) => ({
            ...styles,
            color: "#521232",
            ':hover': {
                backgroundColor: "#FFF",
                color: '#521232',
            },
        }),
    };


    return (
        <div className="self-assesment mb-5">

            <div className="bg-timnak py-5 mb-5">
                <Container fluid="lg">
                    <h3 className="text-white mb-0">
                        <Translate value="about.careers.selfAsses.title" />
                    </h3>
                </Container>
            </div>

            <Container fluid="lg">

                <div className="row justify-content-center">
                    <div className="col-md-8 col-12">

                        <Form>

                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <Translate value="about.careers.selfAsses.q1_label" />
                                </Form.Label>
                                <Form.Select>
                                    <option value=""></option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <Translate value="about.careers.selfAsses.q2_label" />
                                </Form.Label>
                                <Form.Select>
                                    <option value=""></option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <Translate value="about.careers.selfAsses.q3_label" />
                                </Form.Label>
                                <Form.Select>
                                    <option value=""></option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <Translate value="about.careers.selfAsses.q4_label" />
                                </Form.Label>
                                <Form.Select>
                                    <option value=""></option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <Translate value="about.careers.selfAsses.q5_label" />
                                </Form.Label>
                                <Form.Select>
                                    <option value=""></option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <Translate value="about.careers.selfAsses.q6_label" />
                                </Form.Label>
                                <Select
                                    isMulti
                                    options={options}
                                    styles={colourStyles}
                                    placeholder=""
                                />

                            </Form.Group>

                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-lg btn-timnak-outline">
                                    <Translate value="about.careers.selfAsses.btnSubmit" />
                                </button>
                            </div>

                        </Form>



                    </div>
                </div>

                <div className="suggestions my-5">

                    <h4 className="fw-bold text-center mb-5">
                        <Translate value="about.careers.selfAsses.sugTitle" />
                    </h4>

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
                                    <Link to={`/about/careers/search-job-openings/${1}`}>
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
                                    <Link to={`/about/careers/search-job-openings/${1}`}>
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
                                    <Link to={`/about/careers/search-job-openings/${1}`}>
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


                </div>


            </Container>

        </div>
    )
}

export default SelfAssesment
