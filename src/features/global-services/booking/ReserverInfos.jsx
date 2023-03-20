import React, { useEffect, useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { bookConsultation, getAges, getDegress, getProfessions, getWorkExperinces } from './bookingSlice';
import CustomToast from '../../../components/CustomToast';

const schema = yup.object().shape({
    application_full_name: yup.string().min(3, <Translate value="consultant.reserver.q1_validation_min" />).max(150, <Translate value="consultant.reserver.q1_validation_max" />).required(<Translate value="consultant.reserver.q1_validation_required" />),
    application_cell_number: yup.number(<Translate value="consultant.reserver.q2_validation_required" />).required(<Translate value="consultant.reserver.q2_validation_required" />).typeError(<Translate value="consultant.reserver.q2_validation_required" />),
    age_range: yup.number().required().typeError(<Translate value="consultant.reserver.q3_validation" />),
    degree: yup.number().required().typeError(<Translate value="consultant.reserver.q4_validation" />),
    min_employment_year: yup.number().required().typeError(<Translate value="consultant.reserver.q5_validation" />),
    occupation: yup.number().required().typeError(<Translate value="consultant.reserver.q6_validation" />),
    visit_id: yup.string().optional(),
});


const ReserverInfos = () => {

    const dispatch = useDispatch();

    const locale = useSelector(state => state.i18n.locale)
    const fee = useSelector(state => state.consultation.toPayFee)
    const rangeValue = useSelector(state => state.consultation.bookingInfos.consultation_capacity)

    const [ages, setAges] = useState([]);
    const [degrees, setDegrees] = useState([])
    const [experiences, setExperiences] = useState([])
    const [professions, setProfessions] = useState([]);

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    });

    useEffect(() => {

        const fetchAge = async () => {
            try {
                const response = await dispatch(getAges());
                unwrapResult(response);
                setAges(response.payload);
            } catch (error) {
                toast.error(error);
            }
        }

        const fetchDegrees = async () => {
            try {
                const response = await dispatch(getDegress());
                unwrapResult(response);
                setDegrees(response.payload);
            } catch (error) {
                toast.error(error);
            }
        }

        const fetchExperiences = async () => {
            try {
                const response = await dispatch(getWorkExperinces());
                unwrapResult(response);
                setExperiences(response.payload);
            } catch (error) {
                toast.error(error);
            }
        }

        const fetchProfessions = async () => {
            try {
                const response = await dispatch(getProfessions());
                unwrapResult(response);
                setProfessions(response.payload);
            } catch (error) {
                toast.error(error);
            }
        }

        fetchAge();
        fetchDegrees();
        fetchExperiences();
        fetchProfessions();

    }, [dispatch])

    const onSubmit = async (data) => {
        data.consultation_capacity = rangeValue;
        try {
            const response = await dispatch(bookConsultation(data))
            unwrapResult(response);
            //Redirect to bank 

            toast.success('Payment success', {
                onClose: () => {
                    window.location = '/#/global-services/consultations/confirm-appointment'
                }
            })

        } catch (error) {
            toast.error(error)
        }
    };

    return (
        <div className="reserver-infos mt-5">

            <Row>
                <Col md={{ span: "4", offset: "4" }}>

                    <Form onSubmit={handleSubmit(onSubmit)}>

                        <CustomToast text="help me" />

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="4">
                                <Translate value="consultant.reserver.q1" />
                            </Form.Label>
                            <Col md="8">
                                <Form.Control type="text" name="application_full_name" isInvalid={!!errors.application_full_name} {...register("application_full_name")} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.application_full_name?.message}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="4">
                                <Translate value="consultant.reserver.q2" />
                            </Form.Label>
                            <Col md="8">
                                <Form.Control type="text" name="application_cell_number" isInvalid={!!errors.application_cell_number} {...register("application_cell_number")} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.application_cell_number?.message}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="4">
                                <Translate value="consultant.reserver.q3" />
                            </Form.Label>
                            <Col md="8">
                                <Form.Select name="age_range" isInvalid={!!errors.age_range} {...register("age_range")}>
                                    <option>{locale === "en" ? "Choose..." : "انتخاب کنید..."}</option>
                                    {ages.map((c, i) => (
                                        <option value={c.id} key={c.id}>
                                            {locale === 'fa' ? c.range_farsi : c.range_latin}
                                        </option>
                                    ))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.age_range?.message}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="4">
                                <Translate value="consultant.reserver.q4" />
                            </Form.Label>
                            <Col md="8">
                                <Form.Select name="degree" isInvalid={!!errors.degree} {...register("degree")}>
                                    <option>{locale === "en" ? "Choose..." : "انتخاب کنید..."}</option>
                                    {degrees.map((c, i) => (
                                        <option value={c.id} key={c.id}>
                                            {locale === 'fa' ? c.title_farsi : c.title_latin}
                                        </option>
                                    ))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.degree?.message}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="4">
                                <Translate value="consultant.reserver.q5" />
                            </Form.Label>
                            <Col md="8">
                                <Form.Select name="min_employment_year" isInvalid={!!errors.min_employment_year}  {...register("min_employment_year")}>
                                    <option>{locale === "en" ? "Choose..." : "انتخاب کنید..."}</option>
                                    {experiences.map((c, i) => (
                                        <option value={c.id} key={c.id}>
                                            {locale === 'fa' ? c.title_farsi : c.title_latin}
                                        </option>
                                    ))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.min_employment_year?.message}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="4">
                                <Translate value="consultant.reserver.q6" />
                            </Form.Label>
                            <Col md="8">
                                <Form.Select name="occupation" isInvalid={!!errors.occupation} {...register("occupation")}>
                                    <option>{locale === "en" ? "Choose..." : "انتخاب کنید..."}</option>
                                    {professions.map((c, i) => (
                                        <option value={c.id} key={c.id}>
                                            {locale === 'fa' ? c.title_farsi : c.title_latin}
                                        </option>
                                    ))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.occupation?.message}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="4">
                                <Translate value="consultant.reserver.q7" />
                            </Form.Label>
                            <Col md="8">
                                <Form.Control type="text" name="visit_id" isInvalid={!!errors.visit_id} {...register("visit_id")} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.visit_id?.message}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>


                        <div className="my-5">
                            <h4>
                                <Translate value="consultant.reserver.priceToPayLabel" />
                                <b className="mx-3">{fee}</b> <Translate value="global.rial" />
                                <CustomToast text="help me" />
                            </h4>
                        </div>

                        <Button type="submit" className="w-100" disabled={!isValid}>Confirm and Pay</Button>

                    </Form>

                </Col>

            </Row>

        </div>
    )
}

export default ReserverInfos
