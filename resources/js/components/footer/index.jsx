import React from 'react';

const Footer = () => {
    return (
        <>
        <section id="footer-top" className="p-80px-tb bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="row">
                  <div className="single-widget col-md-7 col-sm-6">
                    <a className="widget-logo" href="#">
                      <img src="./assets/images/logo-pn.png" alt="" />
                    </a>
                    <p>Unpacked now declared put you confined daughter improved. </p>
                    <p>Wonder bed elinor family secure met. It want gave west into high no in. Depend repair met before man admire see and.</p>
                  </div>
                  <div className="single-widget col-md-5 col-sm-6">
                    <h3>Quick links</h3>
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Donors</a></li>
                      <li><a href="#">Volunteers</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="row">
                  <div className="single-widget col-md-6 col-sm-6">
                    <h3>Latest posts</h3>
                    <ul className="recent-post">
                      <li><a href="#">10 years of clelbration for helping peoples</a></li>
                      <li><a href="#">We proudly completed 2010 causes within 3 years</a></li>
                      <li><a href="#">Peoples in south asia is ingressing day by day</a></li>
                      <li><a href="#">10 years of clelbration for helping peoples</a></li>
                    </ul>
                  </div>
                  <div className="single-widget col-md-6 col-sm-6">
                    <h3>Photo Gallery</h3>
                    <ul className="photo-gallery">
                      <li>
                        <a href="#"><img src="./assets/images/1(1).jpg" alt="" /></a>
                      </li>
                      <li>
                        <a href="#"><img src="./assets/images/2(1).jpg" alt="" /></a>
                      </li>
                      <li>
                        <a href="#"><img src="./assets/images/3(1).jpg" alt="" /></a>
                      </li>
                      <li>
                        <a href="#"><img src="./assets/images/4(1).jpg" alt="" /></a>
                      </li>
                      <li>
                        <a href="#"><img src="./assets/images/5.jpg" alt="" /></a>
                      </li>
                      <li>
                        <a href="#"><img src="./assets/images/6.jpg" alt="" /></a>
                      </li>
                      <li>
                        <a href="#"><img src="./assets/images/7.jpg" alt="" /></a>
                      </li>
                      <li>
                        <a href="#"><img src="./assets/images/8.jpg" alt="" /></a>
                      </li>
                      <li>
                        <a href="#"><img src="./assets/images/9.jpg" alt="" /></a>
                      </li>
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
                <p className="copyright-text">© 2021 PNV - Passerelles numériques Vietnam | Made with love by: <a>Team Spirit</a></p>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
}

export default Footer;