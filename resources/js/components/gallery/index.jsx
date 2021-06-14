import React from 'react';

const Gallery = () => {
    return (
        <section id="gallery" className="p-80px-tb">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="section-title text-center m-60px-b">
                <h2>Our gallery</h2>
                <div className="divider-circle mx-auto" />
                <p>Savings her pleased are several started females met. Short her not among being any. Thing of judge fruit charm views do.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <ul className="gallery-filter text-center">
                <li><a className="btn btn-default btn-small active" href="#" data-filter="*">All</a></li>
                <li><a className="btn btn-default btn-small" href="#" data-filter=".charity">Charity</a></li>
                <li><a className="btn btn-default btn-small" href="#" data-filter=".children">Children</a></li>
                <li><a className="btn btn-default btn-small" href="#" data-filter=".food">Food</a></li>
                <li><a className="btn btn-default btn-small" href="#" data-filter=".nature">Nature</a></li>
              </ul>
              {/*/#gallery-filter*/}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="gallery-boxes" style={{position: 'relative', height: '2156.25px'}}>
                <div className="each-box col-lg-4 col-md-6 col-sm-12 gallery-box charity" style={{position: 'absolute', left: '0px', top: '0px'}}>
                  <div className="inner gray-bg text-center">
                    <div className="box-hover">
                      <img src="./assets/images/1(1).jpg" alt="Helping by charity" className="img-responsive" />
                      <div className="mask">
                        <div className="mask-inner">
                          <h3 className="title">Helping by charity</h3>
                          <p className="pera-text">Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom.</p>
                          <ul className="nav light-icon gallery-icon">
                            <li><a href="./assets/images/1(1).jpg" className="gallery-lightbox" title="Porject name"><i className="icofont-image" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End: .inner */}
                </div>
                {/* Single gallery box box end */}
                <div className="each-box col-lg-4 col-md-6 col-sm-12 gallery-box children" style={{position: 'absolute', left: '345px', top: '0px'}}>
                  <div className="inner gray-bg text-center">
                    <div className="box-hover">
                      <img src="./assets/images/2(1).jpg" alt="Help for child" className="img-responsive" />
                      <div className="mask">
                        <div className="mask-inner">
                          <h3 className="title">Helping for child</h3>
                          <p className="pera-text">Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom.</p>
                          <ul className="nav light-icon gallery-icon">
                            <li><a href="./assets/images/2(1).jpg" className="gallery-lightbox" title="Porject name"><i className="icofont-image" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End: .inner */}
                </div>
                {/* Single gallery box box end */}
                {/* Single gallery box box end */}
                <div className="each-box col-lg-4 col-md-6 col-sm-12 gallery-box food" style={{position: 'absolute', left: '0px', top: '431px'}}>
                  <div className="inner gray-bg text-center">
                    <div className="box-hover">
                      <img src="./assets/images/3(1).jpg" alt="Education help" className="img-responsive" />
                      <div className="mask">
                        <div className="mask-inner">
                          <h3 className="title">Helping for education</h3>
                          <p className="pera-text">Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom.</p>
                          <ul className="nav light-icon gallery-icon">
                            <li><a href="./assets/images/3(1).jpg" className="gallery-lightbox" title="Porject name"><i className="icofont-image" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End: .inner */}
                </div>
                {/* Single gallery box box end */}
                {/* Single gallery box box end */}
                <div className="each-box col-lg-4 col-md-6 col-sm-12 gallery-box nature" style={{position: 'absolute', left: '345px', top: '431px'}}>
                  <div className="inner gray-bg text-center">
                    <div className="box-hover">
                      <img src="./assets/images/4(1).jpg" alt="Nature" className="img-responsive" />
                      <div className="mask">
                        <div className="mask-inner">
                          <h3 className="title">Saveing nature</h3>
                          <p className="pera-text">Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom.</p>
                          <ul className="nav light-icon gallery-icon">
                            <li><a href="./assets/images/4(1).jpg" className="gallery-lightbox" title="Porject name"><i className="icofont-image" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End: .inner */}
                </div>
                {/* Single gallery box box end */}
                {/* Single gallery box box end */}
                <div className="each-box col-lg-4 col-md-6 col-sm-12 gallery-box charity" style={{position: 'absolute', left: '0px', top: '862px'}}>
                  <div className="inner gray-bg text-center">
                    <div className="box-hover">
                      <img src="./assets/images/5.jpg" alt="Charity" className="img-responsive" />
                      <div className="mask">
                        <div className="mask-inner">
                          <h3 className="title">Our charity</h3>
                          <p className="pera-text">Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom.</p>
                          <ul className="nav light-icon gallery-icon">
                            <li><a href="./assets/images/5.jpg" className="gallery-lightbox" title="Porject name"><i className="icofont-image" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End: .inner */}
                </div>
                {/* Single gallery box box end */}
                {/* Single gallery box box end */}
                <div className="each-box col-lg-4 col-md-6 col-sm-12 gallery-box children" style={{position: 'absolute', left: '345px', top: '862px'}}>
                  <div className="inner gray-bg text-center">
                    <div className="box-hover">
                      <img src="./assets/images/6.jpg" alt="Children" className="img-responsive" />
                      <div className="mask">
                        <div className="mask-inner">
                          <h3 className="title">Children are hopless</h3>
                          <p className="pera-text">Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom.</p>
                          <ul className="nav light-icon gallery-icon">
                            <li><a href="./assets/images/6.jpg" className="gallery-lightbox" title="Porject name"><i className="icofont-image" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End: .inner */}
                </div>
                {/* Single gallery box box end */}
                {/* Single gallery box box end */}
                <div className="each-box col-lg-4 col-md-6 col-sm-12 gallery-box food" style={{position: 'absolute', left: '0px', top: '1293px'}}>
                  <div className="inner gray-bg text-center">
                    <div className="box-hover">
                      <img src="./assets/images/7.jpg" alt="Food" className="img-responsive" />
                      <div className="mask">
                        <div className="mask-inner">
                          <h3 className="title">Food supplie</h3>
                          <p className="pera-text">Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom.</p>
                          <ul className="nav light-icon gallery-icon">
                            <li><a href="./assets/images/7.jpg" className="gallery-lightbox" title="Porject name"><i className="icofont-image" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End: .inner */}
                </div>
                {/* Single gallery box box end */}
                {/* Single gallery box box end */}
                <div className="each-box col-lg-4 col-md-6 col-sm-12 gallery-box nature" style={{position: 'absolute', left: '345px', top: '1293px'}}>
                  <div className="inner gray-bg text-center">
                    <div className="box-hover">
                      <img src="./assets/images/8.jpg" alt="Nature" className="img-responsive" />
                      <div className="mask">
                        <div className="mask-inner">
                          <h3 className="title">Save animales</h3>
                          <p className="pera-text">Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom.</p>
                          <ul className="nav light-icon gallery-icon">
                            <li><a href="./assets/images/8.jpg" className="gallery-lightbox" title="Porject name"><i className="icofont-image" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End: .inner */}
                </div>
                {/* Single gallery box box end */}
                {/* Single gallery box box end */}
                <div className="each-box col-lg-4 col-md-6 col-sm-12 gallery-box charity" style={{position: 'absolute', left: '0px', top: '1725px'}}>
                  <div className="inner gray-bg text-center">
                    <div className="box-hover">
                      <img src="./assets/images/9.jpg" alt="Charity" className="img-responsive" />
                      <div className="mask">
                        <div className="mask-inner">
                          <h3 className="title">Charity work</h3>
                          <p className="pera-text">Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom.</p>
                          <ul className="nav light-icon gallery-icon">
                            <li><a href="./assets/images/9.jpg" className="gallery-lightbox" title="Porject name"><i className="icofont-image" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End: .inner */}
                </div>
                {/* Single gallery box box end */}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Gallery;