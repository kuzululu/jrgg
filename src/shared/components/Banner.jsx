import { useEffect, useRef, useState } from "react";
import banner1 from '../../assets/images/banner/b_1.jpg'
import banner2 from '../../assets/images/banner/b_2.jpg'
import banner3 from '../../assets/images/banner/b_3.jpg'

const Banner = () =>{
return(
  <>
    <section>
    
    <div className="carousel slide carousel-fade carousel-dark position-relative" data-bs-ride="carousel" id="carousel">

    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" aria-label="Slide 1" className="active"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div className="carousel-inner">
       <div className="carousel-item active" data-bs-interval="3000">
		    <img src={banner1} className="img-fluid w-100" />
	    </div>
        <div className="carousel-item" data-bs-interval="3000">
		    <img src={banner2} className="img-fluid w-100" />
	    </div>
        <div className="carousel-item" data-bs-interval="3000">
		    <img src={banner3} className="img-fluid w-100" />
	    </div>
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>

    </div>
    </section>
  </>
 )
}

export default Banner