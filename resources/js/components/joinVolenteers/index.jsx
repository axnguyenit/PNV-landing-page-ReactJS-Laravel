import React, {useState, useEffect} from 'react';

const JoinVolenteers = (props) => {
    return (
        <section id="JoinVolenteers" className="p-80px-tb">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 sm-m-35px-b">
              <h2>{props.title}</h2>
              <div className="divider-dashed m-25px-b" />
              <p>{props.desc}</p>
              <a className="btn btn-default" href="#">Join now</a>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src={props.image} alt="" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default JoinVolenteers;