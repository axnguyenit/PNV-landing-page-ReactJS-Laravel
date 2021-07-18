import React from 'react';

const Volunteers = (props) => {
    return (
      <section id={props.title} className={`p-80px-tb ${props.bg}`} data-aos={props.aos}>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="section-title text-center m-60px-b">
                <h2>{props.title}</h2>
                <div className="divider-circle mx-auto" />
                <p dangerouslySetInnerHTML={{ __html: props.desc}} ></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="swiper-container volunteers-swiper p-60px-b swiper-container-horizontal swiper-container-free-mode">
              <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                {props.tasks ? props.tasks.map(volunteer => (
                  <div className="swiper-slide swiper-slide-active" style={{width: '360px'}}>
                    <div className="col">
                      <div className="each-box">
                        <div className="inner gray-bg text-center">
                          <div className="box-hover">
                            <img src={volunteer.file} alt="Children" className="img-responsive" />
                            <div className="mask">
                              <div className="mask-inner">
                                <h3 className="title">{volunteer.name}</h3>
                                <p className="pera-text">Helping over {volunteer.year} years</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )) : null}
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