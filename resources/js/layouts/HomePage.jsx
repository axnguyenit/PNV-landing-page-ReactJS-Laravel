import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

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



const renderComponent = (name, show, props) => {
  switch(name) {
    case 'About':
      return show ? <About {...props}/> : '';
    case 'Causes':
      return show ? <Causes {...props}/> : '';
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
    case 'Header': 
      return <Header {...props}/>
    case 'Banner': 
      return <Banner {...props}/>
    return ''
  }
}


function HomePage() {
  const [data, setData] = useState([]);
  console.log('thien');
  // call api here & transmit data to each component throught props
  const fetchData = () => {
    axios.get(`api/landing-page/home-page`).then(res => {
      console.log(res.data);
      setData(res.data);
    })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div id="preloader-wrap">
        <div className="preloader"></div>
    </div>
      {data.components ? data.components.map(item => renderComponent(item.name, item.show, item.componentParams)) : ''}
      <Footer /> 
    </>
  )
}

export default HomePage;