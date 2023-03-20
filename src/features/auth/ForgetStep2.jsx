import React from 'react'
import { Form } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import CustomToast from '../../components/CustomToast'

const ForgetStep2 = () => {
    return (
        <>
            <h2 className="mb-3">
                <Translate value="find_more.auth.forgotPassword.stepNotifier" /> 2  <Translate value="find_more.auth.forgotPassword.of" /> 2
            </h2>
            <div className="row gx-5">
                <div className="col-md-9 col-12 mb-md-0 mb-3">
                    <div className="bg-white shadow-sm rounded p-3">
                        <CustomToast text="help me" />
                        <Form>
                            <div className="mb-3">
                                <Form.Label>Security Question</Form.Label>
                                <Form.Control type="text" name="username" />
                                <Form.Text><Translate value="find_more.auth.forgotPassword.step1_input_hint" /></Form.Text>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-timnak shadow-lg px-5" type="submit">
                                    <Translate value="find_more.auth.forgotPassword.step2_btn" />
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <div className="shadow-sm rounded">
                        <div className="bg-timnak-light text-center p-3">
                            <h4 className="mb-0 fw-bold">
                                <Translate value="find_more.auth.forgotPassword.step2_hint_title" />
                            </h4>
                        </div>
                        <div className="p-3 bg-white">
                            <p className="mb-0" style={{ textAlign: "justify" }}>
                                <Translate value="find_more.auth.forgotPassword.step2_hint_description" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetStep2
