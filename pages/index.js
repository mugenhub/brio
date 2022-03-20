import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/BusinessAgency/MainBanner';
import About from '../components/BusinessAgency/About';
import Services from '../components/BusinessAgency/Services';
import OurWorks from '../components/BusinessAgency/OurWorks';
import WorkProcess from '../components/BusinessAgency/WorkProcess';
import Feedback from '../components/Common/Feedback';
import FeedbackTwo from '../components/Common/FeedbackTwo'
import TeamStyleTwo from '../components/Common/TeamStyleTwo';
import PricingStyleTwo from '../components/Pricing/PricingStyleTwo';
import PartnerTwo from '../components/Common/PartnerTwo';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import LatestNewsSlider from '../components/Common/LatestNewsSliderTwo';
import Footer from '../components/Layouts/Footer';
import Counters from '../components/Common/Counters';

class Index extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <MainBanner />
                <div className='container pt-5'>
                    <div className="section-title">
                    <h4>Considered as One of Top Manufacturers of Upvc Windows and Doors in the Philippines</h4>
                    </div>
                </div>
                <About />

                <Counters />
              

                <FeedbackTwo />


                <Footer />
            </>
        );
    }
}

export default Index;
