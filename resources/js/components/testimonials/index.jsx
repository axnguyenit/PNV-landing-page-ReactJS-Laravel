import React from 'react';
import CardTestimonial from "./CardTestimonials";
const Testimonials = (props) => {
    return (
        <section id="testimonials" className="p-80px-tb bg-white">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="section-title text-center m-60px-b">
                <h2>{props.title}</h2>
                <div className="divider-circle mx-auto" />
                <p>{props.description}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="swiper-container testimonialSwiper p-50px-b swiper-container-horizontal">
              <div className="swiper-wrapper" style={{transform: 'translate3d(-1440px, 0px, 0px)', transitionDuration: '0ms'}}>
              {
                props.card.map((card) => (
                  <CardTestimonial {...card} />
                ))
              } 
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