import React, { useEffect } from 'react';
// import './paypal';
const Donate = () => {
    return (
        <section id="donate" className="parallax overlay overlay-5" style={{backgroundImage: 'url(./assets/images/bg/helping-hands.jpg)'}} data-aos="zoom-in-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-10 col-xs-12 offset-lg-6 offset-md-4  offset-sm-1">
              <div className="diffuse-shadow p-45px sm-p-25px donate-form-wrap opacity-5">
                <h3>Make a Donation Now</h3>
                <div className="divider-dashed m-25px-b" />
                {/* <p>Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction. As into ye then form.</p> */}
                <form className="m-30px-t">
                  {/* <div className="form-group">
                    <label htmlFor="donateFor">I Want to Donate</label>
                    <select id="donateFor" className="form-control">
                      <option selected value="org">For organization</option>
                      <option value="ITnuoiIT">For ITnuoiIT</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="donateCurrency">Currency</label>
                    <select id="donateCurrency" className="form-control">
                      <option selected value="VND">VND - Viet Nam Dong</option>
                      <option value="USD">USD - US Dollar</option>
                      <option value="CAD">CAD - Canadian Dollar</option>
                      <option value="AUD">AUD - Australian Dollar</option>
                      <option value="EUR">EUR - Australian Dollar</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="donateAmount">How much do you want to donate?</label>
                    <input type="number" className="form-control" id="donateAmount" placeholder="Enter amount" />
                  </div> */}
                  <div className="form-group">
                    {/* <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck" />
                      <label className="form-check-label" htmlFor="gridCheck">
                        I want to donate this amount every month
                      </label>
                    </div> */}

                    <form action="https://www.sandbox.paypal.com/donate" method="post" target="_top">
                      <input type="hidden" name="hosted_button_id" value="BPUVMLWMPNBUL" />
                      <input type="submit" className="btn btn-default" value="Donate now" />
                    </form>
                    {/* <div id="paypal-button"></div> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Donate;