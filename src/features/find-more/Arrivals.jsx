import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Translate } from 'react-redux-i18n'
import { MdNotificationsActive } from 'react-icons/md'
import Banner from '../../images/banner-sample.jpg'
import { Link, useRouteMatch } from 'react-router-dom'
import CustomToast from '../../components/CustomToast'

const Arrivals = () => {

    const locale = useSelector(state => state.i18n.locale)
    const { url } = useRouteMatch()

    const id = 1;

    return (
        <div className="arrivals">

            <div className="banner position-relative mb-5">
                <img src={Banner} alt="banner" width="100%" height="600" />
                <div className="info position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
                    <h3 className="mb-0">
                        <Translate value="find_more.arrivals.title" />
                    </h3>
                </div>
            </div>

            <Container fluid="lg">

                <div className="row mb-5 justify-content-center">
                    <div className="col-6">
                        <div>
                            <label htmlFor="" className="text-primary h2">
                                <Translate value="find_more.arrivals.selectLabel" />
                            </label>
                            <select name="" id="" className="form-select form-control-lg">
                                <option value="">
                                    {locale === "en" ? "" : ""}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <CustomToast text="help me" />
                <table className="table">
                    <thead className="bg-timnak text-white">
                        <tr>
                            <th>
                                <Translate value="find_more.arrivals.th_1" />
                            </th>
                            <th>
                                <Translate value="find_more.arrivals.th_2" />
                            </th>
                            <th>
                                <Translate value="find_more.arrivals.th_3" />
                            </th>
                            <th>
                                <Translate value="find_more.arrivals.th_4" />
                            </th>
                            <th>
                                <Translate value="find_more.arrivals.th_5" />
                            </th>
                            <th>
                                <Translate value="find_more.arrivals.th_6" />
                            </th>
                            <th>
                                <Translate value="find_more.arrivals.th_7" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mahan</td>
                            <td>Tehran</td>
                            <td>w221</td>
                            <td>
                                <span className="badge bg-primary">
                                    20:15
                                </span>
                            </td>
                            <td>
                                <span className="badge border rounded text-dark">
                                    20:15
                                </span>
                            </td>
                            <td>
                                <div className="text-success">
                                    <Translate value="find_more.arrivals.status_arrived" />
                                </div>
                            </td>
                            <td>
                                <Link to={`${url}/${id}`} className="btn btn-sm bg-timnak text-white">
                                    <MdNotificationsActive size="25px" className="mx-2" />
                                    <Translate value="find_more.arrivals.notify_me" />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Mahan</td>
                            <td>Tehran</td>
                            <td>w221</td>
                            <td>
                                <span className="badge bg-warning">
                                    20:15
                                </span>
                            </td>
                            <td>
                                <span className="badge border rounded text-dark">
                                    20:15
                                </span>
                            </td>
                            <td>
                                <div className="text-primary">
                                    <Translate value="find_more.arrivals.status_arrived" />
                                </div>
                            </td>
                            <td>
                                <Link to={`${url}/${id}`} className="btn btn-sm">
                                    <MdNotificationsActive size="25px" className="mx-2" />
                                    <Translate value="find_more.arrivals.notify_me" />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Mahan</td>
                            <td>Tehran</td>
                            <td>w221</td>
                            <td>
                                <span className="badge bg-warning">
                                    20:15
                                </span>
                            </td>
                            <td>
                                <span className="badge border rounded text-dark">
                                    20:15
                                </span>
                            </td>
                            <td>
                                <div className="text-primary">
                                    <Translate value="find_more.arrivals.status_delayed" />
                                </div>
                            </td>
                            <td>
                                <Link to={`${url}/${id}`} className="btn btn-sm">
                                    <MdNotificationsActive size="25px" className="mx-2" />
                                    <Translate value="find_more.arrivals.notify_me" />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Mahan</td>
                            <td>Tehran</td>
                            <td>w221</td>
                            <td>
                                <span className="badge bg-warning">
                                    20:15
                                </span>
                            </td>
                            <td>
                                <span className="badge border rounded text-dark">
                                    20:15
                                </span>
                            </td>
                            <td>
                                <div className="text-primary">
                                    <Translate value="find_more.arrivals.status_on_time" />
                                </div>
                            </td>
                            <td>
                                <Link to={`${url}/${id}`} className="btn btn-sm">
                                    <MdNotificationsActive size="25px" className="mx-2" />
                                    <Translate value="find_more.arrivals.notify_me" />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Mahan</td>
                            <td>Tehran</td>
                            <td>w221</td>
                            <td>
                                <span className="badge bg-secondary">
                                    20:15
                                </span>
                            </td>
                            <td>
                                <span className="badge border rounded text-dark">
                                    20:15
                                </span>
                            </td>
                            <td>
                                <div className="text-danger">
                                    <Translate value="find_more.arrivals.status_canceled" />
                                </div>
                            </td>
                            <td>
                                <Link to={`${url}/${id}`} className="btn btn-sm">
                                    <MdNotificationsActive size="25px" className="mx-2" />
                                    <Translate value="find_more.arrivals.notify_me" />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Mahan</td>
                            <td>Tehran</td>
                            <td>w221</td>
                            <td>
                                <span className="badge bg-warning">
                                    20:15
                                </span>
                            </td>
                            <td>
                                <span className="badge border rounded text-dark">
                                    20:15
                                </span>
                            </td>
                            <td>
                                <div className="text-warning">
                                    <Translate value="find_more.arrivals.status_early" />
                                </div>
                            </td>
                            <td>
                                <Link to={`${url}/${id}`} className="btn btn-sm">
                                    <MdNotificationsActive size="25px" className="mx-2" />
                                    <Translate value="find_more.arrivals.notify_me" />
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </Container>

        </div>
    )
}

export default Arrivals
