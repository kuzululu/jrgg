import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"

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

const ModalPortfolio = () =>{

useEffect(()=>{

 const handleClose = () =>{
    window.location.href = window.location.href
 }

 const closeBtns = document.querySelectorAll(".btn-close")
//  closeBtn?.addEventListener("click", handleClose)

closeBtns.forEach((btn) => {
    btn.addEventListener("click", handleClose)
})

//  cleanup
 return () =>{
    // closeBtn?.removeEventListener("click", handleClose)
    closeBtns.forEach((btn) =>{
        btn.removeEventListener("click", handleClose)
    })
 }

}, [])

 return(
  <>

  <div id="modalAccounting" className="modal fade" tabIndex={-1}>

    <div className="modal-dialog modal-lg modal-dialog-scrollable">
     <div className="modal-content">
       
      <div className="modal-header">
        <h3 className="text-primary fw-bolder modal-title animate__animated animate__fadeIn animate__infinite infinite animate__slow">Accounting Portfolio</h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        <div className="row">
         <div className="col-md-7 col-lg-7">
            <img src={ accounting } className="img-fluid w-100 h-100 img-thumbnail" />
         </div>
         <div className="col-md-5 col-lg-5">
            <h3>Accounting Porfolio</h3>
            <p>
                This porfolio was made last 2018 for Accounting Firm, this was made in bootstrap 3
            </p>
         </div>
        </div>
      </div>

     </div>
    </div>

  </div>

  {/*  */}

  <div id="modalCapacitance" className="modal fade" tabIndex={-1}>

    <div className="modal-dialog modal-lg modal-dialog-scrollable">
     <div className="modal-content">
       
      <div className="modal-header">
        <h3 className="text-primary fw-bolder modal-title animate__animated animate__fadeIn animate__infinite infinite animate__slow">Capacitance Portfolio</h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        <div className="row">
         <div className="col-md-7 col-lg-7">
            <img src={ capacitance } className="img-fluid w-100 h-100 img-thumbnail" />
         </div>
         <div className="col-md-5 col-lg-5">
            <h3>Capacitance Porfolio</h3>
            <p>
                This porfolio was made last 2017 as my past time when i have no duty or teaching, this was made in bootstrap 3
            </p>
         </div>
        </div>
      </div>

     </div>
    </div>

  </div>

  {/* modalComappt */}

  <div id="modalComappt" className="modal fade" tabIndex={-1}>

    <div className="modal-dialog modal-lg modal-dialog-scrollable">
     <div className="modal-content">
       
      <div className="modal-header">
        <h3 className="text-primary fw-bolder modal-title animate__animated animate__fadeIn animate__infinite infinite animate__slow">Cmommission on Appointments Portfolio</h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        <div className="row">
         <div className="col-md-7 col-lg-7">
            <img src={ commapp_v3 } className="img-fluid w-100 h-100 img-thumbnail" />
         </div>
         <div className="col-md-5 col-lg-5">
            <h3>CA Porfolio</h3>
            <p>
                This porfolio was made last 2020 as my past time in my new work this time was during Covid19 Pandemic, this was made in bootstrap 3
            </p>
         </div>
        </div>
      </div>

     </div>
    </div>

  </div>

  {/* modalCorinthians */}

   <div id="modalCorinthians" className="modal fade" tabIndex={-1}>

    <div className="modal-dialog modal-lg modal-dialog-scrollable">
     <div className="modal-content">
       
      <div className="modal-header">
        <h3 className="text-primary fw-bolder modal-title animate__animated animate__fadeIn animate__infinite infinite animate__slow">Corinthians Placement Angency Portfolio</h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        <div className="row">
         <div className="col-md-7 col-lg-7">
            <img src={ corinthians } className="img-fluid w-100 h-100 img-thumbnail" />
         </div>
         <div className="col-md-5 col-lg-5">
            <h3>Corinthians Porfolio</h3>
            <p>
                This porfolio was my first ever made website last 2015 this portfolio was my first challenge in creating a website that year i have no knowledge in creating a website that's the time when I'm just getting a template from internet then edit it that's when someone introduce me on bootstrap 3.
            </p>
         </div>
        </div>
      </div>

     </div>
    </div>

  </div>

{/* modalEZHweb */}

<div id="modalEZHweb" className="modal fade" tabIndex={-1}>

    <div className="modal-dialog modal-lg modal-dialog-scrollable">
     <div className="modal-content">
       
      <div className="modal-header">
        <h3 className="text-primary fw-bolder modal-title animate__animated animate__fadeIn animate__infinite infinite animate__slow">E.Zarate Hospital Portfolio</h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        <div className="row">
         <div className="col-md-7 col-lg-7">
            <img src={ ezh_web } className="img-fluid w-100 h-100 img-thumbnail" />
         </div>
         <div className="col-md-5 col-lg-5">
            <h3>EZH Porfolio</h3>
            <p>
                This porfolio was made in 2020 anohter past time development but this time I'm much more fluent in Web Development but still i used here is bootstrap 3
            </p>
         </div>
        </div>
      </div>

     </div>
    </div>

  </div>
    

  {/* modalLife1   */}

  <div id="modalLife1" className="modal fade" tabIndex={-1}>

    <div className="modal-dialog modal-lg modal-dialog-scrollable">
     <div className="modal-content">
       
      <div className="modal-header">
        <h3 className="text-primary fw-bolder modal-title animate__animated animate__fadeIn animate__infinite infinite animate__slow">Life1 Corporation Portfolio</h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        <div className="row">
         <div className="col-md-7 col-lg-7">
            <img src={ life1corp } className="img-fluid w-100 h-100 img-thumbnail" />
         </div>
         <div className="col-md-5 col-lg-5">
            <h3>Life1 Corp. Porfolio</h3>
            <p>
                This porfolio was made in 2018 anohter project on my previous work but this time I'm much more fluent in Web Development but still i used here is bootstrap 3
            </p>
         </div>
        </div>
      </div>

     </div>
    </div>

  </div>

  {/* modalSample */}

  <div id="modalSample" className="modal fade" tabIndex={-1}>

    <div className="modal-dialog modal-lg modal-dialog-scrollable">
     <div className="modal-content">
       
      <div className="modal-header">
        <h3 className="text-primary fw-bolder modal-title animate__animated animate__fadeIn animate__infinite infinite animate__slow">Sample Web Portfolio</h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        <div className="row">
         <div className="col-md-7 col-lg-7">
            <img src={ sample } className="img-fluid w-100 h-100 img-thumbnail" />
         </div>
         <div className="col-md-5 col-lg-5">
            <h3>Sample Web for teamholix for part time Job</h3>
            <p>
                This porfolio was made in 2021 as a part time front-end developerbut this time I'm much more fluent in Web Development and now i'm using bootstrap 5
            </p>
         </div>
        </div>
      </div>

     </div>
    </div>

  </div>

  {/* modalSchool */}

<div id="modalSchool" className="modal fade" tabIndex={-1}>

    <div className="modal-dialog modal-lg modal-dialog-scrollable">
     <div className="modal-content">
       
      <div className="modal-header">
        <h3 className="text-primary fw-bolder modal-title animate__animated animate__fadeIn animate__infinite infinite animate__slow">AZGH College Web Portfolio</h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        <div className="row">
         <div className="col-md-7 col-lg-7">
            <img src={ school } className="img-fluid w-100 h-100 img-thumbnail" />
         </div>
         <div className="col-md-5 col-lg-5">
            <h3>AZGH College Web</h3>
            <p>
                This porfolio was made in 2017 I develope this website for the school that i used to work but still i'm was using bootstrap 3 back then <a href="https://agzhcollegeinc.vercel.app/" target="_blank" className="text-danger fw-bolder">Visit</a>
            </p>
         </div>
        </div>
      </div>

     </div>
    </div>

  </div>

  {/* modalAmmon */}

<div id="modalAmmon" className="modal fade" tabIndex={-1}>

    <div className="modal-dialog modal-lg modal-dialog-scrollable">
     <div className="modal-content">
       
      <div className="modal-header">
        <h3 className="text-primary fw-bolder modal-title animate__animated animate__fadeIn animate__infinite infinite animate__slow">Ammon Contracting L.L.C</h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        <div className="row">
         <div className="col-md-7 col-lg-7">
            <img src={ ammon } className="img-fluid w-100 h-100 img-thumbnail" />
         </div>
         <div className="col-md-5 col-lg-5">
            <h3>Ammon Contracting L.L.C</h3>
            <p>
                This porfolio was made in 2024 I develope this website for Construction Company in UAE as a subcon.
                <a href="https://ammoncontractingllc.ae/" target="_blank" rel="noopener noreferrer" className="text-danger fw-bolder">Visit</a>
            </p>
         </div>
        </div>
      </div>

     </div>
    </div>

  </div>

  {/* modalMis */}

<div id="modalMis" className="modal fade" tabIndex={-1}>

    <div className="modal-dialog modal-lg modal-dialog-scrollable">
     <div className="modal-content">
       
      <div className="modal-header">
        <h3 className="text-primary fw-bolder modal-title animate__animated animate__fadeIn animate__infinite infinite animate__slow">MIS</h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        <div className="row">
         <div className="col-md-7 col-lg-7">
            <img src={ mis } className="img-fluid w-100 h-100 img-thumbnail" />
         </div>
         <div className="col-md-5 col-lg-5">
            <h3>AMIS</h3>
            <p>
                This porfolio was made in 2024 I develope this website for School located near in SM SouthMall.
                <a href="https://mis-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-danger fw-bolder">Visit</a>
            </p>
         </div>
        </div>
      </div>

     </div>
    </div>

  </div>
  </>
 )
}


export default ModalPortfolio
