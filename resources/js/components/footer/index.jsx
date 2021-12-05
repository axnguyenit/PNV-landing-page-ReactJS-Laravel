import React from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

const Footer = (props) => {
    return (
        <>
            <section
                id="footer-top"
                className="p-80px-tb bg-light"
                data-aos={props.aos}
            >
                <SimpleReactLightbox>
                    <SRLWrapper>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="row">
                                        <div className="single-widget col-md-7 col-sm-6">
                                            <a className="widget-logo" href="#">
                                                <img
                                                    src={props.logo}
                                                    alt="PNV"
                                                />
                                            </a>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: props.slogan,
                                                }}
                                            ></div>
                                        </div>
                                        {props.links ? (
                                            <div className="single-widget col-md-5 col-sm-6">
                                                <h3>Quick links</h3>
                                                <ul>
                                                    {props.links.map(
                                                        (item, index) => (
                                                            <li key={index}>
                                                                <a
                                                                    href={
                                                                        item.link
                                                                    }
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="row">
                                        {props.milestones ? (
                                            <div className="single-widget col-md-6 col-sm-6">
                                                <h3>Milestones</h3>
                                                <ul className="recent-post">
                                                    {props.milestones.map(
                                                        (item, index) => (
                                                            <li key={index}>
                                                                {item.milestone}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        ) : null}
                                        {props.gallery ? (
                                            <div className="single-widget col-md-6 col-sm-6">
                                                <h3>Photo Gallery</h3>
                                                <ul className="photo-gallery">
                                                    {props.gallery.map(
                                                        (item, index) => (
                                                            <li key={index}>
                                                                <a
                                                                    href={
                                                                        item.img
                                                                    }
                                                                >
                                                                    <img
                                                                        src={
                                                                            item.img
                                                                        }
                                                                        alt="PNV"
                                                                    />
                                                                </a>
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SRLWrapper>
                </SimpleReactLightbox>
            </section>

            {props.copyright ? (
                <footer id="footer" className="p-30px-tb bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <p className="copyright-text">{`© ${props.copyright}`}</p>
                            </div>
                        </div>
                    </div>
                </footer>
            ) : null}
        </>
    );
};

export default Footer;
