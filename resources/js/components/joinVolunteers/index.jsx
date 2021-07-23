import React from 'react';

const JoinVolunteers = (props) => {
    return (
      <section id="JoinVolunteers" className={`p-80px-tb ${props.bg}`} data-aos={props.aos}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 sm-m-35px-b">
              <h2>{props.title}</h2>
              <div className="divider-dashed m-25px-b" />
              <p className="m-25px-b" dangerouslySetInnerHTML={{ __html: props.desc}}>
              </p>
              <div className="row">
                <div className="col-sm-6">
                  <div className="asset-box">
                    <i className="icofont-holding-hands" />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <a className="btn btn-default" href="#contact">Join now</a>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src={props.file} alt="" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default JoinVolunteers;