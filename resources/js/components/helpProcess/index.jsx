import React from 'react';

const HelpProcess = () => {
    return (
        <section
            id="HelpProcess"
            className="p-80px-tb bg-light"
            data-aos="zoom-in-up"
        >
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <div className="section-title text-center m-60px-b">
                            <h2>Helping process</h2>
                            <div className="divider-circle mx-auto" />
                            <p>
                                Smile spoke total few great had never their too.
                                Amongst moments do in arrived at my replied.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="process-wrap">
                <div className="container">
                    <div className="row">
                        {/* Single process item start */}
                        <div className="process-item text-center col-md-3 col-sm-6 sm-m-15px-tb">
                            <div className="process-circle">
                                <p>1</p>
                            </div>
                            <div className="icon-outer">
                                <i className="icofont-search-2" />
                            </div>
                            <h4 className="m-35px-t sm-m-15px-t">
                                Find the cause
                            </h4>
                        </div>
                        {/* Single process item end */}
                        {/* Single process item start */}
                        <div className="process-item text-center col-md-3 col-sm-6 sm-m-15px-tb">
                            <div className="process-circle">
                                <p>2</p>
                            </div>
                            <div className="icon-outer">
                                <i className="icofont-holding-hands" />
                            </div>
                            <h4 className="m-35px-t sm-m-15px-t">
                                Make a donation
                            </h4>
                        </div>
                        {/* Single process item end */}
                        {/* Single process item start */}
                        <div className="process-item text-center col-md-3 col-sm-6 sm-m-15px-tb">
                            <div className="process-circle">
                                <p>3</p>
                            </div>
                            <div className="icon-outer">
                                <i className="icofont-slidshare" />
                            </div>
                            <h4 className="m-35px-t sm-m-15px-t">
                                Share with peoples
                            </h4>
                        </div>
                        {/* Single process item end */}
                        {/* Single process item start */}
                        <div className="process-item text-center col-md-3 col-sm-6 sm-m-15px-tb">
                            <div className="process-circle">
                                <p>4</p>
                            </div>
                            <div className="icon-outer">
                                <i className="icofont-simple-smile" />
                            </div>
                            <h4 className="m-35px-t sm-m-15px-t">
                                See smiling faces
                            </h4>
                        </div>
                        {/* Single process item end */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpProcess;
