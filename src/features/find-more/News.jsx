import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import { Link } from 'react-router-dom'
import Insta from '../../images/instagram.svg'
import Teleg from '../../images/telegram.svg'
import { FiGlobe } from 'react-icons/fi'
import { RiBankLine } from 'react-icons/ri'
import { AiOutlineCamera } from 'react-icons/ai'
import { IoAirplaneOutline, IoBicycleOutline, IoColorPaletteOutline } from 'react-icons/io5'
import { FaNewspaper, FaRegCalendarAlt } from 'react-icons/fa'
import NewsCard from './NewsCard'

const News = () => {

    const [activeFilter, setActiveFilter] = useState(0)

    const filterNews = (filterId) => {
        setActiveFilter(filterId);
        console.log(filterId)
    }

    return (
        <div className="news py-5">

            <Container>

                <div className="d-flex flex-lg-row flex-column align-items-center justify-content-between">
                    <h4 className="text-timnak">
                        <Translate value="find_more.news.title" />
                    </h4>

                    <ul className="list-unstyled d-flex">
                        <li>
                            <Link to="/" className="btn btn-outline-primary">
                                <img src={Insta} alt="" width="30" height="30" />
                                <span className="mx-2 small">
                                    <Translate value="find_more.news.insta" />
                                </span>
                            </Link>
                        </li>
                        <div className="mx-2"></div>
                        <li>
                            <Link to="/" className="btn btn-outline-primary">
                                <img src={Teleg} alt="" width="30" height="30" />
                                <span className="mx-2 small">
                                    <Translate value="find_more.news.teleg" />
                                </span>
                            </Link>
                        </li>
                    </ul>

                </div>

                <div className="filerNews my-4">
                    <div className="d-flex justify-content-evenly">
                        <div className={"filterItem d-flex flex-column text-center cursor-pointer " + (activeFilter === 0 ? 'active' : '')} onClick={() => filterNews(0)}>
                            <div className="shadow-sm p-2">
                                <FaNewspaper size="50px" />
                            </div>
                            <p className="mb-0 mt-2">
                                All
                            </p>
                        </div>
                        <div className={"filterItem d-flex flex-column text-center cursor-pointer " + (activeFilter === 1 ? 'active' : '')} onClick={() => filterNews(1)}>
                            <div className="shadow-sm p-2">
                                <RiBankLine size="50px" />
                            </div>
                            <p className="mb-0 mt-2">
                                Embassies
                            </p>
                        </div>
                        <div className={"filterItem d-flex flex-column text-center cursor-pointer " + (activeFilter === 2 ? 'active' : '')} onClick={() => filterNews(2)}>
                            <div className="shadow-sm p-2">
                                <FiGlobe size="50px" />
                            </div>
                            <p className="mb-0 mt-2">
                                Embassies
                            </p>
                        </div>
                        <div className={"filterItem d-flex flex-column text-center cursor-pointer " + (activeFilter === 3 ? 'active' : '')} onClick={() => filterNews(3)}>
                            <div className="shadow-sm p-2">
                                <AiOutlineCamera size="50px" />
                            </div>
                            <p className="mb-0 mt-2">
                                Embassies
                            </p>
                        </div>
                        <div className={"filterItem d-flex flex-column text-center cursor-pointer " + (activeFilter === 4 ? 'active' : '')} onClick={() => filterNews(4)}>
                            <div className="shadow-sm p-2">
                                <IoAirplaneOutline size="50px" />
                            </div>
                            <p className="mb-0 mt-2">
                                Embassies
                            </p>
                        </div>
                        <div className={"filterItem d-flex flex-column text-center cursor-pointer " + (activeFilter === 5 ? 'active' : '')} onClick={() => filterNews(5)}>
                            <div className="shadow-sm p-2">
                                <IoBicycleOutline size="50px" />
                            </div>
                            <p className="mb-0 mt-2">
                                Embassies
                            </p>
                        </div>
                        <div className={"filterItem d-flex flex-column text-center cursor-pointer " + (activeFilter === 6 ? 'active' : '')} onClick={() => filterNews(6)}>
                            <div className="shadow-sm p-2">
                                <IoColorPaletteOutline size="50px" />
                            </div>
                            <p className="mb-0 mt-2">
                                Embassies
                            </p>
                        </div>
                        <div className={"filterItem d-flex flex-column text-center cursor-pointer " + (activeFilter === 7 ? 'active' : '')} onClick={() => filterNews(7)}>
                            <div className="shadow-sm p-2">
                                <FaRegCalendarAlt size="50px" />
                            </div>
                            <p className="mb-0 mt-2">
                                Embassies
                            </p>
                        </div>
                    </div>
                </div>

                <div className="news-list mt-5">
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>

            </Container>

        </div>
    )
}

export default News
