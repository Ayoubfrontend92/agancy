import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Translate } from 'react-redux-i18n';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import ContactUsApi from './contactUsAPI'

const schema = yup.object().shape({
    name: yup.string().required(<Translate value="contactUs.q1_required" />),
    tel: yup.number(<Translate value="contactUs.q2_required" />).required(<Translate value="contactUs.q2_required" />).typeError(<Translate value="contactUs.q2_required" />),
    email: yup.string().email(<Translate value="contactUs.q3_email" />).required(<Translate value="contactUs.q3_required" />),
    category: yup.number().required().typeError(<Translate value="contactUs.q4_required" />),
    note: yup.string().required().typeError(<Translate value="contactUs.q5_required" />),
});

const ContactUs = () => {

    const dispatch = useDispatch();
    const locale = useSelector((state) => state.i18n.locale)

    const [categories, setCategories] = useState([])

    useEffect(() => {

        const fetchMainCats = async () => {
            try {
                const response = await ContactUsApi.getCategories();
                setCategories(response[0].data)
            } catch (error) {
                toast.error(error.message)
            }
        }

        fetchMainCats();

    }, [dispatch])

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {

        data.category = categories[data.category].value;
        try {
            await ContactUsApi.sendContactUs(data);
            toast.success(<Translate value="contactUs.submitResponse" />)
        } catch (error) {
            toast.error(error.message)
        }

    }

    return (
        <div className="contact-us my-5">

            <Container>

                <Row>

                    <Col>

                        <h3><Translate value="contactUs.title" /></h3>
                        <p><Translate value="contactUs.description" /></p>

                        <Form onSubmit={handleSubmit(onSubmit)} className="shadow-sm p-3">

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="4">
                                    <Translate value="contactUs.q1" />
                                </Form.Label>
                                <Col md="8">
                                    <Form.Control type="text" name="name" isInvalid={!!errors.name} {...register("name")} />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name?.message}
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="4">
                                    <Translate value="contactUs.q2" />
                                </Form.Label>
                                <Col md="8">
                                    <Form.Control type="text" name="tel" isInvalid={!!errors.tel} {...register("tel")} />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.tel?.message}
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="4">
                                    <Translate value="contactUs.q3" />
                                </Form.Label>
                                <Col md="8">
                                    <Form.Control type="text" name="email" isInvalid={!!errors.email} {...register("email")} />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email?.message}
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="4">
                                    <Translate value="contactUs.q4" />
                                </Form.Label>
                                <Col md="8">
                                    <Form.Select name="category" isInvalid={!!errors.category} {...register("category")}>
                                        <option>{locale === "en" ? "Choose..." : "انتخاب کنید..."}</option>
                                        {categories.map((c, i) => (
                                            <option value={i} key={i}>
                                                {c.display_name}
                                            </option>
                                        ))}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.category?.message}
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="4">
                                    <Translate value="contactUs.q5" />
                                </Form.Label>
                                <Col md="8">
                                    <Form.Control as="textarea" rows="6" name="note" isInvalid={!!errors.note} {...register("note")} />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.note?.message}
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            <div className="d-flex justify-content-end">
                                <Button type="submit" variant="warning" size="lg" disabled={!isValid}><Translate value="contactUs.btn" /></Button>
                            </div>


                        </Form>

                    </Col>

                </Row>



            </Container>


        </div>
    )
}

export default ContactUs
