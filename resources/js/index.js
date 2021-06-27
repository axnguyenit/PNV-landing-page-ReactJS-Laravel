import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';

const Header = React.lazy(() => import ('./components/header'));
const Banner = React.lazy(() => import ('./components/banner'));
const About = React.lazy(() => import ('./components/about'));
const Causes = React.lazy(() => import ('./components/causes'));
const HelpProcess = React.lazy(() => import ('./components/helpProcess'));
const Donate = React.lazy(() => import ('./components/donate'));
const Gallery = React.lazy(() => import ('./components/gallery'));
const Partners = React.lazy(() => import ('./components/partners'));
const Testimonials = React.lazy(() => import ('./components/testimonials'));
const Volunteers = React.lazy(() => import ('./components/volunteers'));
const JoinVolenteers = React.lazy(() => import ('./components/joinVolenteers'));
const Milestones = React.lazy(() => import ('./components/milestones'));
const Contact = React.lazy(() => import ('./components/contact'));
const Footer = React.lazy(() => import ('./components/footer'));
const Form = React.lazy(() => import ('./components/milestones/Form'));

const loading = (
  <div id="preloader-wrap">
      <div className="preloader"></div>
  </div>
)
function App() {
 const [milestones, setMilestones] = useState([]);
 const fetchAll = () =>{
   if(localStorage.getItem('values')){
     const data = JSON.parse(localStorage.getItem('values'));
     setMilestones(data);
     console.log(data);
   }
 }
 useEffect(() =>{
  fetchAll();
  setInterval(fetchAll,1000);
},[]);
//  console.log(value);
  return (
  <>
    <React.Suspense fallback={loading}>
      <Header />
      <Banner />
      <About />
      <Causes />
      <HelpProcess />
      <Donate />
      <Gallery />
      <Testimonials />
      <Partners />
      <Volunteers />
      <JoinVolenteers />
      <Milestones {...milestones}/>
      <Form />
      <Contact />
      <Footer />
    </React.Suspense>
  </>
  );
}

// export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}