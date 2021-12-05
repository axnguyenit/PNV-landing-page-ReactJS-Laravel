import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = React.lazy(() => import('../components/header'));
const Banner = React.lazy(() => import('../components/banner'));
const About = React.lazy(() => import('../components/about'));
const VideoSection = React.lazy(() => import('../components/videoSection'));
const Causes = React.lazy(() => import('../components/causes'));
const HelpProcess = React.lazy(() => import('../components/helpProcess'));
const Donate = React.lazy(() => import('../components/donate'));
const Gallery = React.lazy(() => import('../components/gallery'));
const Partners = React.lazy(() => import('../components/partners'));
const Testimonials = React.lazy(() => import('../components/testimonials'));
const Volunteers = React.lazy(() => import('../components/volunteers'));
const JoinVolunteers = React.lazy(() => import('../components/joinVolunteers'));
const Milestones = React.lazy(() => import('../components/milestones'));
const Contact = React.lazy(() => import('../components/contact'));
const Footer = React.lazy(() => import('../components/footer'));

const renderComponent = (name, show, props, index) => {
    if (index % 2 === 0) {
        props.bg = 'bg-white';
        props.aos = 'zoom-in-up';
    } else {
        props.bg = 'bg-light';
        props.aos = 'zoom-out-up';
    }
    switch (name) {
        case `About`:
            return show ? <About key={index} {...props} /> : '';
        case `Causes`:
            return show ? <Causes key={index} {...props} /> : '';
        case `Partners`:
            return show ? <Partners key={index} {...props} /> : '';
        case `Volunteers`:
            return show ? <Volunteers key={index} {...props} /> : '';
        case `JoinAsVolunteer`:
            return show ? <JoinVolunteers key={index} {...props} /> : '';
        case `Milestones`:
            return show ? <Milestones key={index} {...props} /> : '';
        case `Testimonials`:
            return show ? <Testimonials key={index} {...props} /> : '';
        case `Video`:
            return show ? <VideoSection key={index} {...props} /> : '';
        // case `Header`:
        //   return <Header {...props}/>
        case `Banner`:
            return show ? <Banner key={index} {...props} /> : '';
        case `Gallery`:
            return show ? <Gallery key={index} {...props} /> : '';
        case `Contact`:
            return show ? <Contact key={index} {...props} /> : '';
        case `Footer`:
            return show ? <Footer key={index} {...props} /> : '';
            return '';
    }
};

const HomePage = () => {
    const [data, setData] = useState([]);
    const [menu, setMenu] = useState([]);
    // call api here & transmit data to each component throught props
    const fetchData = () => {
        axios.get(`/api/landing-page`).then((res) => {
            // console.log(res.data);
            let arrTerm = [];
            res.data.components.map((item) => {
                arrTerm.push(item);
            });
            setMenu(arrTerm);
            setData(res.data);
        });
    };

    const loadScript = (src) => {
        var tag = document.createElement('script');
        tag.async = false;
        tag.defer = true;
        tag.src = src;
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(tag);
    };

    useEffect(() => {
        fetchData();
        Aos.init({ duration: 2000 });
    }, []);

    useEffect(() => {
        loadScript(`${window.location.origin}/assets/js/custom.js`);
    });

    return (
        <>
            {menu && <Header menu={menu} />}
            {data.components &&
                data.components.map((item, index) =>
                    renderComponent(
                        item.name,
                        item.show,
                        item.componentParams,
                        index,
                    ),
                )}
        </>
    );
};

export default HomePage;
