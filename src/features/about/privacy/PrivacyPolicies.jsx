import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Translate } from 'react-redux-i18n'
import { toast } from 'react-toastify'
import PrivacyApi from './privacyAPI'

const PrivacyPolicies = () => {

    const locale = useSelector(state => state.i18n.locale)

    const [privacies, setPrivacies] = useState([])

    useEffect(() => {
        const fetchPrivacies = async () => {
            try {
                let res = await PrivacyApi.getPrivacies();
                res.sort(function (a, b) {
                    return a.section_seq - b.section_seq;
                });
                setPrivacies(res)
            } catch (error) {
                toast.error(error)
            }
        }

        fetchPrivacies()
    }, [])


    return (
        <div className="privacy my-5">
            <Container fluid="lg">

                <Row className="justify-content-center">
                    <Col md={{ span: 10 }}>

                        <h1 className="mb-5"><Translate value="privacies.title" /></h1>

                        <ul className="list-unstyled">
                            {privacies.map((term, index) => (
                                <li key={index} className="mb-4 h3">
                                    {locale === 'en' ? term.title_latin : term.title_farsi}
                                    {term.clause_section && term.clause_section.length > 0 && (
                                        <ol className="mt-3">
                                            {term.clause_section.map((clause, index) => (
                                                <li key={index} className="h6">
                                                    {locale === 'en' ? clause.clause_latin : clause.clause_farsi}
                                                </li>
                                            ))}
                                        </ol>
                                    )}
                                </li>
                            ))}
                        </ul>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PrivacyPolicies
