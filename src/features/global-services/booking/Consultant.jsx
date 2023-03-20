import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Translate } from 'react-redux-i18n'
import AppointmentTime from './AppointmentTime'
import CalendarDates from './CalendarDates'
import PrimaryPurpose from './PrimaryPurpose'
import ReserverInfos from './ReserverInfos'

const Consultant = () => {

    const ui = useSelector(state => state.consultation.uiValidations);

    return (
        <div className="consultant-page py-5">
            <Container>

                <h1 className="text-timnak">
                    <Translate value="consultant.title" />
                </h1>

                <p><Translate value="consultant.dear" /></p>
                <p><Translate value="consultant.guide" /></p>

                <ol>
                    <li>
                        <Translate value="consultant.guide_1"></Translate>
                    </li>
                    <li>
                        <Translate value="consultant.guide_2"></Translate>
                    </li>
                    <li>
                        <Translate value="consultant.guide_3"></Translate>
                    </li>
                    <li>
                        <Translate value="consultant.guide_4"></Translate>
                    </li>
                    <li>
                        <Translate value="consultant.guide_5"></Translate>
                    </li>
                    <li>
                        <Translate value="consultant.guide_6"></Translate>
                    </li>
                    <li>
                        <Translate value="consultant.guide_7"></Translate>
                    </li>
                    <li>
                        <Translate value="consultant.guide_8"></Translate>
                    </li>
                </ol>

                <PrimaryPurpose />

                {ui.show_step_2 && (
                    <CalendarDates />
                )}

                {ui.show_step_3 && (
                    <AppointmentTime />
                )}

                {ui.show_step_4 && (
                    <ReserverInfos />
                )}

            </Container>
        </div>
    )
}

export default Consultant
