import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]


const ApplyForm = () => {

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
        <div className="apply-form mb-5">


            <div className="bg-timnak py-5 mb-5">
                <Container fluid="lg">
                    <h3 className="text-white mb-0">
                        <Translate value="about.careers.applyF.title" />
                    </h3>
                </Container>
            </div>

            <Container fluid="lg">

                <section className="pb-5 border-bottom">

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro magnam eum fugit obcaecati odit esse aut, soluta vel sapiente neque natus iusto, eveniet aperiam delectus suscipit optio similique illum fugiat!
                    </p>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto possimus iure beatae, placeat dolore
                    </p>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, dignissimos quos, quisquam atque doloribus iure delectus perspiciatis architecto ipsa vitae necessitatibus pariatur enim est obcaecati repudiandae assumenda commodi rem reiciendis?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, dignissimos quos, quisquam atque doloribus iure delectus perspiciatis architecto ipsa vitae necessitatibus pariatur enim est obcaecati repudiandae assumenda commodi rem reiciendis?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, dignissimos quos, quisquam atque doloribus iure delectus perspiciatis architecto ipsa vitae necessitatibus pariatur enim est obcaecati repudiandae assumenda commodi rem reiciendis?
                    </p>

                    <div className="d-flex justify-content-center">
                        <a href="/" target="_self" download className="btn btn-lg btn-timnak-outline">
                            <Translate value="about.careers.applyF.btnDownload" />
                        </a>
                    </div>

                </section>

                <Form>

                    <section className="py-5 border-bottom">

                        <h4 className="text-black-50 fw-bold mb-5">
                            <Translate value="about.careers.applyF.perInf" />
                        </h4>

                        <div className="row mb-5">

                            <h4 className="text-primary fw-bold">
                                <Translate value="about.careers.applyF.general_information" />
                            </h4>

                            <div className="col-md-6 col-12">
                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        <Translate value="about.careers.applyF.q1_label" />
                                    </Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </div>
                            <div className="col-md-6 col-12">
                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        <Translate value="about.careers.applyF.q2_label" />
                                    </Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </div>
                        </div>

                        <div className="row">

                            <h4 className="text-primary fw-bold">
                                <Translate value="about.careers.applyF.contact_information" />
                            </h4>

                            <div className="col-md-6 col-12">
                                <Form.Group>
                                    <Form.Label>
                                        <Translate value="about.careers.applyF.q3_label" />
                                    </Form.Label>
                                    <Form.Select>
                                        <option value=""></option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className="col-md-6 col-12">
                                <Form.Group>
                                    <Form.Label>
                                        <Translate value="about.careers.applyF.q4_label" />
                                    </Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </div>
                        </div>

                    </section>


                    <section className="py-5 border-bottom">

                        <h4 className="text-black-50 fw-bold mb-5">
                            <Translate value="about.careers.applyF.skillAndProf" />
                        </h4>

                        <Form.Group>
                            <Select
                                isMulti
                                options={options}
                                styles={colourStyles}
                                placeholder=""
                            />
                        </Form.Group>

                    </section>

                    <section className="py-5 border-bottom">

                        <h4 className="text-black-50 fw-bold mb-5">
                            <Translate value="about.careers.applyF.uploads" />
                        </h4>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                <Translate value="about.careers.applyF.q6_label" />
                            </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                <Translate value="about.careers.applyF.q6_label" />
                            </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                <Translate value="about.careers.applyF.q6_label" />
                            </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                    </section>

                    <section className="py-5">

                        <h4 className="text-black-50 fw-bold mb-5">
                            <Translate value="about.careers.applyF.ackAndDec" />
                        </h4>

                        <p>
                            <Translate value="about.careers.applyF.ackAndDec_brief" />
                        </p>

                        <div className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label={<Translate value="about.careers.applyF.ackAndDec_checkBox" />}
                            />
                        </div>

                    </section>

                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-timnak-outline btn-lg">
                            <Translate value="about.careers.applyF.btnConfirm" />
                        </button>
                    </div>

                </Form>


            </Container>

        </div>
    )
}

export default ApplyForm
