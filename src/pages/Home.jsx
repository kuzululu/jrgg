import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
// for dynamic website name
import { Helmet } from "react-helmet-async"
import SkillProgressBar from "../shared/components/SkillProgresBar"

const HomePage = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const winHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrolled = (scrollTop / winHeight) * 100
    setScrollProgress(scrolled)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>

    <Helmet>
      <title>React Webpage Portfolio | Home</title>
    </Helmet>
     
 {/* Services Section - Skipped for brevity */}

      <hr className="border border-2 border-light" />

      <div className="container-fluid text-light mb-5">
       
        <div className="row mb-md-5 mb-lg-5 mb-2">
         <div className="col-md-12 col-lg-12">
          <h3 className="text-center text-uppercase animate__animated animate__fadeIn animate__infinite infinite animate__slow">My Skills</h3> 
         </div> 
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-6">
            <SkillProgressBar skill="HTML" percent={100} />
          </div>
          <div className="col-md-6 col-lg-6">
            <SkillProgressBar skill="CSS" percent={95} />
          </div>
        </div>

        <div className="row"> 
          <div className="col-md-6 col-lg-6">
             <SkillProgressBar skill="JavaScript" percent={90} />
          </div>
          <div className="col-md-6 col-lg-6">
            <SkillProgressBar skill="ReactJS" percent={80} />
          </div>
        </div>

        <div className="row"> 
          <div className="col-md-6 col-lg-6">
            <SkillProgressBar skill="MySQL" percent={90} />
          </div>
          <div className="col-md-6 col-lg-6">
             <SkillProgressBar skill="PHP" percent={99} />
          </div>
        </div>

        <div className="row"> 
          <div className="col-md-6 col-lg-6">
            <SkillProgressBar skill="CodeIgniter" percent={75} />
          </div>
          <div className="col-md-6 col-lg-6">
               <SkillProgressBar skill="Laravel" percent={75} />
          </div>
        </div>

      </div>
    </>
  );
};

export default HomePage;