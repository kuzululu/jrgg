import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import Typed from "typed.js"
import TypingEffect from "../shared/components/TypingEffect"
import profile from "../assets/images/profile/slider-comapp_v3_1.jpg"

const AboutPage = () => {
  return (
    <>
     
     <Helmet>
      <title>React Webpage Portfolio | About</title>
     </Helmet>

     <section id="about" className="text-light">

      <div className="container-fluid">
       <div className="row">

        <div className="col-md-3 col-lg-3 p-3 border-top border-end border-primary border-2" id="profilInfo">
        <h1 className="text-uppercase text-center fw-bolder text-light animate__animated animate__fadeIn animate__infinite infinite animate__slow">About Me</h1>

        <center><img src={profile} className="w-75 img-fluid" id="portfolio" /></center>
        <div className="mt-3 text-light">
            <h6><i className="fa fa-user" /> Jeff Ronald G. Gamasan</h6>
            <h6><i className="fa fa-phone-alt" /> 09452869822</h6>
            <h6><i className="fa fa-envelope" /> jeffgamasan@gmail.com</h6><hr/>

            <h5 className="text-center text-uppercase">Freelance</h5>
            <h6><i className="fa-solid fa-code"></i> FrontEnd Web developer(HTML, CSS3, JS, BS5) </h6>
            <h6><i className="fa-solid fa-code"></i> ReactJS developer</h6>
            <h6><i className="fa-solid fa-code"></i> PHP+MySQL, Laravel, CodeIgniter developer</h6><hr/>
            
            <h5 className="text-uppercase text-center">Current Work</h5>
            <h6><i className="fa-solid fa-headset"></i> IT techincal Support - Government Employee</h6><hr/>
            
            <h5 className="text-center text-uppercase">Past Works</h5>      
            <h6><i className="fa-solid fa-chalkboard-user"></i> IT Instructor - Private School (AZGH College Inc)</h6>      
            <h6><i className="fa-solid fa-headset"></i> IT Technical Support - A. Zarate General Hospital</h6>      
        </div>
        </div>

        <div className="col-md-9 col-lg-9 pt-md-4 pt-lg-4 pt-2">
            
          <h2 className="position-absolute"><TypingEffect /> {/* 👈 Insert here */}</h2>
          
          <p className="about-me pt-5">
            Hi, I'm Jeff Ronald Gamasan from the Philippines. I was an IT Instructor from 2015 to 2020, where I had the privilege of teaching various areas in Information Technology — particularly focusing on frontend web development. Currently, I work as an IT Technician in a government office, handling technical support and system maintenance.</p>

           <p className="about-me">Although I have years of experience, I humbly consider myself a lifelong learner. As a web developer, I treat myself as a newbie every day — always open to learning new things and improving my craft. I believe that staying grounded and constantly curious is key to growing in this ever-evolving field.

            I’m now looking to take on freelance opportunities, especially in frontend web development, to further enhance my skills and work on real-world projects. My current skill set includes:</p>

            <code className="about-me-list text-light fw-bolder">
              <ul>
              <li>HTML</li>
              <li>CSS3</li>
              <li>Bootstrap</li>
              <li>JavasCript, JQuery</li>
              <li>React JS</li>
              <li>PHP+MySQL</li>
              <li>
                PHP Frameworks
                <ul>
                   <li>Laravel</li>
                   <li>CodeIginiter</li>
                </ul>
              </li>
            </ul>

            </code>
            <p className="about-me">If you’re looking for someone to help you build or improve your website, I’d be happy to collaborate. I believe in earning trust through quality work — so you can test my skills first, and if you're not satisfied, you are not obliged to pay.

            Feel free to reach out to me via email: jeffgamasan@gmail.com

            Looking forward to working with you!
          </p>

        </div>

       </div>
      </div>

    </section>
     
    </>
  )
}

export default AboutPage
