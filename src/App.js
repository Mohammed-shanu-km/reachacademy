import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Heropage from './Components/Heropage/Heropage'
import Herocounter from './Components/Herocounter/Herocounter'
import Paragraph from './Components/parargraph/Paragraph'
import Objective from './Components/Objectve/Objective'
import Partners from './Components/Parternerspage/Partners'
import Course from './Components/Coursepage/Course'
import Iconpage from './Components/Iconsection/Iconpage'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
   <Navbar/>
   <Heropage/>
   <Herocounter/>
   <Paragraph/>
   <Objective/>
   <Partners/>
   <Course/>
   <Iconpage/>
   <Footer/>
   </>
  )
}

export default App
