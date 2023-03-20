import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { FiCheck } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SignUpTC = () => {

    const locale = useSelector(state => state.i18n.locale)

    return (
        <div className="auth-pages">

            <div className="bg-timnak py-5">
                <Container fluid="lg">
                    <h3 className="text-white mb-0">
                        <Translate value="find_more.auth.signup.tc.title" />
                    </h3>
                </Container>
            </div>

            <div className="py-5">
                <Container fluid="lg">

                    <div className="bg-white shadow-sm rounded p-3 mb-5">
                        <h4 className="text-timnak mb-4 text-center">
                            <Translate value="find_more.auth.signup.tc.benefits_title" />
                        </h4>
                        <ul className="list-unstyled benefits" style={{ width: "50%", margin: 'auto' }}>
                            <li className="fs-5 mb-3">
                                <div className="d-inline-block" style={{ width: "30px" }}>
                                    <FiCheck size="30px" className="text-success"></FiCheck>
                                </div>
                                <div className="d-inline-flex mx-3"></div>
                                <Translate value="find_more.auth.signup.tc.benefits_1" />
                            </li>
                            <li className="fs-5 mb-3">
                                <div className="d-inline-block" style={{ width: "30px" }}>
                                    <FiCheck size="30px" className="text-success"></FiCheck>
                                </div>
                                <div className="d-inline-flex mx-3"></div>
                                <Translate value="find_more.auth.signup.tc.benefits_2" />
                            </li>
                            <li className="fs-5 mb-3">
                                <div className="d-inline-block" style={{ width: "30px" }}>
                                    <FiCheck size="30px" className="text-success"></FiCheck>
                                </div>
                                <div className="d-inline-flex mx-3"></div>
                                <Translate value="find_more.auth.signup.tc.benefits_3" />
                            </li>
                            <li className="fs-5">
                                <div className="d-inline-block" style={{ width: "30px" }}>
                                    <FiCheck size="30px" className="text-success"></FiCheck>
                                </div>
                                <div className="d-inline-flex mx-3"></div>
                                <Translate value="find_more.auth.signup.tc.benefits_4" />
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-timnak mb-4">
                            <Translate value="find_more.auth.signup.tc.main_title" />
                        </h4>
                        <div className="bg-white shadow-sm rounded p-lg-5 p-3 mb-5">
                            <Form>
                                <section>
                                    <h5 className="text-timnak mb-4">
                                        <Translate value="find_more.auth.signup.tc.form_sec1_title" />
                                    </h5>
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="mb-3">
                                                <Form.Label>
                                                    <Translate value="find_more.auth.signup.tc.form_sec1_email" />
                                                </Form.Label>
                                                <Form.Control type="email" placeholder={locale === 'en' ? "" : ""} />
                                                <Form.Text>
                                                    {<Translate value="form_sec1_email_help" />}
                                                </Form.Text>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <Translate value="global.OR" />
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="mb-3">
                                                <Form.Label>
                                                    <Translate value="find_more.auth.signup.tc.form_sec1_phonenumber" />
                                                </Form.Label>
                                                <Form.Control type="text" placeholder={locale === 'en' ? "" : ""} />
                                                <Form.Text>
                                                    {<Translate value="find_more.auth.signup.tc.form_sec1_phonenumber_help" />}
                                                </Form.Text>
                                            </div>
                                        </div>
                                        <div className="mb-5"></div>
                                        <div className="col-lg-8">
                                            <div className="mb-3">
                                                <Form.Label>
                                                    <Translate value="find_more.auth.signup.tc.form_sec1_password" />
                                                </Form.Label>
                                                <Form.Control type="password" placeholder={locale === 'en' ? "" : ""} />
                                                <Form.Text>
                                                    {<Translate value="find_more.auth.signup.tc.form_sec1_password_help" />}
                                                </Form.Text>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="mb-3">
                                                <Form.Label>
                                                    <Translate value="find_more.auth.signup.tc.form_sec1_confirm_pass" />
                                                </Form.Label>
                                                <Form.Control type="password" placeholder={locale === 'en' ? "" : ""} />
                                                <Form.Text>
                                                    {<Translate value="find_more.auth.signup.tc.form_sec1_confirm_pass_help" />}
                                                </Form.Text>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <hr />

                                <section>
                                    <h5 className="text-timnak mb-4">
                                        <Translate value="find_more.auth.signup.tc.form_sec2_title" />
                                    </h5>
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="mb-3">
                                                <Form.Label>
                                                    <Translate value="find_more.auth.signup.tc.form_sec2_firstName" />
                                                </Form.Label>
                                                <Form.Control type="text" placeholder={locale === 'en' ? "" : ""} />
                                                <Form.Text>
                                                    {<Translate value="find_more.auth.signup.tc.form_sec2_firstName_help" />}
                                                </Form.Text>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="mb-3">
                                                <Form.Label>
                                                    <Translate value="find_more.auth.signup.tc.form_sec2_lastName" />
                                                </Form.Label>
                                                <Form.Control type="text" placeholder={locale === 'en' ? "" : ""} />
                                                <Form.Text>
                                                    {<Translate value="find_more.auth.signup.tc.form_sec2_lastName_help" />}
                                                </Form.Text>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="mb-3">
                                                <Form.Label>
                                                    <Translate value="find_more.auth.signup.tc.form_sec2_birthdate" />
                                                </Form.Label>
                                                <Form.Control type="date" placeholder={locale === 'en' ? "" : ""} />
                                                <Form.Text>
                                                    {<Translate value="find_more.auth.signup.tc.form_sec2_birthdate_help" />}
                                                </Form.Text>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <Form.Label>
                                                <Translate value="find_more.auth.signup.tc.form_sec2_gender" />
                                            </Form.Label>
                                            <div className="mt-2">
                                                <Form.Check
                                                    inline
                                                    label={locale === "en" ? "Male" : "مرد"}
                                                    name="gender"
                                                    type="radio"
                                                    id=""
                                                />
                                                <Form.Check
                                                    inline
                                                    label={locale === "en" ? "Female" : "زن"}
                                                    name="gender"
                                                    type="radio"
                                                    id=""
                                                />

                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <hr />

                                <section>
                                    <h5 className="text-timnak mb-4">
                                        <Translate value="find_more.auth.signup.tc.form_sec3_title" />
                                    </h5>
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="mb-3">
                                                <Form.Label>
                                                    <Translate value="find_more.auth.signup.tc.form_sec3_province" />
                                                </Form.Label>
                                                <Form.Select>
                                                    <option value="">{locale === 'en' ? "" : ""}</option>
                                                </Form.Select>
                                                <Form.Text>
                                                    <Translate value="find_more.auth.signup.tc.form_sec3_province_help" />
                                                </Form.Text>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="mb-3">
                                                <Form.Label>
                                                    <Translate value="find_more.auth.signup.tc.form_sec3_city" />
                                                </Form.Label>
                                                <Form.Select>
                                                    <option value="">{locale === 'en' ? "" : ""}</option>
                                                </Form.Select>
                                                <Form.Text>
                                                    <Translate value="find_more.auth.signup.tc.form_sec3_city_help" />
                                                </Form.Text>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <hr />

                                <section>
                                    <div className="d-flex align-items-baseline mb-4">
                                        <h5 className="text-timnak">
                                            <Translate value="find_more.auth.signup.tc.form_sec4_title" />
                                        </h5>
                                        <small className="text-dark mx-1">
                                            (
                                            <Translate value="find_more.auth.signup.tc.form_sec4_optional" />
                                            )
                                        </small>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <Form.Label>
                                                    <Translate value="find_more.auth.signup.tc.form_sec4_promo" />
                                                </Form.Label>
                                                <Form.Control type="text" placeholder={locale === 'en' ? "" : ""} />
                                                <Form.Text>
                                                    <Translate value="find_more.auth.signup.tc.form_sec4_promo_help" />
                                                </Form.Text>
                                            </div>
                                        </div>
                                    </div>
                                </section>


                                <hr />

                                <section>
                                    <div className="d-flex align-items-baseline mb-4">
                                        <h5 className="text-timnak">
                                            <Translate value="find_more.auth.signup.tc.form_sec5_title" />
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <p className="fw-bold">{<Translate value="find_more.auth.signup.tc.form_sec5_intro" />}</p>

                                            <Form.Check
                                                type="checkbox"
                                                label={<Translate value="find_more.auth.signup.tc.form_sec5_checkbox1" />}
                                            />

                                            <Form.Check
                                                type="checkbox"
                                                label={<Translate value="find_more.auth.signup.tc.form_sec5_checkbox2" />}
                                            />

                                        </div>
                                    </div>
                                </section>

                                <hr />

                                <section>
                                    <div className="d-flex align-items-baseline mb-4">
                                        <h5 className="text-timnak">
                                            <Translate value="find_more.auth.signup.tc.form_sec6_title" />
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" />
                                                <label className="form-check-label">
                                                    <Translate value="find_more.auth.signup.tc.form_sec6_checkbox_p_1" />
                                                    <Link to="" className="mx-1">
                                                        <Translate value="find_more.auth.signup.tc.form_sec6_checkbox_p_2" />
                                                    </Link>
                                                    <Translate value="find_more.auth.signup.tc.form_sec6_checkbox_p_3" />
                                                    <Link to="" className="mx-1">
                                                        <Translate value="find_more.auth.signup.tc.form_sec6_checkbox_p_4" />
                                                    </Link>
                                                </label>
                                            </div>


                                        </div>
                                    </div>
                                </section>

                                <div className="text-center mt-5">
                                    <button className="btn btn-lg btn-timnak px-5 shadow-lg">
                                        <Translate value="find_more.auth.signup.tc.form_btn" />
                                    </button>
                                </div>

                            </Form>
                        </div>
                    </div>

                </Container>
            </div>

        </div>
    )
}

export default SignUpTC
