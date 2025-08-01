import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
// for dynamic website name
import { Helmet } from "react-helmet-async"
import SkillProgressBar from "../shared/components/SkillProgresBar"
import HomeBanner from "../shared/components/BannerHome"

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

      <div className="container-fluid text-light mb-md-5 mb-lg-5 mb-4">
        <div className="row">
          <div className="col-md-8 col-lg-8 mb-md-0 mb-lg-0 mb-4">
            <h4 className="text-center">Freelance Web Developer | Responsive, Fast & Affordable Websites</h4>
            <p className="home-intro">
              Hi! I’m a passionate freelance web developer with strong experience in building responsive, user-friendly websites using the latest web technologies. I specialize in:
            </p>
            
            <code className="about-me-list text-light fw-bolder">
              <ul>
              <li><span className="fw-bolder">Frontend:</span> HTML5, CSS3, JavaScript, jQuery, Bootstrap</li>
              <li><span className="fw-bolder">Backend:</span>PHP + MySQL</li>
              <li><span className="fw-bolder">Frameworks:</span> CodeIgniter, Laravel</li>
              <li><span className="fw-bolder">Frontend:</span> HTML5, CSS3, JavaScript, jQuery, Bootstrap</li>
              <li><span className="fw-bolder">Modern Development:</span> Comprehsive skills in <span>ReactJS</span> for dynamic, fast loading UIs</li>
            </ul>
            </code>

            <p className="home-intro">
              I develop responsive websites that load faster, perform better, and look great on all devices. Whether it’s a static website at an affordable price or a custom dynamic application, I’m committed to delivering clean, optimized, and scalable solutions tailored to your needs.
            </p>
            <p className="home-outro">
              Let’s bring your ideas to life with clean code and modern design!
            </p>
          </div>

          <div className="col-md-4 col-lg-4">
            <h4 className="text-center">Projects</h4>
            <HomeBanner />
          </div>
        </div>
      </div>

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
