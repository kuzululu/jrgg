import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import RootLayout from "./shared/layouts/RootLayout"
import BannerLayout from "./shared/layouts/BannerLayout"
import DefaultLayout from "./shared/layouts/DefaultRootLayout"

import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import Page404 from "./pages/Page404"
import PortfolioPage from "./pages/Portfolio"

// logo for the tab
import logo from "./assets/images/logo/logo.png"

import AOS from "aos"

import Messenger from "./shared/components/MessengerChat"

function App() {
  
  useEffect(() =>{
    AOS.init({ duration: 1000 })

    //1. remove the link icon in index.html
    //2. Create a new <link rel="icon"> tag dynamically

    const favicon = document.createElement("link")
    favicon.rel = "icon"
    favicon.href = logo
    document.head.appendChild(favicon)

    // Optional cleanup: remove it on unmount (not usually needed)
    return () =>{
      document.head.removeChild(favicon)
    }
  }, [])

  return (
    <>
    {/* Your other components */}
      <Messenger /> 

     <Routes>
      <Route element={<RootLayout />}>
        
        {/* Home Page - with Banner + Navbar below */}
        <Route element={<BannerLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* All Other Pages - with Navbar on top */}
        <Route element={<DefaultLayout />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Route>
        
      </Route>
      
      <Route path="*" element={<Page404 />} />
      
     </Routes>
    </>
  )
}

export default App

