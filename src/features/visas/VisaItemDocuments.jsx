import React from 'react'
import { Table } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'

const VisaItemDocuments = () => {
    return (
        <div className="visa-item-documents">

            <Table className="mb-5">

                <thead className="bg-primary text-white">
                    <tr>
                        <th>
                            <Translate value="visas.item.documents.tbh1" />
                        </th>
                        <th>
                            <Translate value="visas.item.documents.tbh2" />
                        </th>
                        <th>
                            <Translate value="visas.item.documents.tbh3" />
                        </th>
                        <th>
                            <Translate value="visas.item.documents.tbh4" />
                        </th>
                        <th>
                            <Translate value="visas.item.documents.tbh5" />
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
                    </tr>
                    <tr>
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
                    </tr>
                </tbody>

            </Table>

            <p className="mb-5 text-center">
                <Translate value="visas.item.documents.guide" />
                <Link to="/">
                    <Translate value="visas.item.documents.link" />
                </Link>
            </p>


        </div>
    )
}

export default VisaItemDocuments
