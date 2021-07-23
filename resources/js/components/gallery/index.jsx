import React from 'react';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const Gallery = (props) => {
    return (
      <SimpleReactLightbox>
        <SRLWrapper >
          <section id={props.title} className={`p-80px-tb ${props.bg}`} data-aos={props.aos}>
            <div className="container">
              <div className="row">
                <div className="col-sm-8 offset-sm-2">
                  <div className="section-title text-center m-60px-b">
                    <h2>{props.title}</h2>
                    <div className="divider-circle mx-auto" />
                    <p dangerouslySetInnerHTML={{ __html: props.slogan}}></p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <ul className="gallery-filter text-center">
                    <li><a className="btn btn-default btn-small active" href="#" data-filter="*">All</a></li>
                    {props.tasks ? props.tasks.map((item, index) => (
                        <li key={index}><a className="btn btn-default btn-small" href="#" data-filter={`.${item.filter}`}>{item.filter}</a></li>
                    )) : null}
                  </ul>
                  {/*/#gallery-filter*/}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="gallery-boxes" style={{position: 'relative'}}>
                    {/* Single gallery box start */}
                    {props.tasks ? props.tasks.reverse().map((items) => {
                      return items.images ? items.images.reverse().map((item, index) => (
                        <div key={index} className={`each-box col-lg-3 col-md-4 col-sm-12 gallery-box ${items.filter}`} style={{position: 'absolute', left: '0px', top: '0px'}}>
                          <div className="inner gray-bg text-center">
                              <a href={item.file}>
                                <img src={item.file} alt={items.filter} className="img-responsive" />
                              </a>
                          </div>
                        </div>
                      )) : null
                    }) : null}
                    {/* Single gallery box end */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SRLWrapper>
      </SimpleReactLightbox>
    )
}

export default Gallery;