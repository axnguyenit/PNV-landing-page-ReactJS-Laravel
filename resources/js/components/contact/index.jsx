import React from 'react';

const Contact = () => {
    return (
      <div id="contact" className="p-80px-tb bg-white" data-aos="zoom-in-up">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="section-title text-center m-60px-b">
                <h2>Contact Form</h2>
                <div className="divider-circle mx-auto" />
                <p>Folly was these three and songs arose whose. Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12 m-25px-b">
              <div className="contact-form-box bg-light">
                <form id="contact-form" method="post" action="https://themeatelier.net/site-templates/prottasha/php/sendmail.php">
                  <div className="message col">
                    <p className="email-loading alert alert-warning"><img src="./assets/images/loading.gif" alt="" />&nbsp;&nbsp;&nbsp;Sending...</p>
                    <p className="email-success alert alert-success"><i className="icon icon-icon-check-alt2" /> Your quote has successfully been sent.</p>
                    <p className="email-failed alert alert-danger"><i className="icon icon-icon-close-alt2" /> Something went wrong!</p>
                  </div>
                  <div className=" mb13">
                    <input name="name" className="contact-name" id="contact-name" type="text" placeholder="Your Name" required />
                  </div>
                  <div className="mb13">
                    <input name="email" className="contact-email" id="contact-email" type="email" placeholder="Your Email" required />
                  </div>
                  <div className="mb13">
                    <input name="subject" className="contact-subject" id="contact-subject" type="text" placeholder="Subject" required />
                  </div>
                  <div className="mb30">
                    <textarea name="message" className="contact-message" id="contact-message" placeholder="Your Message" required defaultValue={""} />
                  </div>
                  <button className="btn btn-default">Send Now</button>
                </form>
              </div>
            </div>
            {/* End contact form area*/}
            <div className="col-lg-4 col-md-6 col-sm-12 m-25px-b">
              <div className="address-wrap bg-light p-30px">
                <ul>
                  {/* SELECT FROM DATABASE */}
                  <li><span>Address:</span>99 To Hien Thanh <br /> Da Nang, Vietnam</li>
                  <li><span>Phone:</span><a href="#">+84 236 3888 503</a></li>
                  <li><span>Email:</span><a href="#"> info.vietnam@passerellesnumeriques.org</a></li>
                </ul>
                <h4>Connect our socials</h4>
                <ul className="nav light-icon social-icons">
                  <li><a href="#"><i className="icofont-facebook" /></a></li>
                  <li><a href="#"><i className="icofont-youtube" /></a></li>
                  <li><a href="#"><i className="icofont-skype" /></a></li>
                  <li><a href="#"><i className="icofont-linkedin" /></a></li>
                  <li><a href="#"><i className="icofont-instagram" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Contact;