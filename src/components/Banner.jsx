import React,{useState} from 'react';
import imgBanner from '../assets/img/banner.jpg'; 
import imgBanner2 from '../assets/img/banner3.png';
import imgBanner4 from '../assets/img/banner4.png';

const Banner = () => {
    return(
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={imgBanner} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={imgBanner2} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={imgBanner4} class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
</div>
    );
};

export default Banner;