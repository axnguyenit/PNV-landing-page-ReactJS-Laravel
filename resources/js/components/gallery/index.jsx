import React from 'react';

const Gallery = (props) =>  {
  const idTag = "gallery";
    return (
        <section id={idTag} className="p-80px-tb">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="section-title text-center m-60px-b">
                <h2>Our gallery</h2>
                <div className="divider-circle mx-auto" />
                <p>{props.slogan}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <ul className="gallery-filter text-center">
                <li><a className="btn btn-default btn-small active" href="#" data-filter="*">All</a></li>
                {
                  props.btns.map(btn => (
                    <li><a className="btn btn-default btn-small" href="#" data-filter={`.${btn}`}>{btn}</a></li>

                  ))
                }
              </ul>
              {/*/#gallery-filter*/}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="gallery-boxes" style={{position: 'relative', height: '2156.25px'}}>
                {
                  props.images.map(img => (
                    <div className={`each-box col-lg-3 col-md-4 col-sm-12 gallery-box ${img.img_type}`} style={{position: 'absolute', left: '0px', top: '0px'}}>
                      <div className="inner gray-bg text-center">
                        <div className="box-hover">
                          <img src={img.img} alt="Helping by charity" className="img-responsive" />
                          <div className="mask">
                            <div className="mask-inner">
                              <h3 className="title">{img.title}</h3>
                              <p className="pera-text">{img.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End: .inner */}
                    </div>
                ))
              }
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Gallery;