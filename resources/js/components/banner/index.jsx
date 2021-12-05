import React from 'react';

const Banner = (props) => {
    return (
        <section id="section_0">
            <div className="swiper-container hero-swiper swiper-container-horizontal">
                <div className="swiper-wrapper">
                    {props.bannerItems &&
                        props.bannerItems.map((item, index) => (
                            <div
                                key={index}
                                className="swiper-slide"
                                style={{ width: '783px' }}
                            >
                                <div
                                    className="hero-area hero-slide"
                                    style={{
                                        backgroundImage: `url(${item.background})`,
                                    }}
                                >
                                    <div className="overlay overlay-6" />
                                    <div className="container">
                                        <div className="row full-height align-items-center text-center">
                                            <div className="col p-100px-t p-50px-b slider-text">
                                                <h4 className="tlt1">
                                                    <ul
                                                        className="texts"
                                                        style={{
                                                            display: 'none',
                                                        }}
                                                    >
                                                        <li className="current">
                                                            {item.subTitle}
                                                        </li>
                                                    </ul>
                                                </h4>
                                                <div className="divider-circle mt-4" />
                                                <h2 className="text-capitalize m-35px-tb tlt">
                                                    <ul
                                                        className="texts"
                                                        style={{
                                                            display: 'none',
                                                        }}
                                                    >
                                                        <li className="current">
                                                            {item.title}
                                                        </li>
                                                    </ul>
                                                </h2>
                                                <form
                                                    className="hero-btn-wrapper"
                                                    action="https://www.sandbox.paypal.com/donate"
                                                    method="post"
                                                    target="_top"
                                                >
                                                    <a
                                                        href="#contact"
                                                        className="btn btn-default btn-default-outline"
                                                    >
                                                        Contact us
                                                    </a>
                                                    <input
                                                        type="hidden"
                                                        name="hosted_button_id"
                                                        value="BPUVMLWMPNBUL"
                                                    />
                                                    <button
                                                        type="submit"
                                                        className="btn btn-default"
                                                    >
                                                        Donate now
                                                    </button>
                                                </form>
                                                {/* <div className="hero-btn-wrapper">
                        {item.buttonItems && item.buttonItems.map((button, idx)=>(
                          <a key={idx} href={button.buttonLink} className={button.buttonClass}>{button.buttonText}</a>
                        ))}
                      </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                    <span
                        className="swiper-pagination-bullet"
                        tabIndex={0}
                        role="button"
                        aria-label="Go to slide 1"
                    />
                    <span
                        className="swiper-pagination-bullet swiper-pagination-bullet-active"
                        tabIndex={0}
                        role="button"
                        aria-label="Go to slide 2"
                    />
                    <span
                        className="swiper-pagination-bullet"
                        tabIndex={0}
                        role="button"
                        aria-label="Go to slide 3"
                    />
                </div>
                {/* Pagenation */}
                <span
                    className="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                />
            </div>
        </section>
    );
};

export default Banner;
