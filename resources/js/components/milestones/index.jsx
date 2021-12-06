import React from 'react';
import toSlug from '../toSlug';

const Milestones = (props) => {
    return (
        <div
            id={toSlug(props.title)}
            className={`p-80px-tb ${props.bg}`}
            // data-aos={props.aos}
        >
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <div className="section-title text-center m-60px-b">
                            <h2>{props.title}</h2>
                            <div className="divider-circle mx-auto" />
                            <p
                                dangerouslySetInnerHTML={{ __html: props.desc }}
                            ></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="swiper-container causes-swiper p-60px-b swiper-container-horizontal swiper-container-free-mode">
                        <div
                            className="swiper-wrapper"
                            style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                        >
                            {/* Start Single blog */}
                            {props.tasks
                                ? props.tasks.map((milestone, index) => (
                                      <div
                                          key={index}
                                          className="swiper-slide col-lg-4 col-md-6 col-sm-12 m-25px-b"
                                      >
                                          <div className="single-blog-wrap">
                                              <div className="single-blog">
                                                  <img
                                                      src={milestone.file}
                                                      alt=""
                                                  />
                                                  <div className="post-content">
                                                      <p>{milestone.desc}</p>
                                                  </div>
                                              </div>
                                              <div className="post-header">
                                                  <a className="date">
                                                      {milestone.date ? (
                                                          <>
                                                              {' '}
                                                              <span className="day">
                                                                  {
                                                                      milestone.date.split(
                                                                          '-',
                                                                      )[0]
                                                                  }
                                                              </span>
                                                              <span className="month">
                                                                  {
                                                                      milestone.date.split(
                                                                          '-',
                                                                      )[1]
                                                                  }
                                                              </span>{' '}
                                                          </>
                                                      ) : null}
                                                  </a>
                                                  <h3>{milestone.title}</h3>
                                              </div>
                                          </div>
                                      </div>
                                  ))
                                : null}

                            {/* End Single blog */}
                        </div>
                        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                            <span
                                className="swiper-pagination-bullet"
                                tabIndex={0}
                                role="button"
                                aria-label="Go to slide 1"
                            />
                            <span
                                className="swiper-pagination-bullet"
                                tabIndex={0}
                                role="button"
                                aria-label="Go to slide 2"
                            />
                            <span
                                className="swiper-pagination-bullet swiper-pagination-bullet-active"
                                tabIndex={0}
                                role="button"
                                aria-label="Go to slide 3"
                            />
                        </div>
                        <span
                            className="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Milestones;
