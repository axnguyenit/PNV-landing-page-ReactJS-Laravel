import React from 'react';

const Volunteers = () => {
    return (
        <section id="volunteers" className="p-80px-tb bg-light">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="section-title text-center m-60px-b">
                <h2>Our volunteers</h2>
                <div className="divider-circle mx-auto" />
                <p>Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="swiper-container volunteers-swiper p-60px-b swiper-container-horizontal swiper-container-free-mode">
              <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                {/* Start single volunteer */}
                <div className="swiper-slide swiper-slide-active" style={{width: '360px'}}>
                  <div className="col">
                    <div className="each-box">
                      <div className="inner gray-bg text-center">
                        <div className="box-hover">
                          <img src="./assets/images/1(3).jpg" alt="Children" className="img-responsive" />
                          <div className="mask">
                            <div className="mask-inner">
                              <h3 className="title">Abraham L.</h3>
                              <p className="pera-text">Helping over 5+ years</p>
                              <ul className="nav light-icon vol-social-icon">
                                <li><a href="#"><i className="icofont-twitter" /></a></li>
                                <li><a href="#"><i className="icofont-google-plus" /></a></li>
                                <li><a href="#"><i className="icofont-facebook" /></a></li>
                                <li><a href="#"><i className="icofont-share" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End: .inner */}
                    </div>
                  </div>
                </div>
                {/* End single volunteer */}
                {/* Start single volunteer */}
                <div className="swiper-slide swiper-slide-next" style={{width: '360px'}}>
                  <div className="col">
                    <div className="each-box">
                      <div className="inner gray-bg text-center">
                        <div className="box-hover">
                          <img src="./assets/images/2(3).jpg" alt="Children" className="img-responsive" />
                          <div className="mask">
                            <div className="mask-inner">
                              <h3 className="title">Mollie S.</h3>
                              <p className="pera-text">Helping over 4+ years</p>
                              <ul className="nav light-icon vol-social-icon">
                                <li><a href="#"><i className="icofont-twitter" /></a></li>
                                <li><a href="#"><i className="icofont-google-plus" /></a></li>
                                <li><a href="#"><i className="icofont-facebook" /></a></li>
                                <li><a href="#"><i className="icofont-share" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End: .inner */}
                    </div>
                  </div>
                </div>
                {/* End single volunteer */}
                {/* Start single volunteer */}
                <div className="swiper-slide" style={{width: '360px'}}>
                  <div className="col">
                    <div className="each-box">
                      <div className="inner gray-bg text-center">
                        <div className="box-hover">
                          <img src="./assets/images/3(3).jpg" alt="Children" className="img-responsive" />
                          <div className="mask">
                            <div className="mask-inner">
                              <h3 className="title">Sajid K.</h3>
                              <p className="pera-text">Helping over 3+ years</p>
                              <ul className="nav light-icon vol-social-icon">
                                <li><a href="#"><i className="icofont-twitter" /></a></li>
                                <li><a href="#"><i className="icofont-google-plus" /></a></li>
                                <li><a href="#"><i className="icofont-facebook" /></a></li>
                                <li><a href="#"><i className="icofont-share" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End: .inner */}
                    </div>
                  </div>
                </div>
                {/* End single volunteer */}
                {/* Start single volunteer */}
                <div className="swiper-slide" style={{width: '360px'}}>
                  <div className="col">
                    <div className="each-box">
                      <div className="inner gray-bg text-center">
                        <div className="box-hover">
                          <img src="./assets/images/4(3).jpg" alt="Children" className="img-responsive" />
                          <div className="mask">
                            <div className="mask-inner">
                              <h3 className="title">Maria D.</h3>
                              <p className="pera-text">Helping over 2+ years</p>
                              <ul className="nav light-icon vol-social-icon">
                                <li><a href="#"><i className="icofont-twitter" /></a></li>
                                <li><a href="#"><i className="icofont-google-plus" /></a></li>
                                <li><a href="#"><i className="icofont-facebook" /></a></li>
                                <li><a href="#"><i className="icofont-share" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End: .inner */}
                    </div>
                  </div>
                </div>
                {/* End single volunteer */}
                {/* Start single volunteer */}
                <div className="swiper-slide" style={{width: '360px'}}>
                  <div className="col">
                    <div className="each-box">
                      <div className="inner gray-bg text-center">
                        <div className="box-hover">
                          <img src="./assets/images/5(1).jpg" alt="Children" className="img-responsive" />
                          <div className="mask">
                            <div className="mask-inner">
                              <h3 className="title">Daniyel H.</h3>
                              <p className="pera-text">Helping over 3 months</p>
                              <ul className="nav light-icon vol-social-icon">
                                <li><a href="#"><i className="icofont-twitter" /></a></li>
                                <li><a href="#"><i className="icofont-google-plus" /></a></li>
                                <li><a href="#"><i className="icofont-facebook" /></a></li>
                                <li><a href="#"><i className="icofont-share" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End: .inner */}
                    </div>
                  </div>
                </div>
                {/* End single volunteer */}
              </div>
              {/* Add Pagination */}
              <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2" />
                <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 3" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 4" /></div>
              <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
          </div>
        </div>
      </section>
    )
}

export default Volunteers;