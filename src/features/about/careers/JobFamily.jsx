import React from 'react'
import { Container } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'
import Banner from '../../../components/Banner'

const JobFamily = () => {
    return (
        <div className="job-family mb-5">

            <Banner title="dynamic" />

            <Container fluid="lg">

                <h4 className="mb-4 fw-bold">
                    Dynamic Title
                </h4>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam perferendis, autem praesentium necessitatibus
                    dolorem vel fugit reiciendis sunt ipsa placeat obcaecati voluptas perspiciatis, incidunt quam expedita nisi voluptatum reprehenderit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam perferendis, autem praesentium necessitatibus
                    dolorem vel fugit reiciendis sunt ipsa placeat obcaecati voluptas perspiciatis, incidunt quam expedita nisi voluptatum reprehenderit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam perferendis, autem praesentium necessitatibus
                    dolorem vel fugit reiciendis sunt ipsa placeat obcaecati voluptas perspiciatis, incidunt quam expedita nisi voluptatum reprehenderit.
                </p>

                <div className="d-flex justify-content-center">
                    <Link to="/about/careers/self-assesment" className="btn btn-lg btn-timnak-outline">
                        <Translate value="about.careers.p1.self_assesment" />
                    </Link>
                </div>

            </Container>


        </div>
    )
}

export default JobFamily
