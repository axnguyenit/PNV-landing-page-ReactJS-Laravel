import React from 'react';

const Partners = () => {
    return (
        <section id="partners" className="p-80px-tb bg-light">
          <div className="container">
            <div className="section-title text-center m-60px-b">
              <h2>Partners</h2>
              <div className="divider-circle mx-auto" />
              <p>Carried nothing on am warrant towards. Polite in of in oh needed itself silent course.</p>
            </div>
            <div className="row">
              <div className="swiper-container causes-swiper p-60px-b swiper-container-horizontal swiper-container-free-mode">
                <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                <div className="swiper-slide col-lg-4 col-sm-6">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/partners/Agility-IO.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="swiper-slide col-lg-4 col-sm-6">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/partners/Axon-logoPNwebsite.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="swiper-slide col-lg-4 col-sm-6">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/partners/seadev.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="swiper-slide col-lg-4 col-sm-6">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/partners/Neolab.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="swiper-slide col-lg-4 col-sm-6">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/partners/mgm.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="swiper-slide col-lg-4 col-sm-6">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/partners/Logigear-logo.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="swiper-slide col-lg-4 col-sm-6">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/partners/KMS-Technology-400x284.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="swiper-slide col-lg-4 col-sm-6">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/partners/J.P.Morgan.jpg" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="swiper-slide col-lg-4 col-sm-6">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/partners/HSBC_logo_200x150.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="swiper-slide col-lg-4 col-sm-6">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/partners/Enouvo-1-400x284.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="swiper-slide col-lg-4 col-sm-6">
                  <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                    <img src="./assets/images/partners/DVT-400x284.png" alt="" />
                    <a href="#">Visit site <i className="icofont-long-arrow-right" /></a>
                  </div>
                </div>
              </div>
                {/* Slider Pagination */}
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                  <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 1" />
                  <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2" />
                  <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 3" />
                </div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
              </div>
            </div>
        </div>
      </section>
    )
}

export default Partners;