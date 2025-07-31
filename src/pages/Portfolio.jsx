import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
// for dynamic website name
import { Helmet } from "react-helmet-async"
import ModalPortfolio from "../shared/components/ModalPortfolio"

import accounting from '../assets/images/portfolio/slider-accounting.jpg'
import capacitance from '../assets/images/portfolio/slider-capacitance.jpg'
import commapp_v3 from '../assets/images/portfolio/slider-commapp_v3.jpg'
import corinthians from '../assets/images/portfolio/slider-corinthians.jpg'
import ezh_web from '../assets/images/portfolio/slider-ezh_web.jpg'
import life1corp from '../assets/images/portfolio/slider-life1corp.jpg'
import sample from '../assets/images/portfolio/slider-sample.jpg'
import school from '../assets/images/portfolio/slider-school.jpg'

const PortfolioPage = () => {
  return (
    <>

    <Helmet>
      <title>React Webpage Portfolio | Portfolio</title>
    </Helmet>
     
    <ModalPortfolio />

    <section id="portfolio" className="mt-4">
      <div className="container-fluid">
        
        <div className="row mb-3">
          <div className="col-md-3 col-lg-3">
            <a href="#" data-bs-toggle="modal" data-bs-target="#modalAccounting"><img src={ accounting } className="img-fluid img-thumbnail w-100" /></a>
          </div>
          <div className="col-md-3 col-lg-3">
           <a href="#" data-bs-toggle="modal" data-bs-target="#modalCapacitance"><img src={ capacitance } className="img-fluid img-thumbnail w-100" /></a>
          </div>
          <div className="col-md-3 col-lg-3">
            <a href="#" data-bs-toggle="modal" data-bs-target="#modalComappt"><img src={ commapp_v3 } className="img-fluid img-thumbnail w-100" /></a>
          </div>
          <div className="col-md-3 col-lg-3">
            <a href="#" data-bs-toggle="modal" data-bs-target="#modalCorinthians"><img src={ corinthians } className="img-fluid img-thumbnail w-100" /></a>
          </div>
        </div>

        <div className="row mb-5 mt-5">
          <div className="col-md-3 col-lg-3">
           <a href="#" data-bs-toggle="modal" data-bs-target="#modalEZHweb"><img src={ ezh_web } className="img-fluid img-thumbnail w-100" /></a>
          </div>
          <div className="col-md-3 col-lg-3">
            <a data-bs-toggle="modal" data-bs-target="#modalLife1" href="#"><img src={ life1corp } className="img-fluid img-thumbnail w-100" /></a>
          </div>
          <div className="col-md-3 col-lg-3">
            <a data-bs-toggle="modal" data-bs-target="#modalSample" href="#"><img src={ sample } className="img-fluid img-thumbnail w-100" /></a>
          </div>
          <div className="col-md-3 col-lg-3">
            <a data-bs-toggle="modal" data-bs-target="#modalSchool" href="#"><img src={ school } className="img-fluid img-thumbnail w-100" /></a>
          </div>
        </div>

      </div>
    </section>

    </>

  )
}

export default PortfolioPage
