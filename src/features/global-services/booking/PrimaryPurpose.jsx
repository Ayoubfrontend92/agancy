import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Col, Form, Row, Button } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getCounsultationCats, getCounsultationModes, getVacants, hideStepsThreeAndFour, showStep2 } from './bookingSlice';

import CustomToast from '../../../components/CustomToast'


const schema = yup.object().shape({
    consultation_category: yup.number().required().typeError(<Translate value="consultant.primaryPurpose.select_1_validation" />),
    consultation_mode: yup.number().required().typeError(<Translate value="consultant.primaryPurpose.select_1_validation" />),
});

const PrimaryPurpose = () => {

    const dispatch = useDispatch();
    const locale = useSelector(state => state.i18n.locale);

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema)
    });

    const [categories, setCategories] = useState([]);
    const [modes, setModes] = useState([]);

    useEffect(() => {
        if (formState.errors.consultation_category || formState.errors.consultation_mode) {
            dispatch(hideStepsThreeAndFour())
        }
    }, [formState, dispatch]);

    useEffect(() => {

        const fetchConsultCatss = async () => {
            try {
                const response = await dispatch(getCounsultationCats());
                unwrapResult(response)
                setCategories(response.payload)
            } catch (error) {
                toast.error(error.message)
            }
        }

        const fetchConsultModes = async () => {
            try {
                const response = await dispatch(getCounsultationModes());
                unwrapResult(response)
                setModes(response.payload)
            } catch (error) {
                toast.error(error.message)
            }
        }

        fetchConsultCatss();
        fetchConsultModes();

    }, [dispatch])

    const onSubmit = async (data) => {
        try {
            const response = await dispatch(getVacants(data))
            unwrapResult(response)

            if ((locale === 'en' && response.payload.consultation_date_en.length <= 0) || (locale === 'en' && response.payload.consultation_date_en.length <= 0)) {
                dispatch(hideStepsThreeAndFour())
                toast.warning('Nothing to provide');
            } else
                dispatch(showStep2());

        } catch (error) {
            toast.error(error)
        }

    };

    return (
        <div className="PrimaryPurpose mt-5">
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Row>

                    <Col md={{ span: "4", offset: "4" }}>
                        <Form.Group className="mb-3">
                            <Form.Label><Translate value="consultant.primaryPurpose.select_1" /> <CustomToast text="help me" /></Form.Label>
                            <Form.Select name="consultation_category" defaultValue={locale === "en" ? "Choose..." : "انتخاب کنید..."} isInvalid={!!formState.errors.consultation_category} {...register("consultation_category")}>
                                <option>{locale === "en" ? "Choose..." : "انتخاب کنید..."}</option>
                                {categories.map((c, i) => (
                                    <option value={c.id} key={c.id}>
                                        {locale === 'fa' ? c.title_farsi : c.title_latin}
                                    </option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {formState.errors.consultation_category?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                </Row>

                <Row>

                    <Col md={{ span: "4", offset: "4" }}>
                        <Form.Group className="mb-3">
                            <Form.Label><Translate value="consultant.primaryPurpose.select_2" /></Form.Label>
                            <Form.Select name="consultation_mode" defaultValue={locale === "en" ? "Choose..." : "انتخاب کنید..."} isInvalid={!!formState.errors.consultation_mode} {...register("consultation_mode")}>
                                <option>{locale === "en" ? "Choose..." : "انتخاب کنید..."}</option>
                                {modes.map((c, i) => (
                                    <option value={c.id} key={c.id}>
                                        {locale === 'fa' ? c.title_farsi : c.title_latin}
                                    </option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {formState.errors.consultation_mode?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                </Row>

                <Row>

                    <Col md={{ span: "4", offset: "4" }}>
                        <Button type="submit" variant="" className="btn-outline-secondary w-100">
                            <Translate value="consultant.primaryPurpose.button" />
                        </Button>
                    </Col>
                </Row>

            </Form>
        </div>
    )
}

export default PrimaryPurpose
