import React from 'react'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'

const ApplyProcessPaymentSuccess = () => {
    return (
        <div className="confirm-payment">
            <h3 className="mb-4">
                <Translate value="apply.submittion_success" />
            </h3>

            <div className="text-center p-5">
                <h4>
                    <Translate value="apply.confirm.case_number" />:
                    <span className="mx-4"></span>
                    <b>SS523A564D</b>

                </h4>

            </div>

            <div className="d-flex align-items-center justify-content-between">

                <Link to="/sign-up" className="btn btn-primary">
                    <Translate value="global.signUp" />
                </Link>

                <Link to="/" className="btn btn-primary">
                    <Translate value="global.home" />
                </Link>
            </div>

        </div>
    )
}

export default ApplyProcessPaymentSuccess
