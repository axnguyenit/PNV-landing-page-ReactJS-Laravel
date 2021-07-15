import React, {useState, useEffect} from 'react';

const About = (props) => {
    return (
        <section id="about" className="p-80px-tb bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 align-self-center">
              <img className="img-responsive" src={props.file} alt="Helping hands" />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 align-self-center">
              <div className="about-box diffuse-shadow p-45px sm-p-25px bg-white">
                <h2>{props.title}</h2>
                <div className="divider-dashed m-25px-b" />
                <p dangerouslySetInnerHTML={{ __html: props.desc }}></p>
                {/* {props.desc} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About;