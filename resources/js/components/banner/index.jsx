import React from 'react';
// import CardBanner from './CardBanner';
const Banner = (props) => {
  // const banner = props;
    return (
        <section id="home">
        <div className="swiper-container hero-swiper swiper-container-horizontal">
          <div className="swiper-wrapper">
          {props.banner.map(banners=>(
            <div className="swiper-slide swiper-slide-prev" style={{width: '783px'}}>
            <div className="hero-area hero-slide" style={{backgroundImage: `url(${props.banner.image})`}}>
              <div className="overlay overlay-5" />
              <div className="container">
                <div className="row full-height align-items-center text-center">
                  <div className="col p-100px-t p-50px-b slider-text">
                    <h4 className="tlt1">
                      <ul className="texts">
                        <li className="current">{props.banner.title}</li>
                      </ul>
                    </h4>
                    <div className="divider-circle mt-4" />
                    <h2 className="text-capitalize m-35px-tb tlt">
                      <ul className="texts">
                        <li className="current">{props.banner.subtitle}</li>
                      </ul>
                    </h2>
                    <div className="hero-btn-wrapper">
                      <a href="#contact" className="btn btn-default btn-default-outline">Contact us</a>
                      <a className="btn btn-default" href="#">Donate now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))} 
            {/*End single slide */}
          </div>
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
            <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 1" />
            <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 2" />
            <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 3" />
          </div>
          {/* Pagenation */}
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
      </section>
    )
}

export default Banner;