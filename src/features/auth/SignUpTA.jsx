import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'

const SignUpTA = () => {

    const locale = useSelector(state => state.i18n.locale)

    return (
        <div className="auth-pages">

            <div className="bg-timnak py-5">
                <Container fluid="lg">
                    <h3 className="text-white mb-0">
                        <Translate value="find_more.auth.signup.ta.title" />
                    </h3>
                </Container>
            </div>

            <div className="py-5">
                <p className="h5 fw-bold text-center text-timnak">
                    <Translate value="find_more.auth.signup.ta.thanks" />
                </p>
            </div>

            <div className="pb-4">
                <p className="text-center">
                    <Translate value="find_more.auth.signup.ta.free_account" />
                </p>
            </div>

            <Container fluid="lg">

                <div className="bg-white shadow-sm rounded p-3 mb-5">
                    <p className="fw-bold">
                        <Translate value="find_more.auth.signup.ta.already_registered_title" />
                    </p>
                    <p className="fw-bold">
                        <Translate value="find_more.auth.signup.ta.already_registered_text" />
                        {" "}
                        <Link to="">
                            <Translate value="find_more.auth.signup.ta.already_registered_click_here" />
                        </Link>
                    </p>
                    <Link to="" className="fw-bold">
                        <Translate value="find_more.auth.signup.ta.already_registered_forgot_password" />
                    </Link>
                </div>

                <div className="important-notes mb-5">
                    <p className="text-danger fw-bold">
                        <Translate value="find_more.auth.signup.ta.imp_note_title" />
                    </p>
                    <ol>
                        <li className="mb-3">
                            <Translate value="find_more.auth.signup.ta.imp_note_list_item_1" />
                        </li>
                        <li>
                            <Translate value="find_more.auth.signup.ta.imp_note_list_item_2" />
                        </li>
                    </ol>
                </div>

                <div className="form-container pb-4">
                    <h4 className="text-timnak mb-4">
                        <Translate value="find_more.auth.signup.ta.form_title" />
                    </h4>

                    <div className="bg-white shadow-sm rounded p-lg-5 p-3 mb-5">
                        <Form>

                            <section>
                                <h5 className="text-timnak mb-4">
                                    <Translate value="find_more.auth.signup.ta.form_sec1_title" />
                                </h5>
                                <div className="row">
                                    <div className="col-lg-8">

                                        <div className="mb-3">
                                            <Form.Label>
                                                <Translate value="find_more.auth.signup.ta.form_sec1_email" />
                                            </Form.Label>
                                            <Form.Control type="email" placeholder={locale === 'en' ? "" : ""} />
                                            <Form.Text>
                                                <Translate value="find_more.auth.signup.ta.form_sec1_email_help" />
                                            </Form.Text>
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label>
                                                <Translate value="find_more.auth.signup.ta.form_sec1_phonenumber" />
                                            </Form.Label>
                                            <Form.Control type="text" placeholder={locale === 'en' ? "" : ""} />
                                            <Form.Text>
                                                <Translate value="find_more.auth.signup.ta.form_sec1_phonenumber_help" />
                                            </Form.Text>
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label>
                                                <Translate value="find_more.auth.signup.ta.form_sec1_password" />
                                            </Form.Label>
                                            <Form.Control type="password" placeholder={locale === 'en' ? "" : ""} />
                                            <Form.Text>
                                                <Translate value="find_more.auth.signup.ta.form_sec1_password_help" />
                                            </Form.Text>
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label>
                                                <Translate value="find_more.auth.signup.ta.form_sec1_confirm_pass" />
                                            </Form.Label>
                                            <Form.Control type="password" placeholder={locale === 'en' ? "" : ""} />
                                            <Form.Text>
                                                <Translate value="find_more.auth.signup.ta.form_sec1_confirm_pass_help" />
                                            </Form.Text>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <hr />

                            <section>
                                <h5 className="text-timnak mb-4">
                                    <Translate value="find_more.auth.signup.ta.form_sec2_title" />
                                </h5>
                                <div className="row">
                                    <div className="col-lg-8">

                                        <div className="mb-3">
                                            <Form.Label>
                                                <Translate value="find_more.auth.signup.ta.form_sec2_businessName" />
                                            </Form.Label>
                                            <Form.Control type="email" placeholder={locale === 'en' ? "" : ""} />
                                            <Form.Text>
                                                <Translate value="find_more.auth.signup.ta.form_sec1_businessName_help" />
                                            </Form.Text>
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label>
                                                <Translate value="find_more.auth.signup.ta.form_sec2_license" />
                                            </Form.Label>
                                            <Form.Control type="text" placeholder={locale === 'en' ? "" : ""} />
                                            <Form.Text>
                                                <Translate value="find_more.auth.signup.ta.form_sec2_license_help" />
                                            </Form.Text>
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label>
                                                <Translate value="find_more.auth.signup.ta.form_sec2_province" />
                                            </Form.Label>
                                            <Form.Select>
                                                <option value="">{locale === 'en' ? "" : ""}</option>
                                            </Form.Select>
                                            <Form.Text>
                                                <Translate value="find_more.auth.signup.ta.form_sec2_province_help" />
                                            </Form.Text>
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label>
                                                <Translate value="find_more.auth.signup.ta.form_sec2_city" />
                                            </Form.Label>
                                            <Form.Select>
                                                <option value="">{locale === 'en' ? "" : ""}</option>
                                            </Form.Select>
                                            <Form.Text>
                                                <Translate value="find_more.auth.signup.ta.form_sec2_city_help" />
                                            </Form.Text>
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label>
                                                <Translate value="find_more.auth.signup.ta.form_sec2_postal" />
                                            </Form.Label>
                                            <Form.Control type="text" placeholder={locale === 'en' ? "" : ""} />
                                            <Form.Text>
                                                <Translate value="find_more.auth.signup.ta.form_sec2_postal_help" />
                                            </Form.Text>
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label>
                                                <Translate value="find_more.auth.signup.ta.form_sec2_publicMail" />
                                            </Form.Label>
                                            <Form.Control type="text" placeholder={locale === 'en' ? "" : ""} />
                                            <Form.Text>
                                                <Translate value="find_more.auth.signup.ta.form_sec2_publicMail_help" />
                                            </Form.Text>
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label>
                                                <Translate value="find_more.auth.signup.ta.form_sec2_public_phone" />
                                            </Form.Label>
                                            <Form.Control type="text" placeholder={locale === 'en' ? "" : ""} />
                                            <Form.Text>
                                                <Translate value="find_more.auth.signup.ta.form_sec2_public_phone_help" />
                                            </Form.Text>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <hr />

                            <section>
                                <h5 className="text-timnak mb-4">
                                    <Translate value="find_more.auth.signup.ta.form_sec3_title" />
                                </h5>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="mb-3">
                                            <Form.Label>
                                                <Translate value="find_more.auth.signup.ta.form_sec3_uploadLicense" />
                                            </Form.Label>
                                            <Form.Control type="file" />
                                            <Form.Text>
                                                <Translate value="find_more.auth.signup.ta.form_sec3_uploadLicense_help" />
                                            </Form.Text>
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label>
                                                <Translate value="find_more.auth.signup.ta.form_sec3_uploadAppForm" />
                                            </Form.Label>
                                            <Form.Control type="file" />
                                            <Form.Text>
                                                <Translate value="find_more.auth.signup.ta.form_sec3_uploadAppForm_help_1" />
                                                <a href="/" download className="mx-2">
                                                    <Translate value="find_more.auth.signup.ta.form_sec3_uploadAppForm_help_2" />
                                                </a>
                                                <Translate value="find_more.auth.signup.ta.form_sec3_uploadAppForm_help_3" />
                                            </Form.Text>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <hr />

                            <section>
                                <div className="d-flex align-items-baseline mb-4">
                                    <h5 className="text-timnak">
                                        <Translate value="find_more.auth.signup.ta.form_sec6_title" />
                                    </h5>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" />
                                            <label className="form-check-label">
                                                <Translate value="find_more.auth.signup.ta.form_sec6_checkbox_p_1" />
                                                <Link to="" className="mx-1">
                                                    <Translate value="find_more.auth.signup.ta.form_sec6_checkbox_p_2" />
                                                </Link>
                                                <Translate value="find_more.auth.signup.ta.form_sec6_checkbox_p_3" />
                                                <Link to="" className="mx-1">
                                                    <Translate value="find_more.auth.signup.ta.form_sec6_checkbox_p_4" />
                                                </Link>
                                            </label>
                                        </div>


                                    </div>
                                </div>
                            </section>

                            <div className="text-center mt-5">
                                <button className="btn btn-lg btn-timnak px-5 shadow-lg">
                                    <Translate value="find_more.auth.signup.ta.form_btn" />
                                </button>
                            </div>

                        </Form>
                    </div>

                </div>

            </Container>


        </div>
    )
}

export default SignUpTA
