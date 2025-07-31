// for all pages except for home page layout
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () =>{
    return(
     <>
       <Navbar />
       <Outlet />
       <Footer />
     </> 
    )
}

export default DefaultLayout