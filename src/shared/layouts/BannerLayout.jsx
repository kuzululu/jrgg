// For Home page layout
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, Outlet } from 'react-router-dom'

const BannerLayout = () =>{
 return(
    <>
    {/* for footer is always at the bottom */}
  <div className="d-flex flex-column min-vh-100">
    <div className='d-md-none d-lg-none d-block sticky-top'>
      <Navbar />
      </div> 
     <Banner />
   <main className="flex-fill">
    <div className='d-md-block d-lg-block d-none sticky-top'>
      <Navbar />
    </div>
     <Outlet />
   </main>
   <Footer />
  </div>
    </>
 )
}

export default BannerLayout
