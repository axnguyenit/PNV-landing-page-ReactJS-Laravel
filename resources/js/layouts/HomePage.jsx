import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = React.lazy(() => import ('../components/header'));
const Banner = React.lazy(() => import ('../components/banner'));
const About = React.lazy(() => import ('../components/about'));
const VideoSection = React.lazy(() => import ('../components/videoSection'));
const Causes = React.lazy(() => import ('../components/causes'));
const HelpProcess = React.lazy(() => import ('../components/helpProcess'));
const Donate = React.lazy(() => import ('../components/donate'));
const Gallery = React.lazy(() => import ('../components/gallery'));
const Partners = React.lazy(() => import ('../components/partners'));
const Testimonials = React.lazy(() => import ('../components/testimonials'));
const Volunteers = React.lazy(() => import ('../components/volunteers'));
const JoinVolunteers = React.lazy(() => import ('../components/joinVolunteers'));
const Milestones = React.lazy(() => import ('../components/milestones'));
const Contact = React.lazy(() => import ('../components/contact'));
const Footer = React.lazy(() => import ('../components/footer'));

const renderComponent = (name, show, props, index) => {
    if(index % 2 === 0) {
      props.bg = 'bg-white';
      props.aos = 'zoom-in-up';
    }
    else {
      props.bg = 'bg-light';
      props.aos = 'zoom-out-up';
    }
  switch(name) {
    case 'About':
      return show ? <About {...props}/> : '';
    case 'Causes':
      return show ? <Causes {...props}/>  : '';
    case 'Partners':
      return show ? <Partners {...props}/> : '';
    case 'Volunteers':
      return show ? <Volunteers {...props}/> : '';
    case 'JoinAsVolunteer':
      return show ? <JoinVolunteers {...props}/> : '';
    case 'Milestones':
      return show ? <Milestones {...props}/> : '';
    case 'Testimonials':
      return show ? <Testimonials {...props}/> : '';
    case 'Video':
      return show ? <VideoSection {...props}/> : '';
    // case 'Header': 
    //   return <Header {...props}/>
    case 'Banner': 
      return show ? <Banner {...props} /> : '';
    case 'Gallery':
      return show ? <Gallery {...props}/> : '';
    case 'Contact':      
      return show ? <Contact {...props}/> : '';
    case 'Footer':      
      return show ? <Footer {...props}/> : '';
    return '';
  }
}


const HomePage = () => {
  const [data, setData] = useState([]);
  const [menu, setMenu] = useState([]);
  // call api here & transmit data to each component throught props
  const fetchData = () => {
    axios.get(`/api/landing-page`).then(res => {
      // console.log(res.data);
      let arrTerm = [];
      res.data.components.map(item => {
        arrTerm.push(item);
      })
      setMenu(arrTerm);
      setData(res.data);
    })
  }

  useEffect(() => {
    fetchData();
    Aos.init({duration: 1000});
  }, [])

  return (
    <>
      {menu ? <Header menu={menu}/> : null}
      {data.components ? data.components.map((item, index) => renderComponent(item.name, item.show, item.componentParams, index)) : ''}
    </>
  )
}

export default HomePage;