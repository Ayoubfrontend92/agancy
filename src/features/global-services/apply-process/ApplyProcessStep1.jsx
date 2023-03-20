import React, { useState } from 'react'
import { OverlayTrigger, Tooltip, Button, Table, Modal, Form, Alert } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { FaExclamation, FaPencilAlt, FaPlus, FaQuestionCircle } from 'react-icons/fa'
import { useHistory, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';


const renderTooltip = (props) => (
    <Tooltip {...props}>
        Simple tooltip
    </Tooltip>
);

const ApplyProcessStep1 = () => {

    const history = useHistory();
    const { url } = useRouteMatch();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div className="app-process-1">

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
                <Translate value="apply.applicants" />
            </h3>

            <div className="table-wrapper">
                <div className="d-flex align-items-center bg-primary text-white p-3 justify-content-between">
                    <h4 className="mb-0">
                        <Translate value="apply.applicants_identity" />
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
                    <Button variant="" className="text-white p-0" onClick={handleShow}>
                        <FaPlus />
                        {" "}
                        <Translate value="global.click_to_add" />
                    </Button>
                </div>
                <Table>
                    <thead className="bg-light">
                        <tr>
                            <th>
                                <Translate value="global.No" />
                            </th>
                            <th>
                                <Translate value="global.first_name" />
                            </th>
                            <th>
                                <Translate value="global.last_name" />
                            </th>
                            <th>
                                <Translate value="global.date_of_birth" />
                            </th>
                            <th>
                                <Translate value="global.national_code" />
                            </th>
                            <th>
                                <Translate value="global.postal_code" />
                            </th>
                            <th>
                                <Translate value="global.city" />
                            </th>
                            <th>
                                <Translate value="global.mobile_number" />
                            </th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><Button variant=""><FaPencilAlt /></Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div className="d-flex align-items-center justify-content-between">
                <Button variant="primary" onClick={() => history.goBack()}>
                    <Translate value="apply.back_to_declaration" />
                </Button>

                <Link to={`${url}/step-2`} className="btn btn-primary">
                    <Translate value="apply.next_step" />
                </Link>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
                size="md"
            >
                <Modal.Header className="bg-primary text-white">
                    <Modal.Title><Translate value="apply.applicants_identity" /></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="first_name" tag="" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="last_name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="date_of_birth" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="national_code" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="Postal code same as first applicant? Mark if Yes" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="postal_code" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="Residence city same as first applicant? Mark if Yes " />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Select>
                            <option>city</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="mobile_number" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="primary" className="px-5"><Translate value="global.save" /></Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default ApplyProcessStep1
