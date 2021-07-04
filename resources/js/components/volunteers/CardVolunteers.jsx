import React from 'react';
const CardVolunteers =(props) =>{
    return(
        <div className="swiper-slide swiper-slide-active" style={{width: '360px'}}>
                  <div className="col">
                    <div className="each-box">
                      <div className="inner gray-bg text-center">
                        <div className="box-hover">
                          <img src={props.image} alt="Children" className="img-responsive" />
                          <div className="mask">
                            <div className="mask-inner">
                              <h3 className="title">{props.name}</h3>
                              <p className="pera-text">{props.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End: .inner */}
                </div>
            </div>
        </div>
    )
}
export default CardVolunteers;
