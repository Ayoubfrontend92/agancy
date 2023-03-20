import React from 'react'
import { Container } from 'react-bootstrap';
import { Translate } from 'react-redux-i18n';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import Banner from '../../../components/Banner';

const PassengerRightItem = () => {

    const { id } = useParams();

    return (
        <div className="passenger-right-item mb-5">
            <Banner title={id} />

            <Container fluid="lg">

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fuga alias et necessitatibus! Distinctio libero quod, voluptates natus beatae reprehenderit dolore veniam hic repellat perspiciatis voluptatibus enim deleniti aliquid dolor?
                </p>

                <div className="text-center">
                    <Link to="/about/passenger-rights/claim" className="btn btn-primary btn-lg">
                        <Translate value="passenger_rights.claimBtn" />
                    </Link>
                </div>

            </Container>

        </div>
    )
}

export default PassengerRightItem
