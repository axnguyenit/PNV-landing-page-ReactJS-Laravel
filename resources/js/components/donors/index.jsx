import React from 'react';

const Donors = () => {
    return (
        <section id="donors" className="p-80px-tb bg-light">
        <div className="container">
            <div className="section-title text-center m-60px-b">
                <h2>Top Corporate Donors</h2>
                <div className="divider-circle mx-auto" />
                <p>Carried nothing on am warrant towards. Polite in of in oh needed itself silent course.</p>
              </div>
              <div className="row">
              <div className="swiper-container causes-swiper p-60px-b swiper-container-horizontal swiper-container-free-mode">
              <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                <div className="col-lg-4 col-sm-6 swiper-slide">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/1.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 swiper-slide">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/1.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 swiper-slide">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/1.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 swiper-slide">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/1.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 swiper-slide">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/1.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 swiper-slide">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/1.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 swiper-slide">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/1.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 swiper-slide">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/1.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 swiper-slide">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/1.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 swiper-slide">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/1.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 swiper-slide">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/1.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                </div>
              {/* Slider Pagination */}
              <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" />
                <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2" />
                <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 3" />
              </div>
              <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
              </div>
                </div>
        </div>
      </section>
    )
}

export default Donors;