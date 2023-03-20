import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, Button } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { toast } from 'react-toastify'
import CustomToast from '../../components/CustomToast'

const ApplyNowSchoolProgram = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        toast.success("Thank you for submission. One of our representatives will contact you shortly. ")
    }

    return (
        <div className="program-form py-5">
            <div className="container">

                <h4 className="mb-4 text-timnak">
                    <Translate value="visas.applyNow.pageForm.title" /> <CustomToast text="help me" />
                </h4>

                <div className="row justify-content-center">
                    <div className="col-md-8 shadow-sm py-4">
                        <Form onSubmit={handleSubmit(onSubmit)}>

                            <h4><Translate value="visas.applyNow.pageForm.title_1" /></h4>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" name="name" disabled />
                            </Form.Group>

                            <h4 className="mt-5"><Translate value="visas.applyNow.pageForm.title_2" /></h4>
                            <Form.Group className="mb-3">
                                <Form.Label><Translate value="visas.applyNow.pageForm.q_1" /></Form.Label>
                                <Form.Control type="text" name="name1" {...register("name1")} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label><Translate value="visas.applyNow.pageForm.q_2" /></Form.Label>
                                <Form.Select name="name2" {...register("name2")}>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </Form.Select>
                            </Form.Group>

                            <h4 className="mt-5"><Translate value="visas.applyNow.pageForm.title_3" /></h4>
                            <Form.Group className="mb-3">
                                <Form.Label><Translate value="visas.applyNow.pageForm.q_3" /></Form.Label>
                                <Form.Select name="name3" {...register("name3")}>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label><Translate value="visas.applyNow.pageForm.q_4" /></Form.Label>
                                <Form.Select name="name4" {...register("name4")}>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label><Translate value="visas.applyNow.pageForm.q_5" /></Form.Label>
                                <Form.Select name="name5" {...register("name5")}>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </Form.Select>
                            </Form.Group>

                            <h4 className="mt-5"><Translate value="visas.applyNow.pageForm.title_4" /></h4>
                            <Form.Group className="mb-3">
                                <Form.Label><Translate value="visas.applyNow.pageForm.q_6" /></Form.Label>
                                <Form.Select name="name6" {...register("name6")}>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </Form.Select>
                            </Form.Group>

                            <h4 className="mt-5"><Translate value="visas.applyNow.pageForm.title_5" /></h4>
                            <Form.Group className="mb-3">
                                <Form.Label><Translate value="visas.applyNow.pageForm.q_7" /></Form.Label>
                                <Form.Control type="text" name="name7" {...register("name7")} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label><Translate value="visas.applyNow.pageForm.q_8" /></Form.Label>
                                <Form.Control type="text" name="name8" {...register("name8")} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label><Translate value="visas.applyNow.pageForm.q_9" /></Form.Label>
                                <Form.Control type="text" name="name9" {...register("name9")} />
                            </Form.Group>

                            <div className="d-flex justify-content-end">
                                <Button type="submit" variant="primary">Submit</Button>
                            </div>

                        </Form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ApplyNowSchoolProgram
