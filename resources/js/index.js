import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';

const Header = React.lazy(() => import ('./components/header'));
const Home = React.lazy(() => import ('./components/home'));
const About = React.lazy(() => import ('./components/about'));
const Causes = React.lazy(() => import ('./components/causes'));
const HelpProcess = React.lazy(() => import ('./components/helpProcess'));
const Donate = React.lazy(() => import ('./components/donate'));
const Gallery = React.lazy(() => import ('./components/gallery'));
const Donors = React.lazy(() => import ('./components/donors'));
const Testimonials = React.lazy(() => import ('./components/testimonials'));
const Volunteers = React.lazy(() => import ('./components/volunteers'));
const JoinVolenteers = React.lazy(() => import ('./components/joinVolenteers'));
const Blog = React.lazy(() => import ('./components/blog'));
const Contact = React.lazy(() => import ('./components/contact'));
const Footer = React.lazy(() => import ('./components/footer'));

const loading = (
  <div id="preloader-wrap">
      <div className="preloader"></div>
  </div>
)

function App() {
  return (
  <>
    <React.Suspense fallback={loading}>
      <Header />
      <Home />
      <About />
      <Causes />
      <HelpProcess />
      <Donate />
      <Gallery />
      <Testimonials />
      <Donors />
      <Volunteers />
      <JoinVolenteers />
      <Blog />
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