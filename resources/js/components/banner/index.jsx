import React from 'react';

const Banner = () => {
    return (
        <section id="home">
        <div className="swiper-container hero-swiper swiper-container-horizontal">
          <div className="swiper-wrapper">
            <div className="swiper-slide swiper-slide-prev" style={{width: '783px'}}>
              <div className="hero-area hero-slide" style={{backgroundImage: 'url(assets/images/1.jpg)'}}>
                <div className="overlay overlay-5" />
                <div className="container">
                  <div className="row full-height align-items-center text-center">
                    <div className="col p-100px-t p-50px-b slider-text">
                      <h4 className="tlt1">
                        <ul className="texts">
                          <li className="current">Prottasha for hopeless peoples</li>
                        </ul>
                      </h4>
                      <div className="divider-circle mt-4" />
                      <h2 className="text-capitalize m-35px-tb tlt">
                        <ul className="texts">
                          <li className="current">We give a helping hand for hopeless peoples</li>
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
            {/*End single slide */}
            <div className="swiper-slide swiper-slide-active" style={{width: '783px'}}>
              <div className="hero-area hero-slide" style={{backgroundImage: 'url(assets/images/1.jpg)'}}>
                <div className="overlay overlay-5" />
                <div className="container">
                  <div className="row full-height align-items-center text-center">
                    <div className="col p-100px-t p-50px-b">
                      <h4 className="tlt1">
                        <ul className="texts">
                          <li className="current">Prottasha for homeless peoples</li>
                        </ul>
                      </h4>
                      <div className="divider-circle mt-4" />
                      <h2 className="text-capitalize m-35px-tb tlt">
                        <ul className="texts">
                          <li className="current">We give a helping hand for homeless peoples</li>
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
            {/*End single slide */}
            <div className="swiper-slide swiper-slide-next" style={{width: '783px'}}>
              <div className="hero-area hero-slide" style={{backgroundImage: 'url(assets/images/1.jpg)'}}>
                <div className="overlay overlay-5" />
                <div className="container">
                  <div className="row full-height align-items-center text-center">
                    <div className="col p-100px-t p-50px-b">
                      <h4 className="tlt1">
                        <ul className="texts">
                          <li className="current">Prottasha for happy life</li>
                        </ul>
                      </h4>
                      <div className="divider-circle mt-4" />
                      <h2 className="text-capitalize m-35px-tb tlt">
                        <ul className="texts">
                          <li className="current">We give a helping hand for happy life</li>
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