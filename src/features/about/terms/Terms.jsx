import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Translate } from 'react-redux-i18n'
import { toast } from 'react-toastify'
import TermsApi from './termsAPI'

const Terms = () => {

    const locale = useSelector(state => state.i18n.locale)

    const [terms, setTerms] = useState([])

    useEffect(() => {
        const fetchTerms = async () => {
            try {
                let res = await TermsApi.getTerms();
                res.sort(function (a, b) {
                    return a.section_seq - b.section_seq;
                });
                setTerms(res)
            } catch (error) {
                toast.error(error.message)
            }
        }

        fetchTerms()
    }, [])

    return (
        <div className="terms my-5">
            <Container fluid="lg">

                <Row className="justify-content-center">
                    <Col md={{ span: 10 }}>

                        <h1 className="mb-5"><Translate value="terms.title" /></h1>

                        <ul className="list-unstyled">
                            {terms.map((term, index) => (
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

export default Terms
