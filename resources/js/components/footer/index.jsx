import React from 'react';


const Footer = (props) => {


    return (
        <>
        <section id="footer-top" className="p-80px-tb bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="row">
                  <div className="single-widget col-md-7 col-sm-6">
                    <a className="widget-logo" href="#">
                      <img src={props.logo} alt="" />
                    </a>
                    <p>
                      {props.desc.map((desc)=>(
                        <p>{desc}</p>
                      ))}
                    </p>
                  </div>
                  <div className="single-widget col-md-5 col-sm-6">
                    <h3>Quick links</h3>
                    <ul>
                      {props.quickLink.map((quic)=>(
                        <li><a href={quic.link}>{quic.name}</a></li>
                      ))}
                  
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="row">
                  <div className="single-widget col-md-6 col-sm-6">
                    <h3>Milestones</h3>
                    <ul className="recent-post">
                    {props.milestones.map((mile)=>(
                      <li>
                      <a href="#">{mile}</a>
                    </li>
                      ))}
                      
                    </ul>
                  </div>
                  <div className="single-widget col-md-6 col-sm-6">
                    <h3>Photo Gallery</h3>
                    <ul className="photo-gallery">
                    {props.img.map((img)=>(
                      <li>
                      <a href="#"><img src={img} alt="" /></a>
                    </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <footer id="footer" className="p-30px-tb bg-white">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <p className="copyright-text">© {props.year} PNV - Passerelles numériques Vietnam | Made with love by: <a>Team Spirit</a></p>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
}

export default Footer;