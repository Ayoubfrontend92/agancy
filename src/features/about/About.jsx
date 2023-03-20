import React from 'react'
import { Container } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import Banner from '../../images/banner-sample.jpg'

const About = () => {
    return (
        <div className="about-us">

            <div className="banner position-relative mb-5">
                <img src={Banner} alt="banner" width="100%" height="600" />
                <div className="info position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
                    <Container>
                        <h3 className="mb-0">
                            <Translate value="aboutUs.title" />
                        </h3>
                    </Container>
                </div>
            </div>


            <Container fluid="lg">

                <section className="mb-5">
                    <h1 className="mb-5">
                        <Translate value="aboutUs.sec1_title" />
                    </h1>

                    <p>
                        <Translate value="aboutUs.sec1_des" />
                    </p>
                </section>

                <section className="mb-5">
                    <h1 className="mb-5">
                        <Translate value="aboutUs.sec2_title" />
                    </h1>

                    <p>
                        <Translate value="aboutUs.sec2_des" />
                    </p>
                </section>

                <section className="mb-5">
                    <h1 className="mb-5">
                        <Translate value="aboutUs.sec3_title" />
                    </h1>

                    <p>
                        <Translate value="aboutUs.sec3_des" />
                    </p>
                </section>




            </Container>

        </div>
    )
}

export default About
