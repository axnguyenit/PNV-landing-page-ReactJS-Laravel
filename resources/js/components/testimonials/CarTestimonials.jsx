const CardTestimonials =(props) =>{
    return(
               <div className="swiper-slide" style={{width: '720px'}}>
                  <div className="row single-testimonial">
                    <div className="col-sm-12 col-md-5 col-lg-3 align-self-center">
                      <img className="img-thumbnail" src={props.img} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-7 col-lg-9 align-self-center">
                      <div className="p-30px testimonial-content bg-white">
                        <h3>{props.name}</h3>
                        <blockquote>
                         {props.content}
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
    )
}
export default CardTestimonials;