import React from 'react';
import './paypal2.js';

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
                  <div className="form-group">
                    <label htmlFor="donateFor">I Want to Donate</label>
                    <select id="donateFor" className="form-control">
                      <option selected>For helpless</option>
                      <option>For education</option>
                      <option>For victimes</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="donateCurrency">Currency</label>
                    <select id="donateCurrency" className="form-control">
                      <option selected>USD - U.S dollers</option>
                      <option>POUND - U.K pounds</option>
                      <option>CAD - Canadian doller</option>
                      <option>AUD - Austreliean Doller</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="donateAmount">How much do you want to donate?</label>
                    <input type="number" className="form-control" id="donateAmount" placeholder="Enter amount" />
                  </div>
                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck" />
                      <label className="form-check-label" htmlFor="gridCheck">
                        I want to donate this amount every month
                      </label>
                    </div>

                    <form action="https://www.sandbox.paypal.com/donate" method="post" target="_top">
                      <input type="hidden" name="hosted_button_id" value="BPUVMLWMPNBUL" />
                      <input hidden type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                      <img alt="" border="0" src="https://www.sandbox.paypal.com/en_VN/i/scr/pixel.gif" width="1" height="1" />
                      <input type="submit" className="btn btn-default" value="Donate now" />
                    </form>

                    {/* <div id="paypal-button"></div> */}
                  </div>
                  {/* <a className="btn btn-default" href="#">Donate now</a> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Donate;