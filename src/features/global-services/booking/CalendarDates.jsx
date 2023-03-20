import React from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from "react-modern-calendar-datepicker";
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getSelectedDayPeriods, showStep3 } from './bookingSlice';
import CustomToast from '../../../components/CustomToast';

const CalendarDates = () => {

    const dispatch = useDispatch();
    const locale = useSelector(state => state.i18n.locale)


    let disabledDays = useSelector(state => state.consultation.vacantsEn);
    let disabledDaysFa = useSelector(state => state.consultation.vacantsFa);

    const handleCurrentDay = async (selectedDate) => {
        try {
            const date = selectedDate.year + "-" + selectedDate.month + "-" + selectedDate.day
            const response = await dispatch(getSelectedDayPeriods({ date: date, date_format: locale }));
            unwrapResult(response);
            dispatch(showStep3());
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className="pick-date-calendar mt-5">
            <Row>
                <Col md={{ span: "4", offset: "4" }}>
                    <h4><Translate value="consultant.calendar" /> <CustomToast text="help me" /></h4>
                    <Calendar
                        calendarClassName="m-auto responsive-calendar"
                        locale={locale}
                        shouldHighlightWeekends
                        disabledDays={locale === 'fa' ? disabledDaysFa : disabledDays}
                        onDisabledDayError={handleCurrentDay}
                    />
                </Col>

            </Row>
        </div>
    )
}

export default CalendarDates
