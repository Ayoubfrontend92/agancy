import React, { useState } from 'react'
import { Alert, Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { selectAppMesseage } from '../features/ui/uiSlice';
import LanguageSwitcher from '../components/LanguageSwitcher'
import Timnak from '../images/LOGO_HEADER.svg'
import { FaTelegramPlane, FaInstagramSquare, FaLinkedinIn, FaStamp, FaPassport, FaPenFancy, FaGraduationCap, FaSearch, FaFile, FaUsers, FaGlobe, FaBriefcase, FaEnvelope, FaExclamationCircle, FaPersonBooth, FaGavel, FaMoneyBillAlt, FaFlagCheckered, FaTasks } from 'react-icons/fa'
import { IoChatbubblesOutline, IoLanguage } from 'react-icons/io5';
import { MdAssessment, MdExitToApp, MdFeedback, MdSecurity } from 'react-icons/md';
import { BiIdCard } from 'react-icons/bi';
import { GiOrganigram } from 'react-icons/gi';
import { FiHelpCircle } from 'react-icons/fi';
import { AiOutlineShop } from 'react-icons/ai';
import Lottery from '../images/lottery.svg'
import Asia from '../images/asia.svg'
import Kish from '../images/kish.svg'
import Mashhad from '../images/mashhad.svg'

import CustomDropDown from './CustomDropDown';
import { BsBatteryHalf, BsFillGrid1X2Fill, BsNewspaper } from 'react-icons/bs';
import ColoredLine from './ColoredLine';

const Header = () => {

    let { url } = useRouteMatch();

    const message = useSelector(state => selectAppMesseage(state));
    const [show, setShow] = useState(message !== "" ? true : false);

    return (
        <React.Fragment>
            {show && <Alert variant="warning" onClose={() => setShow(false)} dismissible className="mb-0">
                <p className="text-center mb-0">
                    {message}
                </p>
            </Alert>}
            <header className="border-bottom">
                <Navbar expand="lg" bg="light" variant="light">
                    <Container >
                        <Nav>
                            <LanguageSwitcher />
                        </Nav>
                        <Nav className="socials">
                            <NavLink className="nav-link" to=""><FaTelegramPlane size="22px" /></NavLink>
                            <NavLink className="nav-link" to=""><FaInstagramSquare size="22px" /></NavLink>
                            <NavLink className="nav-link" to=""><FaLinkedinIn size="22px" /></NavLink>
                        </Nav>
                    </Container>
                </Navbar>
                <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                    <Container >
                        <NavLink to="/" className="navbar-brand m-0">
                            <img
                                alt="Timnak"
                                src={Timnak}
                                width="150"
                                height="65"
                                className="d-inline-block align-top"
                            />{' '}
                        </NavLink>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>

                                <CustomDropDown navtitle={<Translate value="header.nav_item_1" />}>
                                    <NavLink className="nav-link" to={`${url}global-services/all-services`}>
                                        <GiOrganigram />
                                        <Translate value="header.nav_item_1_0" />
                                    </NavLink>

                                    <NavLink
                                        className="nav-link"
                                        isActive={() => window.location.href.indexOf('consultations') > -1} to={`${url}global-services/consultations`}>
                                        <IoChatbubblesOutline />
                                        <Translate value="header.nav_item_1_1" />
                                    </NavLink>

                                    <NavLink
                                        className="nav-link"
                                        isActive={() => window.location.href.indexOf('caq') > -1} to="/global-services/caq">
                                        <FaStamp />
                                        <Translate value="header.nav_item_1_2" />
                                    </NavLink>

                                    <NavLink
                                        className="nav-link"
                                        isActive={() => window.location.href.indexOf('visa-pick-up') > -1} to="/global-services/visa-pick-up">
                                        <FaPassport />
                                        <Translate value="header.nav_item_1_3" />
                                    </NavLink>

                                    <NavLink
                                        className="nav-link"
                                        isActive={() => window.location.href.indexOf('assessment') > -1} to="/global-services/assessment">
                                        <MdAssessment />
                                        <Translate value="header.nav_item_1_4" />
                                    </NavLink>

                                    <NavLink
                                        className="nav-link"
                                        isActive={() => window.location.href.indexOf('cv-resume') > -1} to="/global-services/cv-resume">
                                        <BiIdCard />
                                        <Translate value="header.nav_item_1_5" />
                                    </NavLink>

                                    <NavLink
                                        className="nav-link"
                                        isActive={() => window.location.href.indexOf('filing-forms') > -1} to="/global-services/filing-forms">
                                        <FaPenFancy />
                                        <Translate value="header.nav_item_1_6" />
                                    </NavLink>

                                    <NavLink
                                        className="nav-link"
                                        isActive={() => window.location.href.indexOf('us-lotter') > -1} to="/global-services/us-lotter">
                                        <img src={Lottery} alt="lottery" />
                                        <Translate value="header.nav_item_1_7" />
                                    </NavLink>

                                </CustomDropDown>
                                <CustomDropDown navtitle={<Translate value="header.nav_item_2" />}>
                                    <NavLink className="nav-link" to="/visas/apply-now">
                                        <FaGraduationCap />
                                        <Translate value="header.nav_item_1_1" />
                                    </NavLink>

                                    <ColoredLine color="#BEBEBE" />

                                    <NavLink className="nav-link" to="/visas/visa-finnder">
                                        <FaSearch />
                                        <Translate value="header.nav_item_1_2" />
                                    </NavLink>

                                    <ColoredLine color="#BEBEBE" />

                                    <NavLink className="nav-link" to="/visas/asia-and-middle-east">
                                        <img src={Asia} alt="asia" />
                                        <Translate value="header.nav_item_1_3" />
                                    </NavLink>

                                    <NavLink className="nav-link" to="/visas/forms">
                                        <FaFile />
                                        <Translate value="header.nav_item_1_4" />
                                    </NavLink>

                                </CustomDropDown>
                                <CustomDropDown navtitle={<Translate value="header.nav_item_3" />}>
                                    <NavLink
                                        isActive={() => window.location.href.indexOf('group-tours') > -1}
                                        className="nav-link" to="/events-and-tours?tour=group-tours">
                                        <FaUsers />
                                        <Translate value="header.nav_item_3_1" />
                                    </NavLink>

                                    <ColoredLine color="#BEBEBE" />

                                    <NavLink
                                        isActive={() => window.location.href.indexOf('kish-tours') > -1}
                                        className="nav-link" to="/events-and-tours?tour=kish-tours">
                                        <img src={Kish} alt="kish" />
                                        <Translate value="header.nav_item_3_2" />
                                    </NavLink>

                                    <NavLink
                                        isActive={() => window.location.href.indexOf('mashhad-tours') > -1}
                                        className="nav-link" to="/events-and-tours?tour=mashhad-tours">
                                        <img src={Mashhad} alt="kish" />
                                        <Translate value="header.nav_item_3_3" />
                                    </NavLink>

                                    <ColoredLine color="#BEBEBE" />

                                    <NavLink
                                        isActive={() => window.location.href.indexOf('outbound-tours') > -1}
                                        className="nav-link" to="/events-and-tours?tour=outbound-tours">
                                        <FaGlobe />
                                        <Translate value="header.nav_item_3_4" />
                                    </NavLink>

                                    <ColoredLine color="#BEBEBE" />

                                    <NavLink
                                        isActive={() => window.location.href.indexOf('exhibition-tours') > -1}
                                        className="nav-link" to="/events-and-tours?tour=exhibition-tours">
                                        <AiOutlineShop />
                                        <Translate value="header.nav_item_3_5" />
                                    </NavLink>

                                </CustomDropDown>
                                <CustomDropDown navtitle={<Translate value="header.nav_item_4" />}>

                                    <NavLink className="nav-link" to="/about/contact-us">
                                        <FaEnvelope />
                                        <Translate value="header.nav_item_1_1" />
                                    </NavLink>

                                    <NavLink className="nav-link" to="/about/about-us">
                                        <FaExclamationCircle />
                                        <Translate value="header.nav_item_1_2" />
                                    </NavLink>

                                    <ColoredLine color="#BEBEBE" />

                                    <NavLink className="nav-link" to="/about/careers">
                                        <FaBriefcase />
                                        <Translate value="header.nav_item_1_3" />
                                    </NavLink>

                                    <ColoredLine color="#BEBEBE" />

                                    <NavLink className="nav-link" to="/about/privacy-policy">
                                        <FaPersonBooth />
                                        <Translate value="header.nav_item_1_4" />
                                    </NavLink>

                                    <NavLink className="nav-link" to="/about/terms-and-conditions">
                                        <FaGavel />
                                        <Translate value="header.nav_item_1_5" />
                                    </NavLink>

                                    <NavLink className="nav-link" to="/about/passenger-rights">
                                        <MdSecurity />
                                        <Translate value="header.nav_item_1_6" />
                                    </NavLink>

                                </CustomDropDown>
                                <CustomDropDown navtitle={<Translate value="header.nav_item_5" />}>

                                    <NavLink className="nav-link" to="/find-more/news">
                                        <BsNewspaper />
                                        <Translate value="header.nav_item_5_0" />
                                    </NavLink>

                                    <NavLink className="nav-link" to="/find-more/dashboard">
                                        <BsFillGrid1X2Fill />
                                        <Translate value="header.nav_item_5_1" />
                                    </NavLink>

                                    <NavLink className="nav-link" to="/find-more/login-register">
                                        <MdExitToApp />
                                        <Translate value="header.nav_item_5_2" />
                                    </NavLink>

                                    <Nav.Link className="d-flex align-items-center">
                                        <IoLanguage size="22px" />
                                        <LanguageSwitcher />
                                    </Nav.Link>

                                    <ColoredLine color="#BEBEBE" />

                                    <NavLink className="nav-link" to="/find-more/help">
                                        <FiHelpCircle />
                                        <Translate value="header.nav_item_5_4" />
                                    </NavLink>

                                    <ColoredLine color="#BEBEBE" />

                                    <NavLink className="nav-link" to="/find-more/feedback">
                                        <MdFeedback />
                                        <Translate value="header.nav_item_5_5" />
                                    </NavLink>

                                    <ColoredLine color="#BEBEBE" />

                                    {/* <NavLink className="nav-link" to="/find-more/arrivals">
                                        <FaPlaneArrival />
                                        <Translate value="header.nav_item_5_6" />
                                    </NavLink>

                                    <ColoredLine color="#BEBEBE" /> */}

                                    <NavLink className="nav-link" to="/find-more/travel-requirements">
                                        <FaTasks />
                                        <Translate value="header.nav_item_5_6_2" />
                                    </NavLink>

                                    <ColoredLine color="#BEBEBE" />

                                    <NavLink className="nav-link" to="/find-more/submit-payments">
                                        <FaMoneyBillAlt />
                                        <Translate value="header.nav_item_5_7" />
                                    </NavLink>

                                    <ColoredLine color="#BEBEBE" />

                                    <NavLink className="nav-link" to="/find-more/financial-status">
                                        <BsBatteryHalf />
                                        <Translate value="header.nav_item_5_8" />
                                    </NavLink>
                                    <NavLink className="nav-link" to="/find-more/application-status">
                                        <FaFlagCheckered />
                                        <Translate value="header.nav_item_5_9" />
                                    </NavLink>

                                </CustomDropDown>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </React.Fragment>
    )
}

export default Header
