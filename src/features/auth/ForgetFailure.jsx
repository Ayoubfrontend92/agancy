import React from 'react'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'
import CustomToast from '../../components/CustomToast'

const ForgetFailure = () => {
    return (
        <>
            <h2 className="mb-3">
                <Translate value="find_more.auth.forgotPassword.stepFailureNotifier" />
            </h2>
            <div className="row gx-5">
                <div className="col-md-9 col-12 mb-md-0 mb-3">
                    <CustomToast text="help me" />
                    <div className="bg-white shadow-sm rounded p-5 text-center">
                        <Link to="/" className="btn btn-timnak btn-lg shadow-lg px-5">
                            <Translate value="find_more.auth.forgotPassword.stepFailure_btn" />
                        </Link>
                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <div className="shadow-sm rounded">
                        <div className="bg-timnak-light text-center p-3">
                            <h4 className="mb-0 fw-bold">
                                <Translate value="find_more.auth.forgotPassword.stepFailure_hint_title" />
                            </h4>
                        </div>
                        <div className="p-3 bg-white">
                            <p className="mb-0" style={{ textAlign: "justify" }}>
                                <Translate value="find_more.auth.forgotPassword.stepFailure_hint_description" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetFailure
