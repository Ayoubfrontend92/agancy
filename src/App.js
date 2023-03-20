import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Home from './features/home/Home';
import NoMatch from './components/NoMatch';
import Footer from './components/Footer';
import Consultant from './features/global-services/booking/Consultant';
import ConfirmAppointment from './features/global-services/booking/ConfirmAppointment';
import DeclarationGlobalService from './features/global-services/apply-process/Declaration';
import Services from './features/global-services/services/Services';
import ApplyProcess from './features/global-services/apply-process/ApplyProcess';
import AsiaMiddleEast from './features/visas/AsiaMiddleEast';
import AsiaMiddleEastItems from './features/visas/AsiaMiddleEastItems';
import Declaration from './features/visas/Declaration';
import ApplyProcessVisa from './features/visas/apply-process/ApplyProcessVisa';
import About from './features/about/About';
import ContactUs from './features/about/ContactUs';

import Terms from './features/about/terms/Terms'
import PrivacyPolicies from './features/about/privacy/PrivacyPolicies'
import Tours from './features/tours/Tours';
import SingleTour from './features/tours/SingleTour';
import ApplyNow from './features/visas/ApplyNow';
import ApplyNowSchool from './features/visas/ApplyNowSchool';
import ApplyNowSchoolProgram from './features/visas/ApplyNowSchoolProgram';
import AllServices from './features/global-services/AllServices';
import News from './features/find-more/News';
import Login from './features/auth/Login';
import ForgotPassword from './features/auth/ForgotPassword';
import SignUpTC from './features/auth/SignUpTC';
import SignUpTA from './features/auth/SignUpTA';
import Arrivals from './features/find-more/Arrivals';
import ArrivalNotification from './features/find-more/ArrivalNotification';
import SubmitPayments from './features/find-more/SubmitPayments';
import ConfirmPayment from './features/find-more/ConfirmPayment';
import FinancialStatus from './features/find-more/FinancialStatus';
import FinancialStatusCheck from './features/find-more/FinancialStatusCheck';
import ApplicationStatus from './features/find-more/ApplicationStatus';
import ApplicationStatusCheck from './features/find-more/ApplicationStatusCheck';
import ApplicationStatusRetrieve from './features/find-more/ApplicationStatusRetrieve';
import ApplicationStatusRetrieveCode from './features/find-more/ApplicationStatusRetrieveCode';
import ApplicationStatusResult from './features/find-more/ApplicationStatusResult';
import Glossary from './features/glossary/Glossary';
import PassengersRights from './features/about/passenger-rights/PassengersRights';
import PassengerRightItem from './features/about/passenger-rights/PassengerRightItem';
import PassengerRightsClaim from './features/about/passenger-rights/PassengerRightsClaim';
import Faq from './features/find-more/faq/Faq';
import Feedback from './features/find-more/feedback/Feedback';
import Forms from './features/visas/Forms';
import VisaItem from './features/visas/VisaItem';
import Careers from './features/about/careers/Careers';
import SearchJobOpening from './features/about/careers/SearchJobOpening'
import JobTitle from './features/about/careers/JobTitle';
import JobFamily from './features/about/careers/JobFamily';
import SelfAssesment from './features/about/careers/SelfAssesment';
import ApplyForm from './features/about/careers/ApplyForm';
import ApplyFormConfirm from './features/about/careers/ApplyFormConfirm';
import TravelRequirements from './features/find-more/travel-requirments/TravelRequirements';
import TravelRequirementItem from './features/find-more/travel-requirments/TravelRequirementItem';
import Visas from './features/visas/Visas';

import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {

  const locale = useSelector(state => state.i18n.locale);

  useEffect(() => {
    document.dir = locale === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = locale === "fa" ? "fa" : "en";

  }, [locale]);


  return (
    <Router>
      <div className="App">
        <Header />

        <ScrollToTop>
          <Switch>

            <Route exact path="/" component={Home} />

            <Route path="/find-more/application-status/result" component={ApplicationStatusResult} />
            <Route path="/find-more/application-status/send-code" component={ApplicationStatusRetrieveCode} />
            <Route path="/find-more/application-status/retrieve" component={ApplicationStatusRetrieve} />
            <Route path="/find-more/application-status/check" component={ApplicationStatusCheck} />
            <Route path="/find-more/application-status" component={ApplicationStatus} />
            <Route path="/find-more/financial-status/check" component={FinancialStatusCheck} />
            <Route path="/find-more/financial-status" component={FinancialStatus} />
            <Route path="/find-more/submit-payments/confirm" component={ConfirmPayment} />
            <Route path="/find-more/submit-payments" component={SubmitPayments} />
            <Route path="/find-more/help" component={Faq} />
            <Route path="/find-more/feedback" component={Feedback} />
            <Route path="/find-more/travel-requirements/:id" component={TravelRequirementItem} />
            <Route path="/find-more/travel-requirements" component={TravelRequirements} />
            <Route path="/find-more/arrivals/:id" component={ArrivalNotification} />
            <Route path="/find-more/arrivals" component={Arrivals} />
            <Route path="/find-more/signup-traveler-agancies" component={SignUpTA} />
            <Route path="/find-more/signup-travelers-client" component={SignUpTC} />
            <Route path="/find-more/forgot-password" component={ForgotPassword} />
            <Route path="/find-more/login-register" component={Login} />
            <Route path="/find-more/news" component={News} />

            <Route path="/visas/asia-and-middle-east/:id/visa-declaration/apply-process" component={ApplyProcessVisa} />
            <Route path="/visas/asia-and-middle-east/:id/visa-declaration" component={Declaration} />
            <Route path="/visas/asia-and-middle-east/:id" component={AsiaMiddleEastItems} />
            <Route path="/visas/asia-and-middle-east" component={AsiaMiddleEast} />
            <Route path="/visas/apply-now/:schoolId/apply-form/:programId" component={ApplyNowSchoolProgram} />
            <Route path="/visas/apply-now/:schoolId" component={ApplyNowSchool} />
            <Route path="/visas/apply-now" component={ApplyNow} />
            <Route path="/visas/forms" component={Forms} />
            <Route path="/visas/:id" component={VisaItem} />
            <Route path="/visas" component={Visas} />

            <Route path="/global-services/consultations/confirm-appointment" component={ConfirmAppointment} />
            <Route path="/global-services/consultations" component={Consultant} />
            <Route path="/global-services/:title/apply-process" component={ApplyProcess} />
            <Route path="/global-services/all-services" component={AllServices} />
            <Route path="/global-services/:title/declaration" component={DeclarationGlobalService} />
            <Route path="/global-services/:title" component={Services} />

            <Route path="/events-and-tours/:id" component={SingleTour} />
            <Route path="/events-and-tours" component={Tours} />

            <Route path="/about/passenger-rights/claim" component={PassengerRightsClaim} />
            <Route path="/about/passenger-rights/:id" component={PassengerRightItem} />
            <Route path="/about/passenger-rights" component={PassengersRights} />
            <Route path="/about/careers/job-family/:id" component={JobFamily} />
            <Route path="/about/careers/search-job-openings/:id/apply/confirm" component={ApplyFormConfirm} />
            <Route path="/about/careers/search-job-openings/:id/apply" component={ApplyForm} />
            <Route path="/about/careers/search-job-openings/:id" component={JobTitle} />
            <Route path="/about/careers/search-job-openings" component={SearchJobOpening} />
            <Route path="/about/careers/self-assesment" component={SelfAssesment} />
            <Route path="/about/careers" component={Careers} />
            <Route path="/about/privacy-policy" component={PrivacyPolicies} />
            <Route path="/about/terms-and-conditions" component={Terms} />
            <Route path="/about/contact-us" component={ContactUs} />
            <Route path="/about/about-us" component={About} />

            <Route path="/glossary" component={Glossary} />

            <Route path="*" component={NoMatch} />

          </Switch>
        </ScrollToTop>

        <Footer />
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={locale === "fa" ? true : false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />

    </Router>
  );
}

export default App;
