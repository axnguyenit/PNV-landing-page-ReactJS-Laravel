import React from 'react';

const CardPartner = (props) => {
    return (
        <div className="swiper-slide col-lg-4 col-sm-6">
            <div className="donor-box corporate-donor m-20px-t m-20px-b sm-m-0px-t">
                <img src={props.img} alt="" />
                <a href={props.link}>Visit site <i className="icofont-long-arrow-right" /></a>
            </div>
        </div>
    );
}
export default CardPartner;