import React from 'react'
import { Form } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { FaEye } from 'react-icons/fa'
import { FiCheckCircle, FiXCircle } from 'react-icons/fi'
import CustomToast from '../../components/CustomToast'

const ForgetStep3 = () => {


    return (
        <>
            <h2 className="mb-3">
                <Translate value="find_more.auth.forgotPassword.step3Notifier" />
            </h2>
            <div className="row gx-5">
                <div className="col-md-9 col-12 mb-md-0 mb-3">
                    <div className="bg-white shadow-sm rounded p-3">
                        <CustomToast text="help me" />
                        <Form>
                            <div className="mb-3 position-relative">
                                <Form.Label><Translate value="find_more.auth.forgotPassword.step3_new_pass" /></Form.Label>
                                <Form.Control type="password" name="password" />
                                <FaEye size="20px" className="position-absolute end-10" style={{ top: "45%" }} />
                                <Form.Text><Translate value="find_more.auth.forgotPassword.step3_input1_hint" /></Form.Text>
                            </div>
                            <div className="mb-3 position-relative">
                                <Form.Label><Translate value="find_more.auth.forgotPassword.step3_new_pass_again" /></Form.Label>
                                <Form.Control type="password" name="confirm_password" />
                                <FaEye size="20px" className="position-absolute end-10" style={{ top: "45%" }} />
                                <Form.Text><Translate value="find_more.auth.forgotPassword.step3_input2_hint" /></Form.Text>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-timnak shadow-lg px-5" type="submit">
                                    <Translate value="find_more.auth.forgotPassword.step3_btn" />
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <div className="shadow-sm rounded">
                        <div className="bg-timnak-light text-center p-3">
                            <h4 className="mb-0 fw-bold">
                                <Translate value="find_more.auth.forgotPassword.step3_hint_title" />
                            </h4>
                        </div>
                        <div className="p-3 bg-white">
                            <p style={{ textAlign: "justify" }}>
                                <Translate value="find_more.auth.forgotPassword.step3_hint_description" />
                            </p>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-3">
                                    <FiCheckCircle className="text-success" size="22px" />
                                    <div className="mx-1 d-inline-flex"></div>
                                    <Translate value="find_more.auth.forgotPassword.step3_hint_description_l1" />
                                </li>
                                <li className="mb-3">
                                    <FiCheckCircle className="text-success" size="22px" />
                                    <div className="mx-1 d-inline-flex"></div>
                                    <Translate value="find_more.auth.forgotPassword.step3_hint_description_l2" />
                                </li>
                                <li>
                                    <FiXCircle className="text-danger" size="22px" />
                                    <div className="mx-1 d-inline-flex"></div>
                                    <Translate value="find_more.auth.forgotPassword.step3_hint_description_l3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetStep3
