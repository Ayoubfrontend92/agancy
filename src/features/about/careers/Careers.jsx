import React, { useContext, useState } from 'react'
import { Accordion, AccordionContext, Col, Container, Row, useAccordionButton } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'
import Banner from '../../../components/Banner'
import HoverableCard from '../../../components/HoverableCard'

const fakeData = [

    {
        hrf: "/about/careers/job-family/1",
        img: 'https://picsum.photos/150/100',
        title: "dynamic title"
    },
    {
        hrf: "/about/careers/job-family/1",
        img: 'https://picsum.photos/150/100',
        title: "dynamic title"
    },
    {
        hrf: "/about/careers/job-family/1",
        img: 'https://picsum.photos/150/100',
        title: "dynamic title"
    },
    {
        hrf: "/about/careers/job-family/1",
        img: 'https://picsum.photos/150/100',
        title: "dynamic title"
    },
    {
        hrf: "/about/careers/job-family/1",
        img: 'https://picsum.photos/150/100',
        title: "dynamic title"
    },
    {
        hrf: "/about/careers/job-family/1",
        img: 'https://picsum.photos/150/100',
        title: "dynamic title"
    },
]

const accordionData = [
    {
        id: 1,
        title: "Accordion title ",
        descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati, a, fugiat suscipit minima qui quod maxime repellendus enim ducimus vero sit sint nulla minus nesciunt. Necessitatibus nisi natus fugit!"
    },
    {
        id: 2,
        title: "Accordion title ",
        descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati, a, fugiat suscipit minima qui quod maxime repellendus enim ducimus vero sit sint nulla minus nesciunt. Necessitatibus nisi natus fugit!"
    },
    {
        id: 3,
        title: "Accordion title ",
        descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati, a, fugiat suscipit minima qui quod maxime repellendus enim ducimus vero sit sint nulla minus nesciunt. Necessitatibus nisi natus fugit!"
    },
]

const Careers = () => {

    const [activeAccordion, setActiveAccordion] = useState(0)

    const ContextAwareToggle = ({ children, eventKey, callback }) => {


        const { activeEventKey } = useContext(AccordionContext);

        setActiveAccordion(activeEventKey);

        const decoratedOnClick = useAccordionButton(
            eventKey,
            () => callback && callback(eventKey),
        );

        // const isCurrentEventKey = activeEventKey === eventKey;

        return (
            <div
                className="indexer"
                onClick={decoratedOnClick}
            >
                {children}
            </div>
        );
    }


    return (
        <div className="careers pb-5">
            <Banner title="about.careers.p1.title" />

            <Container fluid="lg">

                <section>
                    <h2 className="text-black-50 mb-5">
                        <Translate value="about.careers.p1.title" />
                    </h2>

                    <h4 className="text-timnak mb-4">
                        <Translate value="about.careers.p1.job_opening" />
                    </h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est distinctio alias iusto ea. Similique, provident. Alias, maxime asperiores dolorum debitis nemo voluptatum. Omnis maiores voluptates veritatis magni culpa dolores quia.
                    </p>

                    <div className="d-flex justify-content-end">
                        <Link to="/about/careers/search-job-openings" className="btn btn-timnak-outline">
                            <Translate value="about.careers.p1.search_job_opening" />
                        </Link>
                    </div>
                </section>

                <hr />

                <section className="py-4">
                    <p className="text-center mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores adipisci incidunt delectus eius illum ratione corporis odio aspernatur, at exercitationem, consectetur aperiam sequi ut repudiandae ab, cum hic laudantium.
                    </p>
                    <div className="d-flex justify-content-center">
                        <Link to="/about/careers/self-assesment" className="btn btn-timnak-outline btn-lg">
                            <Translate value="about.careers.p1.self_assesment" />
                        </Link>
                    </div>
                </section>

                <hr />

                <section className="py-4">

                    <h4 className="fw-bold mb-4 text-center text-timnak">
                        <Translate value="about.careers.p1.job_families" />
                    </h4>

                    <p className="text-center">
                        This is a place where your skills, experience and imagination come together across
                        170+ locations around the world. There are boundless possibilities for you to grow
                        and make your mark.
                    </p>

                    <Row className="g-5">

                        {fakeData.map((service, index) => (
                            <Col lg="4" sm="6" key={index}>
                                <HoverableCard data={service} />
                            </Col>
                        ))}

                    </Row>

                </section>

                <hr />

                <section className="py-4">


                    <h4 className="text-center mb-4">
                        <Translate value="about.careers.p1.learn_about_timnak" />
                    </h4>



                    <Accordion defaultActiveKey="0">

                        {accordionData.map((item, index) => (
                            <div className={"accordionItem " + (activeAccordion === index ? "active" : "")}>
                                <div className="ai_title d-flex align-items-center">
                                    <ContextAwareToggle eventKey={index}>{index + 1}</ContextAwareToggle>
                                    <p className="fw-bold mb-0">
                                        {item.title}
                                    </p>
                                </div>
                                <div className="ai_descs">
                                    <Accordion.Collapse eventKey={index}>
                                        <p className="mb-0">
                                            {item.descriptions}
                                        </p>
                                    </Accordion.Collapse>
                                </div>
                            </div>
                        ))}

                    </Accordion>


                </section>

            </Container>
        </div>
    )
}

export default Careers
