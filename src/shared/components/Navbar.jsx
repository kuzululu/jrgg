import { Link, useLocation } from "react-router-dom"
import { useEffect, useState, userRef } from "react"
import Logo from '../../assets/images/logo/logo.png'

import Collapse from 'bootstrap/js/dist/collapse'


const Navbar = () =>{

    const location = useLocation()
    
    useEffect(()=>{
         // Collapse the navbar after route change
         const navbarCollapseEl = document.querySelector("#navbarNav")

         if(navbarCollapseEl && navbarCollapseEl.classList.contains("show")){
            const bsCollapse = Collapse.getInstance(navbarCollapseEl) || new Collapse(navbarCollapseEl, { toggle: false });
            bsCollapse.hide();
         }
    }, [location])
    
    return (
      <>
        <nav className='navbar navbar-expand-lg sticky-top' id='navbar'>

            <div className='container-fluid'>

            <Link to='/' className='navbar-brand fw-bolder text-uppercase text-light animate__animated animate__fadeIn animate__infinite infinite'>
             <img src={ Logo } className="img-fluid position-absolute d-lg-block d-md-block d-none" id="logoNavbar" />
            </Link>

            <button className='navbar-toggler bg-light' type='button' data-bs-toggle='collapse' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'  data-bs-target='#navbarNav'><span className='navbar-toggler-icon'></span></button>

            <div className='collapse justify-content-end navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                    <li className="nav-item ps-lg-4 pe-lg-4">
                        <Link to='/' className="nav-link glow-link text-light text-uppercase fw-bolder">Home</Link>
                    </li>
                    <li className="nav-item ps-lg-4 pe-lg-4">
                        <Link to='/about' className="nav-link glow-link text-light text-uppercase fw-bolder">About</Link>
                    </li>
                    <li className="nav-item ps-lg-4 pe-lg-4">
                        <Link to='/portfolio' className="nav-link glow-link text-light text-uppercase fw-bolder">Portfolio</Link>
                    </li>
                    <li className="nav-item ps-lg-4 pe-lg-4">
                        <Link to='/contact' className="nav-link glow-link text-light text-uppercase fw-bolder">Contact</Link>
                    </li>
                </ul>
            </div>

            </div>

        </nav>
      </>  
    )
}

export default Navbar