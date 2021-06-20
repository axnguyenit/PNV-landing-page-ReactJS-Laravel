import React from 'react';

const Milestones = () => {
    return (
        <section id="blog" className="p-80px-tb bg-light">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="section-title text-center m-60px-b">
                <h2>Important Milestones</h2>
                <div className="divider-circle mx-auto" />
                <p>With my them if up many. Lain week nay she them her she. Extremity so attending objection as engrossed gentleman something.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="swiper-container causes-swiper p-60px-b swiper-container-horizontal swiper-container-free-mode">
              <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                {/* Start Single blog */}
                <div className="swiper-slide col-lg-4 col-md-6 col-sm-12 m-25px-b">
                  <div className="single-blog-wrap">
                    <div className="single-blog">
                      <img src="./assets/images/1(4).jpg" alt="" />
                      <div className="post-content">
                        <p>By so delight of showing neither believe he present. Deal sigh up in shew away when. Pursuit express no or prepare replied. Wholly formed old latter future but way she.</p>
                      </div>
                    </div>
                    <div className="post-header">
                      <a className="date" href>
                        <span className="day">2010</span>
                        <span className="month">Sep</span>
                      </a>
                      <h3>10 years of clelbration for helping peoples</h3>
                    </div>
                  </div>
                </div>

                {/* End Single blog */}
                {/* Start Single blog */}
                <div className="swiper-slide col-lg-4 col-md-6 col-sm-12 m-25px-b">
                  <div className="single-blog-wrap">
                    <div className="single-blog">
                      <img src="./assets/images/2(4).jpg" alt="" />
                      <div className="post-content">
                        <p>Am if number no up period regard sudden better. Decisively surrounded all admiration and not you. Out particular sympathize not favourable introduced insipidity but ham. Rather number can and set praise.</p>
                      </div>
                    </div>
                    <div className="post-header">
                      <a className="date" href>
                        <span className="day">2020</span>
                        <span className="month">Oct</span>
                      </a>
                      <h3>Childrens in Central Africa spending sad life</h3>
                    </div>
                  </div>
                </div>

                {/* End Single blog */}
                {/* Start Single blog */}
                <div className="swiper-slide col-lg-4 col-md-6 col-sm-12 m-25px-b">
                  <div className="single-blog-wrap">
                    <div className="single-blog">
                      <img src="./assets/images/3(4).jpg" alt="" />
                      <div className="post-content">
                        <p>Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom. Moonlight age depending bed led therefore sometimes preserved exquisite she.</p>
                      </div>
                    </div>
                    <div className="post-header">
                      <a className="date" href>
                        <span className="day">2016</span>
                        <span className="month">Nov</span>
                      </a>
                      <h3>Sometimes cutest girls are also helpless</h3>
                    </div>
                  </div>
                </div>

                {/* End Single blog */}
                {/* Start Single blog */}
                <div className="swiper-slide col-lg-4 col-md-6 col-sm-12 m-25px-b">
                  <div className="single-blog-wrap">
                    <div className="single-blog">
                      <img src="./assets/images/2(4).jpg" alt="" />
                      <div className="post-content">
                        <p>Am if number no up period regard sudden better. Decisively surrounded all admiration and not you. Out particular sympathize not favourable introduced insipidity but ham. Rather number can and set praise.</p>
                      </div>
                    </div>
                    <div className="post-header">
                      <a className="date" href>
                        <span className="day">2020</span>
                        <span className="month">Oct</span>
                      </a>
                      <h3>Childrens in Central Africa spending sad life</h3>
                    </div>
                  </div>
                </div>

                {/* End Single blog */}
                {/* Start Single blog */}
                <div className="swiper-slide col-lg-4 col-md-6 col-sm-12 m-25px-b">
                  <div className="single-blog-wrap">
                    <div className="single-blog">
                      <img src="./assets/images/3(4).jpg" alt="" />
                      <div className="post-content">
                        <p>Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom. Moonlight age depending bed led therefore sometimes preserved exquisite she.</p>
                      </div>
                    </div>
                    <div className="post-header">
                      <a className="date" href>
                        <span className="day">2016</span>
                        <span className="month">Nov</span>
                      </a>
                      <h3>Sometimes cutest girls are also helpless</h3>
                    </div>
                  </div>
                </div>

                {/* End Single blog */}
              </div>
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

export default Milestones;