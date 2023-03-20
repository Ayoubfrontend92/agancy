import React from 'react'
import { Container } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { Link, useRouteMatch } from 'react-router-dom'

const JobTitle = () => {

    const { url } = useRouteMatch();

    return (
        <div className="job-title mb-5">

            <div className="bg-timnak py-5 mb-5">
                <Container fluid="lg">
                    <h3 className="text-white mb-0">
                        Dynamci title
                    </h3>
                </Container>
            </div>

            <Container fluid="lg">

                <div className="d-flex justify-content-end mb-5">
                    <b>
                        <Translate value="about.careers.job_title.expires" />
                        : 2021-10-24 20:30:00
                    </b>
                </div>

                <section className="py-5 border-bottom">

                    <h4 className="fw-bold mb-4">
                        <Translate value="about.careers.job_title.sec1_title" />
                    </h4>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam impedit molestiae id, quisquam cum voluptatem
                        fugiat officia ratione veritatis illo! Nulla pariatur veritatis reprehenderit id, molestias nemo tenetur? Iusto, beatae.
                    </p>

                </section>

                <section className="py-5 border-bottom">
                    <div className="row">
                        <div className="col-md-6 col-12 mb-md-0 mb-3">
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <b>
                                        <Translate value="about.careers.job_title.sect2_li_1" /> :
                                    </b>
                                    <span>
                                        Dynamic value
                                    </span>
                                </li>
                                <li className="mb-3">
                                    <b>
                                        <Translate value="about.careers.job_title.sect2_li_2" /> :
                                    </b>
                                    <span>
                                        Dynamic value
                                    </span>
                                </li>
                                <li className="mb-3">
                                    <b>
                                        <Translate value="about.careers.job_title.sect2_li_3" /> :
                                    </b>
                                    <span>
                                        Dynamic value
                                    </span>
                                </li>
                                <li className="mb-3">
                                    <b>
                                        <Translate value="about.careers.job_title.sect2_li_4" /> :
                                    </b>
                                    <span>
                                        Dynamic value
                                    </span>
                                </li>
                                <li className="mb-3">
                                    <b>
                                        <Translate value="about.careers.job_title.sect2_li_5" /> :
                                    </b>
                                    <span>
                                        Dynamic value
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-12 mb-md-0 mb-3">
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <b>
                                        <Translate value="about.careers.job_title.sect2_li_6" /> :
                                    </b>
                                    <span>
                                        Dynamic value
                                    </span>
                                </li>
                                <li className="mb-3">
                                    <b>
                                        <Translate value="about.careers.job_title.sect2_li_7" /> :
                                    </b>
                                    <span>
                                        Dynamic value
                                    </span>
                                </li>
                                <li className="mb-3">
                                    <b>
                                        <Translate value="about.careers.job_title.sect2_li_8" /> :
                                    </b>
                                    <span>
                                        Dynamic value
                                    </span>
                                </li>
                                <li className="mb-3">
                                    <b>
                                        <Translate value="about.careers.job_title.sect2_li_9" /> :
                                    </b>
                                    <span>
                                        Dynamic value
                                    </span>
                                </li>
                                <li className="mb-3">
                                    <b>
                                        <Translate value="about.careers.job_title.sect2_li_10" /> :
                                    </b>
                                    <span>
                                        Dynamic value
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>


                <section className="py-5">

                    <div className="mb-5">
                        <h4 className="mb-4 fw-bold">
                            <Translate value="about.careers.job_title.sect3_quali" />
                        </h4>
                        <ol>
                            <li>
                                Dynamic vaue
                            </li>
                        </ol>
                    </div>
                    <div className="mb-5">
                        <h4 className="mb-4 fw-bold">
                            <Translate value="about.careers.job_title.sect3_rd" />
                        </h4>
                        <ol>
                            <li>
                                Dynamic vaue
                            </li>
                        </ol>
                    </div>
                    <div className="mb-5">
                        <h4 className="mb-4 fw-bold">
                            <Translate value="about.careers.job_title.sect3_edu" />
                        </h4>
                        <ol>
                            <li>
                                Dynamic vaue
                            </li>
                        </ol>
                    </div>
                    <div className="mb-5">
                        <h4 className="mb-4 fw-bold">
                            <Translate value="about.careers.job_title.sect3_ski" />
                        </h4>
                        <ol>
                            <li>
                                Dynamic vaue
                            </li>
                        </ol>
                    </div>
                    <div className="mb-5">
                        <h4 className="mb-4 fw-bold">
                            <Translate value="about.careers.job_title.sect3_expr" />
                        </h4>
                        <ol>
                            <li>
                                Dynamic vaue
                            </li>
                        </ol>
                    </div>
                    <div className="mb-5">
                        <h4 className="mb-4 fw-bold">
                            <Translate value="about.careers.job_title.sect3_lan" />
                        </h4>
                        <ol>
                            <li>
                                Dynamic vaue
                            </li>
                        </ol>
                    </div>
                    <div className="mb-5">
                        <h4 className="mb-4 fw-bold">
                            <Translate value="about.careers.job_title.sect3_pers" />
                        </h4>
                        <ol>
                            <li>
                                Dynamic vaue
                            </li>
                        </ol>
                    </div>
                    <div className="mb-5">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum hic minima et quidem debitis fuga. Quaerat voluptatem eligendi illo porro voluptatibus unde aut corporis. Molestias totam delectus quae. Accusantium, repellat.
                        </p>
                    </div>
                    <div className="mb-5">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum hic minima et quidem debitis fuga. Quaerat voluptatem eligendi illo porro voluptatibus unde aut corporis. Molestias totam delectus quae. Accusantium, repellat.
                        </p>
                    </div>

                </section>

                <div className="row justify-content-center">
                    <div className="col-md-8 col-12">
                        <div className="d-flex justify-content-between">
                            <Link to="/about/careers/self-assesment" className="btn btn-lg btn-timnak-outline">
                                <Translate value="about.careers.job_title.btnSelfAssesment" />
                            </Link>
                            <Link to={`${url}/apply`} className="btn btn-lg btn-timnak-outline">
                                <Translate value="about.careers.job_title.btnApplyForm" />
                            </Link>
                        </div>
                    </div>
                </div>

            </Container>


        </div>
    )
}

export default JobTitle
