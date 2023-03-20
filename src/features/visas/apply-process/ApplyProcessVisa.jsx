import React from 'react'
import { Container } from 'react-bootstrap';
import { Translate } from 'react-redux-i18n';
import { Route, Switch, useParams, useRouteMatch } from 'react-router';
import ApplyProcessStep1 from './ApplyProcessStep1';
import ApplyProcessStep2 from './ApplyProcessStep2';
import ApplyProcessStep3 from './ApplyProcessStep3';
import ApplyProcessPaymentSuccess from './ApplyProcessPaymentSuccess';

const ApplyProcessVisa = () => {

    let { path } = useRouteMatch();
    let { id } = useParams();

    return (


        <div className="apply-process py-4">

            <Container>
                <h3 className="mb-5"><Translate value="apply.apply_for" /> {id} <Translate value="global.visa" /></h3>

                <Switch>
                    <Route path={`${path}/confirm-payment`}>
                        <ApplyProcessPaymentSuccess />
                    </Route>
                    <Route path={`${path}/step-3`}>
                        <ApplyProcessStep3 />
                    </Route>
                    <Route path={`${path}/step-2`}>
                        <ApplyProcessStep2 />
                    </Route>
                    <Route exact path={path}>
                        <ApplyProcessStep1 />
                    </Route>
                </Switch>
            </Container>

        </div>
    )
}

export default ApplyProcessVisa
