import React from 'react';

const Partners = (props) => {
    return (
      <section id={props.title} className={`p-80px-tb ${props.bg}`} data-aos={props.aos}>
          <div className="container">
            <div className="section-title text-center m-60px-b">
              <h2>{props.title}</h2>
              <div className="divider-circle mx-auto" />
              <p dangerouslySetInnerHTML={{ __html: props.desc }}></p>
            </div>
            <div className="row">
              <div className="swiper-container causes-swiper p-60px-b swiper-container-horizontal swiper-container-free-mode">
                <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                  {props.tasks ? props.tasks.map((partner, index) => (
                    <div key={index} className="swiper-slide col-lg-4 col-sm-6">
                      <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                        <img src={partner.file} alt="" />
                        <a href={partner.url}>Visit site <i className="icofont-long-arrow-right" /></a>
                      </div>
                    </div>
                  )) : null}
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