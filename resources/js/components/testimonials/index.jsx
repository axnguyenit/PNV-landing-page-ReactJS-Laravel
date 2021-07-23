import React from 'react';

const Testimonials = (props) => {
    return (
      <section id={props.title} className={`p-80px-tb ${props.bg}`} data-aos={props.aos}>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="section-title text-center m-60px-b">
                <h2>{props.title}</h2>
                <div className="divider-circle mx-auto" />
                <p dangerouslySetInnerHTML={{ __html: props.desc }}></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="swiper-container testimonialSwiper p-50px-b swiper-container-horizontal">
              <div className="swiper-wrapper" style={{transform: 'translate3d(-1440px, 0px, 0px)', transitionDuration: '0ms'}}>
                {props.tasks ? props.tasks.map((testimonial, index) => (
                  <div key={index} className="swiper-slide" style={{width: '720px'}}>
                    <div className="row single-testimonial">
                      <div className="col-sm-12 col-md-5 col-lg-3 align-self-center">
                        <img className="img-thumbnail" src={testimonial.file} alt="" />
                      </div>
                      <div className="col-sm-12 col-md-7 col-lg-9 align-self-center">
                        <div className="p-30px testimonial-content bg-white">
                          <h3>{testimonial.name}</h3>
                          <blockquote>
                            {testimonial.testimonial}
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                )) : null}
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

export default Testimonials;