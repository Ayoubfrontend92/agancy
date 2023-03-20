import React from 'react'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'

const VisaItemOverview = () => {
    return (
        <div className="visa-item-overview">
            <div className="row mb-5 gy-5">
                <div className="col-md-4 col-sm-6 col-6">
                    <h4 className="fw-bold text-primary">
                        <Translate value="visas.item.overview.l1" />
                    </h4>
                    <p className="text-black-50">
                        Dynamic Value
                    </p>
                </div>
                <div className="col-md-4 col-sm-6 col-6">
                    <h4 className="fw-bold text-primary">
                        <Translate value="visas.item.overview.l2" />
                    </h4>
                    <p className="text-black-50">
                        Dynamic Value
                    </p>
                </div>
                <div className="col-md-4 col-sm-6 col-6">
                    <h4 className="fw-bold text-primary">
                        <Translate value="visas.item.overview.l3" />
                    </h4>
                    <p className="text-black-50">
                        Dynamic Value
                    </p>
                </div>
                <div className="col-md-4 col-sm-6 col-6">
                    <h4 className="fw-bold text-primary">
                        <Translate value="visas.item.overview.l4" />
                    </h4>
                    <p className="text-black-50">
                        Dynamic Value
                    </p>
                </div>
                <div className="col-md-4 col-sm-6 col-6">
                    <h4 className="fw-bold text-primary">
                        <Translate value="visas.item.overview.l5" />
                    </h4>
                    <p className="text-black-50">
                        Dynamic Value
                    </p>
                </div>
                <div className="col-md-4 col-sm-6 col-6">
                    <h4 className="fw-bold text-primary">
                        <Translate value="visas.item.overview.l6" />
                    </h4>
                    <p className="text-black-50">
                        Dynamic Value
                    </p>
                </div>
                <div className="col-md-4 col-sm-6 col-6">
                    <h4 className="fw-bold text-primary">
                        <Translate value="visas.item.overview.l7" />
                    </h4>
                    <p className="text-black-50">
                        Dynamic Value
                    </p>
                </div>
                <div className="col-md-4 col-sm-6 col-6">
                    <h4 className="fw-bold text-primary">
                        <Translate value="visas.item.overview.l8" />
                    </h4>
                    <p className="text-black-50">
                        Dynamic Value
                    </p>
                </div>
                <div className="col-md-4 col-sm-6 col-6">
                    <h4 className="fw-bold text-primary">
                        <Translate value="visas.item.overview.l9" />
                    </h4>
                    <p className="text-black-50">
                        Dynamic Value
                    </p>
                </div>
                <div className="col-md-4 col-sm-6 col-6">
                    <h4 className="fw-bold text-primary">
                        <Translate value="visas.item.overview.l10" />
                    </h4>
                    <p className="text-black-50">
                        Dynamic Value
                    </p>
                </div>
                <div className="col-md-4 col-sm-6 col-6">
                    <h4 className="fw-bold text-primary">
                        <Translate value="visas.item.overview.l11" />
                    </h4>
                    <p className="text-black-50">
                        Dynamic Value
                    </p>
                </div>
                <div className="col-md-4 col-sm-6 col-6">
                    <h4 className="fw-bold text-primary">
                        <Translate value="visas.item.overview.l12" />
                    </h4>
                    <p className="text-black-50">
                        Dynamic Value
                    </p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-4">
                    <Link to="/" className="link">
                        <Translate value="visas.item.overview.link1" />
                    </Link>
                </div>
                <div className="col-4">
                    <Link to="/" className="link">
                        <Translate value="visas.item.overview.link2" />
                    </Link>
                </div>
                <div className="col-4">
                    <Link to="/" className="link">
                        <Translate value="visas.item.overview.link3" />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default VisaItemOverview
