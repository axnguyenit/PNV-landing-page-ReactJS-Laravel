import React from 'react';
import CardMilestones from './card';
const Milestones = (props) => {
  // const card = props.card;
  return (
    <section id="blog" className="p-80px-tb bg-light">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <div className="section-title text-center m-60px-b">
              {/* <h2>Important Milestones</h2> */}
              <h2>{props.title}</h2>
              <div className="divider-circle mx-auto" />
              <p>{props.desc}</p>
              {/* <p>With my them if up many. Lain week nay she them her she. Extremity so attending objection as engrossed gentleman something.</p> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="swiper-container causes-swiper p-60px-b swiper-container-horizontal swiper-container-free-mode">
            <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
              {
                props.card.map((card) => (
                  <CardMilestones {...card} />
                ))
              }

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