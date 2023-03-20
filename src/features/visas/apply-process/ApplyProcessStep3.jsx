import React from 'react'
import { OverlayTrigger, Tooltip, Button, Table, Alert } from 'react-bootstrap';
import { FaExclamation, FaQuestionCircle } from 'react-icons/fa';
import { Translate } from 'react-redux-i18n'
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';


const renderTooltip = (props) => (
    <Tooltip {...props}>
        Simple tooltip
    </Tooltip>
);

const ApplyProcessStep3 = () => {

    const history = useHistory();
    const { id } = useParams();

    return (
        <div className="app-process-3">

            <Alert variant="warning" className="mb-5">
                <Alert.Heading>
                    <FaExclamation size="40px" />
                    Oh snap! You got an error!
                </Alert.Heading>
                <p>
                    Change this and that and try again. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    Cras mattis consectetur purus sit amet fermentum.
                </p>
            </Alert>

            <h3 className="mb-4">
                <Translate value="apply.step_3.submission" />
            </h3>

            <div className="table-wrapper">
                <div className="d-flex align-items-center bg-primary text-white p-3 justify-content-between">
                    <h4 className="mb-0">
                        <Translate value="apply.step_3.submission" />
                        <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Button variant="">
                                <FaQuestionCircle size="22px" color="#FFF" />
                            </Button>
                        </OverlayTrigger>
                    </h4>
                </div>
                <Table>
                    <thead className="bg-light">
                        <tr>
                            <th>
                                <Translate value="apply.step_3.title" />
                            </th>
                            <th>
                                <Translate value="apply.step_3.unit_price" />
                            </th>
                            <th>
                                <Translate value="apply.step_3.exchange_rate" />
                            </th>
                            <th>
                                <Translate value="apply.step_3.installment_amount" />
                            </th>
                            <th>
                                <Translate value="apply.step_3.refundable_status" />
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
                    </tbody>
                </Table>
            </div>


            <div className="d-flex align-items-center justify-content-between">
                <Button variant="primary" onClick={() => history.goBack()}>
                    <Translate value="apply.edit_infos" />
                </Button>

                <Link to={`/visas/asia-and-middle-east/${id}/visa-declaration/apply-process/confirm-payment`} className="btn btn-primary">
                    <Translate value="apply.next_step" />
                </Link>
            </div>

        </div>
    )
}

export default ApplyProcessStep3
