import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Row, Col, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import { hideStep4, setPeriod, showStep4 } from './bookingSlice';
import CustomToast from '../../../components/CustomToast';


const schema = yup.object().shape({
    consultation_capacity: yup.number().required().typeError(<Translate value="consultant.primaryPurpose.select_1_validation" />),
});

const AppointmentTime = () => {

    const dispatch = useDispatch();
    const locale = useSelector(state => state.i18n.locale);
    const ranges = useSelector(state => state.consultation.vacantPeriods);

    const { register, handleSubmit, formState } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        if (formState.errors.consultation_capacity) {
            dispatch(hideStep4())
        }
    }, [formState, dispatch]);


    const onSubmit = async (data) => {
        dispatch(setPeriod(data.consultation_capacity))
        dispatch(showStep4());
    };


    return (
        <div className="appointment-time mt-5">
            <Row>

                <Col md={{ span: "4", offset: "4" }}>
                    <Form onChange={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <Form.Label><Translate value="consultant.appointmentTime" /> <CustomToast text="help me" /></Form.Label>
                            <Form.Select name="consultation_capacity" defaultValue={locale === "en" ? "Choose..." : "انتخاب کنید..."} isInvalid={!!formState.errors.consultation_capacity} onChange={handleSubmit(onSubmit)} {...register("consultation_capacity")}>
                                <option>{locale === "en" ? "Choose..." : "انتخاب کنید..."}</option>
                                {ranges.map((c, i) => (
                                    <option value={c.id} key={c.id}>
                                        {c.consultation_time_from + "-" + c.consultation_time_to}
                                    </option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {formState.errors.consultation_capacity?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form>

                </Col>

            </Row>
        </div>
    )
}

export default AppointmentTime
