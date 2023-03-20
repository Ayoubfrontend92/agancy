import React from 'react'
import { Container } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import ForgetFailure from './ForgetFailure'
import ForgetStep1 from './ForgetStep1'
import ForgetStep2 from './ForgetStep2'
import ForgetStep3 from './ForgetStep3'

const ForgotPassword = () => {

    const { path } = useRouteMatch();

    return (
        <div className="auth-pages">

            <div className="bg-timnak py-5">
                <Container fluid="lg">
                    <h3 className="text-white mb-0">
                        <Translate value="find_more.auth.forgotPassword.title" />
                    </h3>
                </Container>
            </div>

            <div className="py-5">
                <Container fluid="lg">
                    <Switch>
                        <Route path="/find-more/forgot-password/step-3" component={ForgetStep3} />
                        <Route path="/find-more/forgot-password/step-2" component={ForgetStep2} />
                        <Route path="/find-more/forgot-password/failure" component={ForgetFailure} />
                        <Route exact path={path} component={ForgetStep1} />
                    </Switch>
                </Container>
            </div>

        </div>

    )
}

export default ForgotPassword
