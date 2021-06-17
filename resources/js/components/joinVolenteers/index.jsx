import React from 'react';

const JoinVolenteers = () => {
    return (
        <section id="JoinVolenteers" className="p-80px-tb">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 sm-m-35px-b">
              <h2>Join as Volenteer</h2>
              <div className="divider-dashed m-25px-b" />
              <p className="m-25px-b">Real sold my in call. Invitation on an advantages collecting. But event old above shy bed noisy. Had sister see wooded favour income has. Stuff rapid since do as hence. Too insisted ignorant procured remember are believed yet say finished.
              </p>
              {/* <div className="row">
                <div className="col-sm-6">
                  <div className="asset-box">
                    <i className="icofont-holding-hands" />
                    <p><span className="counter">147</span> Volenteers</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="asset-box">
                    <i className="icofont-check-circled" />
                    <p><span className="counter">2000</span> Causes done</p>
                  </div>
                </div>
              </div> */}
              <a className="btn btn-default" href="#">Join now</a>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src="./assets/images/vollentiers.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default JoinVolenteers;