import React, { useState } from 'react'
import { OverlayTrigger, Table, Tooltip, Button, Modal, Form, Alert, } from 'react-bootstrap'
import { FaExclamation, FaFileAlt, FaQuestionCircle } from 'react-icons/fa'
import { Translate } from 'react-redux-i18n'
import { Link, useParams, useHistory } from 'react-router-dom';


const renderTooltip = (props) => (
    <Tooltip {...props}>
        Simple tooltip
    </Tooltip>
);

const ApplyProcessStep2 = () => {

    const history = useHistory();
    const { id } = useParams();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="app-process-2">

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
                <Translate value="apply.step_2.applicants_check_list" />
            </h3>

            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut minima aliquam omnis tempore eos, nam commodi ex aut vitae quibusdam nesciunt repudiandae ullam, eum suscipit iure sunt veniam harum temporibus.
            </p>

            <ul className="list-unstyled">
                <li>
                    <b>Note: </b>
                </li>
                <li>
                    <b>Note: </b>
                </li>
                <li>
                    <b>Note: </b>
                </li>
                <li>
                    <b>Note: </b>
                </li>
            </ul>


            <div className="table-wrapper">
                <div className="d-flex align-items-center bg-primary text-white p-3 justify-content-between">
                    <h4 className="mb-0">
                        <Translate value="apply.step_2.required_docs" />
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
                                <Translate value="apply.step_2.applicant" />
                            </th>
                            <th>
                                <Translate value="apply.step_2.doc_title" />
                            </th>
                            <th>
                                <Translate value="apply.step_2.status" />
                            </th>
                            <th>
                                <Translate value="apply.step_2.how_to_provide" />
                            </th>
                            <th>
                                <Translate value="apply.step_2.actions" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><Button variant="light" onClick={handleShow}><FaFileAlt /></Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
                size="md"
            >
                <Modal.Header className="bg-primary text-white">
                    <Modal.Title><Translate value="apply.step_2.applicants_check_list" /></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="position-relative mb-3">
                        <Form.Control
                            type="file"
                            required
                            name="file"
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="primary" className="px-5"><Translate value="global.save" /></Button>
                </Modal.Footer>
            </Modal>


            <div className="d-flex align-items-center justify-content-between">
                <Button variant="primary" onClick={() => history.goBack()}>
                    <Translate value="apply.edit_infos" />
                </Button>

                <Link to={`/visas/asia-and-middle-east/${id}/visa-declaration/apply-process/step-3`} className="btn btn-primary">
                    <Translate value="apply.next_step" />
                </Link>

            </div>

        </div>

    )
}

export default ApplyProcessStep2
