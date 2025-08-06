import { useEffect, useState, useRef } from 'react'

import accounting from '../../assets/images/portfolio/slider-accounting.jpg'
import capacitance from '../../assets/images/portfolio/slider-capacitance.jpg'
import commapp_v3 from '../../assets/images/portfolio/slider-commapp_v3.jpg'
import corinthians from '../../assets/images/portfolio/slider-corinthians.jpg'
import ezh_web from '../../assets/images/portfolio/slider-ezh_web.jpg'
import life1corp from '../../assets/images/portfolio/slider-life1corp.jpg'
import sample from '../../assets/images/portfolio/slider-sample.jpg'
import school from '../../assets/images/portfolio/slider-school.jpg'
import ammon from '../../assets/images/portfolio/slider-construction_company.jpg'
import mis from '../../assets/images/portfolio/slider-mis.jpg'

const HomeBanner = () =>{
 return(
    <>
    <section>
        <div className='carousel slide carousel-dark position-relative' data-bs-ride='carousel' id='Homecarousel'>

        <div className='carousel-indicators'>
            <button type="button" data-bs-target="#Homecarousel" data-bs-slide-to="0" aria-label="Slide 1" className="active"></button>
            <button type="button" data-bs-target="#Homecarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#Homecarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#Homecarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#Homecarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#Homecarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#Homecarousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#Homecarousel" data-bs-slide-to="7" aria-label="Slide 8"></button>
            <button type="button" data-bs-target="#Homecarousel" data-bs-slide-to="8" aria-label="Slide 9"></button>
            <button type="button" data-bs-target="#Homecarousel" data-bs-slide-to="9" aria-label="Slide 10"></button>
        </div>

        <div className='carousel-inner'>
             <div className='carousel-item active' data-bs-interval='3000'>
                <img src={ accounting } className="img-fluid img-thumbnail w-100" />
             </div>

             <div className='carousel-item' data-bs-interval='3000'>
                <img src={ capacitance } className="img-fluid img-thumbnail w-100" />
             </div>

             <div className='carousel-item' data-bs-interval='3000'>
                <img src={ commapp_v3 } className="img-fluid img-thumbnail w-100" />
             </div>

             <div className='carousel-item' data-bs-interval='3000'>
                <img src={ corinthians } className="img-fluid img-thumbnail w-100" />
             </div>

             <div className='carousel-item' data-bs-interval='3000'>
                <img src={ ezh_web } className="img-fluid img-thumbnail w-100" />
             </div>

             <div className='carousel-item' data-bs-interval='3000'>
                <img src={ life1corp } className="img-fluid img-thumbnail w-100" />
             </div>

             <div className='carousel-item' data-bs-interval='3000'>
                <img src={ sample } className="img-fluid img-thumbnail w-100" />
             </div>

             <div className='carousel-item' data-bs-interval='3000'>
                <img src={ school } className="img-fluid img-thumbnail w-100" />
             </div>

             <div className='carousel-item' data-bs-interval='3000'>
                <img src={ ammon } className="img-fluid img-thumbnail w-100" />
             </div>

             <div className='carousel-item' data-bs-interval='3000'>
                <img src={ mis } className="img-fluid img-thumbnail w-100" />
             </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#Homecarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#Homecarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>

        </div>
    </section>
    </>
 )
}

export default HomeBanner