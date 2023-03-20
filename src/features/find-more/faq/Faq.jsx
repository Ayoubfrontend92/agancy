import React, { useState } from 'react'
import { Container, Form, InputGroup, Button } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Translate } from 'react-redux-i18n'
import GrayBanner from '../../../components/GrayBanner'


const getHighlightedText = (text, highlight) => {
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return <span> {parts.map((part, i) =>
        <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { fontWeight: 'bold', backgroundColor: "#FFFF00" } : {}}>
            {part}
        </span>)
    } </span>;
}

const fakeFrequentQuestions = [
    {
        id: 1,
        question: "How to create an account?",
        answer: "Visit home page, open the menu, third option take you to the create account page"
    },
    {
        id: 2,
        question: "How to create an lorem?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel, ex quas consequatur architecto molestiae aspernatur dolorem odit nobis repudiandae ad neque ea laudantium ratione, nostrum amet asperiores, explicabo quibusdam."
    },
]

const Faq = () => {

    const locale = useSelector(state => state.i18n.state)

    const [questions, setQuestions] = useState([])
    const [query, setQuery] = useState("");

    const handleFilterQuestions = (e) => {
        setQuery(e.target.value);
        setQuestions(fakeFrequentQuestions.filter(q => (q.question.indexOf(e.target.value) > 0) || (q.answer.indexOf(e.target.value) > 0)))
    }

    return (
        <div className="faq mb-5">
            <GrayBanner title="find_more.help.title" />

            <Container fluid="lg">

                <h4 className="mb-5 text-center">
                    <Translate value="find_more.help.brief" />
                </h4>

                <Form>
                    <Form.Label>
                        <Translate value="find_more.help.search_label" />
                    </Form.Label>
                    <InputGroup className="mb-5" size="lg">
                        <Form.Control
                            placeholder={locale === "en" ? "Search..." : "جستجو..."}
                            onChange={handleFilterQuestions}
                        />
                        <Button variant="" className="" style={{ border: "1px solid #ced4da", zIndex: "0" }}>
                            <FaSearch color="#505050" />
                        </Button>
                    </InputGroup>

                    <div className="text-center">
                        <button type="submit" className="btn btn-warning btn-lg">
                            <Translate value="find_more.help.search_btn" />
                        </button>
                    </div>

                </Form>

                <div className="my-4">
                    {questions.length > 0 && questions.map((item, index) => (
                        <div className="item" key={index}>
                            <h5>
                                {getHighlightedText(item.question, query)}
                            </h5>
                            <p>
                                {getHighlightedText(item.answer, query)}
                            </p>
                        </div>
                    ))}
                </div>

            </Container>

        </div>
    )
}

export default Faq
