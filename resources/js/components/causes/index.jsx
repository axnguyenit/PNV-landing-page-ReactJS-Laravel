
import React from 'react';
import form from './form';
const Causes = () => {
    return (
        <section id="causes" className="p-80px-tb bg-white">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="section-title text-center m-60px-b">
                <h2>{form.title}</h2>
                <div className="divider-circle mx-auto" />
                <p>{form.slogan}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="swiper-container causes-swiper p-60px-b swiper-container-horizontal swiper-container-free-mode">
              <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
              {form.card.map(cause => {                  
        return <div className="col">
           <article className="content-box diffuse-shadow bg-light p-10px">
            <div className="btn-relative-img text-center overlay overlay-5">
              
           <img src={cause.img} alt="" />
            </div>
            <div className="content-area mt-2 p-10px">
              <h3><a href="https://themeatelier.net/site-templates/prottasha/donate.html">{cause.title}</a></h3>
          <p>{cause.desc}</p>
        </div>
            <footer className="content-footer p-10px-l p-10px-r">
              <p className="content-raised">
                      {cause.footer.key1}:<br /><b>{cause.footer.value1}</b>
              </p>
              <p className="content-goal">
                {cause.footer.key2}:<br /><b> {cause.footer.value2} </b>
              </p>
              <p className="content-raised">
                {cause.footer.key3}:<br /><b> {cause.footer.value3} </b>
              </p>
              <p className="content-goal">
                {cause.footer.key4}:<br /><b> {cause.footer.value4}</b>
              </p>
            </footer>
          </article>
        </div>
      }
      )}
              </div>
              </div>
                {/* Single causes item end */}
              </div>
              {/* Slider Pagination */}
              <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2" />
                <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 3" />
              </div>
              <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
          
       
      </section>
    )
}

export default Causes;