import React from 'react';

const VideoSection = () => {
    return (
        <section className="p-100px-tb overlay overlay-6 parallax" style={{backgroundImage: 'url(./assets/images/bg/video-promo.jpg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-center promo-video">
              <h1 className="m-0px-b">Let's Learn more</h1>
              <h4 className="m-30px-b sm-m-25px-b">Want to learn more about us? Let's check the video</h4>
              <div className="video-btn">
                <button className="js-modal-btn" data-video-id="QIYcFth8ty4">
                  <i className="icofont-video-alt" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default VideoSection;