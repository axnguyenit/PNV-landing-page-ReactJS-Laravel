import React from 'react';
const CardMilestones = (props) => {
    return (
        <div className="swiper-slide col-lg-4 col-md-6 col-sm-12 m-25px-b">
            <div className="single-blog-wrap">
                <div className="single-blog">
                    <img src={props.img} alt="" />
                    <div className="post-content">
                        <p>{props.description}</p>
                    </div>
                </div>
                <div className="post-header">
                    <a className="date" href>
                        <span className="day">{props.year}</span>
                        <span className="month">{props.month}</span>
                    </a>
                    <h3>{props.title}</h3>
                </div>
            </div>
        </div>
    );
    
}
export default CardMilestones;