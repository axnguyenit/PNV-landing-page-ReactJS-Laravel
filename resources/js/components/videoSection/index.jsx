import React from 'react';

const VideoSection = (props) => {
    return (
        <section
            className="video p-100px-tb overlay overlay-6 parallax"
            style={{ backgroundImage: `url(${props.file})` }}
            data-aos={props.aos}
        >
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2 text-center promo-video">
                        <h1 className="m-0px-b">{props.title}</h1>
                        <h4
                            className="m-30px-b sm-m-25px-b"
                            dangerouslySetInnerHTML={{ __html: props.slogan }}
                        ></h4>
                        <div className="video-btn">
                            {/* Model Video Start */}
                            <div
                                className="modal fade"
                                id="modal1"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel"
                                aria-hidden="true"
                            >
                                <div
                                    className="modal-dialog modal-lg"
                                    role="document"
                                >
                                    {/*Content*/}
                                    <div className="modal-content">
                                        {/*Body*/}
                                        <div className="modal-body mb-0 p-0">
                                            <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                                <iframe
                                                    className="embed-responsive-item"
                                                    src={props.videoUrl}
                                                    allowFullScreen
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/*/.Content*/}
                                </div>
                            </div>
                            <button
                                className="js-modal-btn img-fluid z-depth-1"
                                alt="video"
                                data-toggle="modal"
                                data-target="#modal1"
                            >
                                <i className="icofont-video-alt" />
                            </button>
                            {/* Model Video End */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
