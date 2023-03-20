import React from 'react'
import { Container } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'
import HoverSlideItem from '../../components/HoverSlideItem'
import InternationalServiceCard from '../../components/InternationalServiceCard'
import TourCard from '../../components/TourCard'

const internationalServices = [
    {
        id: 1,
        title_en: "",
        title_fa: "Visa Pick up",
        services: [
            {
                service_en: "",
                service_fa: "service title"
            },
            {
                service_en: "",
                service_fa: "service title"
            },
            {
                service_en: "",
                service_fa: "service title"
            },
            {
                service_en: "",
                service_fa: "service title"
            },
        ],
        price: "250000",
    },

    {
        id: 1,
        title_en: "",
        title_fa: "Expertise CV",
        services: [
            {
                service_en: "",
                service_fa: "service title"
            },
            {
                service_en: "",
                service_fa: "service title"
            },
            {
                service_en: "",
                service_fa: "service title"
            },
            {
                service_en: "",
                service_fa: "service title"
            },
        ],
        price: "250000",
    },

    {
        id: 1,
        title_en: "",
        title_fa: "Form filling",
        services: [
            {
                service_en: "",
                service_fa: "service title"
            },
            {
                service_en: "",
                service_fa: "service title"
            },
            {
                service_en: "",
                service_fa: "service title"
            },
            {
                service_en: "",
                service_fa: "service title"
            },
        ],
        price: "250000",
    },

]

const popularTours = [
    {
        id: 1,
        image: "https://picsum.photos/300/200",
        title_en: "Title",
        title_fa: "",
        text_en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores fugiat praesentium perferendis id adipisci sunt nobis, accusamus saepe iure explicabo sed vitae vel in doloremque inventore optio assumenda voluptas!",
        text_fa: "",
        price: "250000",
    },
    {
        id: 2,
        image: "https://picsum.photos/300/200",
        title_en: "Title",
        title_fa: "",
        text_en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores fugiat praesentium perferendis id adipisci sunt nobis, accusamus saepe iure explicabo sed vitae vel in doloremque inventore optio assumenda voluptas!",
        text_fa: "",
        price: "250000",
    },
    {
        id: 3,
        image: "https://picsum.photos/300/200",
        title_en: "Title",
        title_fa: "",
        text_en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores fugiat praesentium perferendis id adipisci sunt nobis, accusamus saepe iure explicabo sed vitae vel in doloremque inventore optio assumenda voluptas!",
        text_fa: "",
        price: "250000",
    },
    {
        id: 4,
        image: "https://picsum.photos/300/200",
        title_en: "Title",
        title_fa: "",
        text_en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores fugiat praesentium perferendis id adipisci sunt nobis, accusamus saepe iure explicabo sed vitae vel in doloremque inventore optio assumenda voluptas!",
        text_fa: "",
        price: "250000",
    },
]

const hoverCards = [
    {
        image: "https://picsum.photos/400/415",
        title_en: "Visa Pick up",
        title_fa: "",
        text_en: "CANADA",
        text_fa: "",
    },
    {
        image: "https://picsum.photos/400/200",
        title_en: "Expertise CV ",
        title_fa: "",
        text_en: "Language options - Job/Scienctific",
        text_fa: "",
    },
    {
        image: "https://picsum.photos/400/200",
        title_en: "Consultation Services",
        title_fa: "",
        text_en: "Immigration, Study, Business, IT",
        text_fa: "",
    },
]

const Home = () => {
    return (
        <div className="py-5" style={{ backgroundColor: "#f7f7f7" }}>
            <Container fluid="lg">

                <div className="popular-visas mb-7">

                    <h4 className="text-timnak text-center mb-5">
                        <Translate value="home.pop_stu_vis" />
                    </h4>

                    <div className="row gx-5">

                        <div className="col-md-4 col-12 mb-md-0 mb-3">
                            <Link to="/find-more/application-status" className="d-block position-relative text-decoration-none">
                                <img src="https://picsum.photos/400/250" alt="" />
                                <div className="bg-white p-3">
                                    <h5 className="mb-0 fw-bold" style={{ color: "#05164D" }}>
                                        Canada Study Permit
                                    </h5>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-12 mb-md-0 mb-3">
                            <Link to="/find-more/submit-payments" className="d-block position-relative text-decoration-none">
                                <img src="https://picsum.photos/400/250" alt="" />
                                <div className="bg-white p-3">
                                    <h5 className="mb-0 fw-bold" style={{ color: "#05164D" }}>
                                        Germany Study visa
                                    </h5>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-12 mb-md-0 mb-3">
                            <Link to="/find-more/travel-requirements" className="d-block position-relative text-decoration-none">
                                <img src="https://picsum.photos/400/250" alt="" />
                                <div className="bg-white p-3">
                                    <h5 className="mb-0 fw-bold" style={{ color: "#05164D" }}>
                                        France Study visa
                                    </h5>
                                </div>
                            </Link>
                        </div>


                    </div>

                </div>

                <div className="slide-items mb-7">

                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <HoverSlideItem data={hoverCards[0]} link="/visas/asia-and-middle-east/1/visa-declaration" link_text="home.order_now" />
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <HoverSlideItem data={hoverCards[1]} link="/visas/asia-and-middle-east/1/visa-declaration" link_text="home.request" />
                                </div>
                                <div className="col-12">
                                    <HoverSlideItem data={hoverCards[2]} link="/global-services/consultations" link_text="home.bookApp" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="apply-banner mb-7 position-relative">
                    <img src="https://picsum.photos/900/400" height="400" className="w-100 rounded" alt="" srcSet="" />
                    <div className="ovrelay position-absolute w-100 top-0 left-0 right-0 bottom-0 p-5" style={{ backgroundColor: "rgba(255,255,255,0.5)" }}>
                        <h1 className="fw-bold text-timnak" style={{ fontSize: "60px" }}>
                            <Translate value="home.apply_now_for" /> Iran
                        </h1>
                        <Link to="" className="btn btn-lg btn-timnak-outline mt-5">
                            <Translate value="home.apply_now" />
                        </Link>
                    </div>
                </div>

                <div className="check_status mb-7">

                    <h4 className="text-timnak text-center mb-5">
                        <Translate value="home.check_status" />
                    </h4>

                    <div className="row gx-5">

                        <div className="col-md-4 col-12 mb-md-0 mb-3">
                            <Link to="/find-more/application-status" className="d-block position-relative text-decoration-none">
                                <img src="https://picsum.photos/400/250" alt="" />
                                <div className="bg-white p-3">
                                    <h5 className="mb-0 fw-bold" style={{ color: "#05164D" }}>
                                        Application Status Check
                                    </h5>
                                    <p className="small mb-0" style={{ color: "#05164D" }}>
                                        Check your application process
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-12 mb-md-0 mb-3">
                            <Link to="/find-more/submit-payments" className="d-block position-relative text-decoration-none">
                                <img src="https://picsum.photos/400/250" alt="" />
                                <div className="bg-white p-3">
                                    <h5 className="mb-0 fw-bold" style={{ color: "#05164D" }}>
                                        Your Visa Chance
                                    </h5>
                                    <p className="small mb-0" style={{ color: "#05164D" }}>
                                        Check your conditions for a visa
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-12 mb-md-0 mb-3">
                            <Link to="/find-more/travel-requirements" className="d-block position-relative text-decoration-none">
                                <img src="https://picsum.photos/400/250" alt="" />
                                <div className="bg-white p-3">
                                    <h5 className="mb-0 fw-bold" style={{ color: "#05164D" }}>
                                        Payment Status Check
                                    </h5>
                                    <p className="small mb-0" style={{ color: "#05164D" }}>
                                        Check your payment confirmation
                                    </p>
                                </div>
                            </Link>
                        </div>


                    </div>

                </div>

                <div className="popular-tours mb-7">

                    <h4 className="text-timnak text-center mb-5">
                        <Translate value="home.group_tours" />
                    </h4>

                    <div className="row">
                        {popularTours?.map(tour => (
                            <div key={tour.id} className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-3">
                                <TourCard data={tour} />
                            </div>
                        ))}
                    </div>

                </div>

                <div className="international-services mb-7">

                    <h4 className="text-timnak text-center mb-5">
                        <Translate value="home.int_service" />
                    </h4>

                    <div className="row gx-5">
                        {internationalServices?.map((service, index) => (
                            <div className="col-md-4 col-12 mb-md-0 mb-3" key={index} >
                                <InternationalServiceCard data={service} />
                            </div>
                        ))}
                    </div>

                </div>

                <div className="apply-banner-2 mb-7">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-10 col-12">
                            <div className="apply-banner-2 position-relative">
                                <img src="https://picsum.photos/900/400" height="400" className="w-100 rounded" alt="" srcSet="" />
                                <div className="ovrelay position-absolute w-100 top-0 left-0 right-0 bottom-0 p-5 d-flex flex-column" style={{ backgroundColor: "rgba(255,255,255,0.5)" }}>
                                    <h1 className="fw-bold text-timnak" style={{ fontSize: "60px" }}>
                                        Dynamic Title
                                    </h1>
                                    <p className="text-timnak">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nihil rem quidem explicabo necessitatibus saepe eaque soluta, officia culpa temporibus facilis pariatur alias architecto fugiat ducimus odit quam tempore quo!
                                    </p>
                                    <div className="d-flex justify-content-end mt-auto">
                                        <Link to="" className="btn btn-lg btn-timnak-outline">
                                            <Translate value="home.book_now" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-10 col-12">
                            <div className="apply-banner-2 position-relative">
                                <img src="https://picsum.photos/900/400" height="400" className="w-100 rounded" alt="" srcSet="" />
                                <div className="ovrelay position-absolute w-100 top-0 left-0 right-0 bottom-0 p-5 d-flex flex-column" style={{ backgroundColor: "rgba(255,255,255,0.5)" }}>
                                    <h1 className="fw-bold text-timnak" style={{ fontSize: "60px" }}>
                                        Dynamic Title
                                    </h1>
                                    <p className="text-timnak">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nihil rem quidem explicabo necessitatibus saepe eaque soluta, officia culpa temporibus facilis pariatur alias architecto fugiat ducimus odit quam tempore quo!
                                    </p>
                                    <div className="d-flex justify-content-end mt-auto">
                                        <Link to="" className="btn btn-lg btn-timnak-outline">
                                            <Translate value="home.book_now" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="apply-banner-2 position-relative">
                                <img src="https://picsum.photos/900/400" height="400" className="w-100 rounded" alt="" srcSet="" />
                                <div className="ovrelay position-absolute w-100 top-0 left-0 right-0 bottom-0 p-5 d-flex flex-column" style={{ backgroundColor: "rgba(255,255,255,0.5)" }}>
                                    <h1 className="fw-bold text-timnak" style={{ fontSize: "60px" }}>
                                        Dynamic Title
                                    </h1>
                                    <p className="text-timnak">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nihil rem quidem explicabo necessitatibus saepe eaque soluta, officia culpa temporibus facilis pariatur alias architecto fugiat ducimus odit quam tempore quo!
                                    </p>
                                    <div className="d-flex justify-content-end mt-auto">
                                        <Link to="" className="btn btn-lg btn-timnak-outline">
                                            <Translate value="home.book_now" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="complements mb-7">

                    <h4 className="text-timnak text-center mb-5">
                        <Translate value="home.cmp_req_title" />
                    </h4>

                    <div className="row gx-5">

                        <div className="col-lg-3 col-sm-6 col-12 mb-lg-0 mb-3">
                            <Link to="/find-more/application-status" className="d-block position-relative text-decoration-none cmp-item">
                                <img src="assets/images/cmp_1.jpg" alt="" />
                                <div className="bg-white p-3">
                                    <h5 className="text-timnak mb-0 fw-bold">
                                        <Translate value="home.cmp_req.link_1" />
                                    </h5>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 mb-lg-0 mb-3">
                            <Link to="/find-more/submit-payments" className="d-block position-relative text-decoration-none cmp-item">
                                <img src="assets/images/cmp_2.jpg" alt="" />
                                <div className="bg-white p-3">
                                    <h5 className="text-timnak mb-0 fw-bold">
                                        <Translate value="home.cmp_req.link_2" />
                                    </h5>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 mb-lg-0 mb-3">
                            <Link to="/find-more/travel-requirements" className="d-block position-relative text-decoration-none cmp-item">
                                <img src="assets/images/cmp_3.jpg" alt="" />
                                <div className="bg-white p-3">
                                    <h5 className="text-timnak mb-0 fw-bold">
                                        <Translate value="home.cmp_req.link_3" />
                                    </h5>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 mb-lg-0 mb-3">
                            <Link to="/global-services/consultations" className="d-block position-relative text-decoration-none cmp-item">
                                <img src="assets/images/cmp_4.jpg" alt="" />
                                <div className="bg-white p-3">
                                    <h5 className="text-timnak mb-0 fw-bold">
                                        <Translate value="home.cmp_req.link_4" />
                                    </h5>
                                </div>
                            </Link>
                        </div>

                    </div>

                </div>

                <div className="popular-tours">

                    <h4 className="text-timnak text-center mb-5">
                        <Translate value="home.outbound_tours" />
                    </h4>

                    <div className="row">
                        {popularTours?.map(tour => (
                            <div key={tour.id} className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-3">
                                <TourCard data={tour} />
                            </div>
                        ))}
                    </div>

                </div>


            </Container>
        </div>
    )
}

export default Home
