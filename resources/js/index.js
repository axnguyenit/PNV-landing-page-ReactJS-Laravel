import React, {useState, useEffect} from 'react';
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
const Form= React.lazy(() => import ('./components/about/form.jsx'));
const loading = (
  <div id="preloader-wrap">
      <div className="preloader"></div>
  </div>
)

function App() {
  const [about, setAbout] = useState([]);
  const fetchAll = () => {
    if(localStorage.getItem('data')) {
      const data = JSON.parse(localStorage.getItem('data'));
      setAbout(data);
      console.log(data);
    }
  }

  useEffect(() => {
    fetchAll();
    setInterval(fetchAll,1000);
  }, [])

  return (
  <>
    <React.Suspense fallback={loading}>
      <Header />
      <Banner />
      <About {...about}/>
      <Causes />
      <HelpProcess />
      <Donate />
      <Gallery />
      <Testimonials />
      <Partners />
      <Volunteers />
      <JoinVolenteers />
      <Milestones />
      <Contact />
      <Footer />
      <Form />
    </React.Suspense>
  </>
  );
}

// export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}