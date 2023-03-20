import React from 'react'
import { Table } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'

const VisaItemInstalments = () => {
    return (
        <div className="visa-item-instalments">
            <Table className="mb-5">

                <thead className="bg-primary text-white">
                    <tr>
                        <th>
                            <Translate value="visas.item.instalments.tbh1" />
                        </th>
                        <th>
                            <Translate value="visas.item.instalments.tbh2" />
                        </th>
                        <th>
                            <Translate value="visas.item.instalments.tbh3" />
                        </th>
                        <th>
                            <Translate value="visas.item.instalments.tbh4" />
                        </th>
                        <th>
                            <Translate value="visas.item.instalments.tbh5" />
                        </th>
                        <th>
                            <Translate value="visas.item.instalments.tbh6" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>

            </Table>

            <p className="mb-5 text-center">
                <Translate value="visas.item.instalments.guide" />
                <Link to="/">
                    <Translate value="visas.item.instalments.link" />
                </Link>
            </p>
        </div>
    )
}

export default VisaItemInstalments
