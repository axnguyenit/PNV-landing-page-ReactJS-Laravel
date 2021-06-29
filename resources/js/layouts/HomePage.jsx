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

function HomePage() {
  const [data, setData] = useState([]);

  // call api here & transmit data to each component throught props
  const fetchData = () => {
    axios.get(`api/component`).then(res => {
      setData(res.data);
    })
  }

  useEffect(() => {
    fetchData();
    console.log(data);
  }, [])

  return (
  <>
      <Header />
      <Banner />
      <About {...data}/>
      <VideoSection />
      <Causes />
      <HelpProcess />
      <Donate />
      <Gallery />
      <Testimonials />
      <Partners />
      <Volunteers />
      <JoinVolunteers />
      <Milestones />
      <Contact />
      <Footer />
  </>
  );
}

export default HomePage;