import React from 'react';

const Causes = (props) => {
    return (
      <section id={props.title} className={`p-80px-tb ${props.bg}`} data-aos={props.aos}>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="section-title text-center m-60px-b">
                <h2>{props.title}</h2>
                <div className="divider-circle mx-auto" />
                {/* <p>{form.slogan}</p> */}
                <p dangerouslySetInnerHTML={{ __html: props.desc }}></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="swiper-container causes-swiper p-60px-b swiper-container-horizontal swiper-container-free-mode">
              <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                {props.tasks ? props.tasks.map((cause, index) => (
                  <div key={index} className="swiper-slide swiper-slide-active" style={{width: '360px'}}>
                    <div className="col">
                      <article className="content-box diffuse-shadow bg-light p-10px">
                        <div className="btn-relative-img text-center">
                          <img src={cause.file} alt="PNV" />
                          <form className="hero-btn-wrapper" action="https://www.sandbox.paypal.com/donate" method="post" target="_top">
                            <input type="hidden" name="hosted_button_id" value="BPUVMLWMPNBUL" />
                            <button type="submit" className="btn btn-default btn-small">Donate</button>
                          </form>
                        </div>
                        <div className="content-area mt-2 p-10px">
                          <h3><a href="#">{cause.title}</a></h3>
                          <p dangerouslySetInnerHTML={{ __html: cause.desc }}></p>
                        </div>
                        <footer className="content-footer p-10px-l p-10px-r">
                          <p className="content-raised">
                          Raised<br /><b>{cause.raised}</b>
                          </p>
                          <p className="content-goal">
                          Goal<br /><b>{cause.goal}</b>
                          </p>
                          <p className="content-raised">
                          Donors<br /><b>{cause.donors}</b>
                          </p>
                          <p className="content-goal">
                          Time Left<br /><b>{cause.timeLeft}</b>
                          </p>
                        </footer>
                      </article>
                    </div>
                  </div>
                )) : null}
              </div>
              {/* Slider Pagination */}
              <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2" />
                <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 3" />
              </div>
              <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
          </div>
        </div>
      </section>
    )
}

export default Causes;