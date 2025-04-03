import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home/Home';
import Community from './component/pages/Community/Community';
import Contactmain from './component/pages/Contact/Contact';
import Careers from './component/pages/Careers/career';
import OurSolution from './component/pages/solution/solution';
import AboutUs from './component/pages/About/About';
import Resources from './component/pages/Resources/Resources';
import CaseStudies from './component/pages/solution/solutiondropdown/Case-studies/CaseStudy';
import Awards from './component/pages/About/About-Dropdown/Awards/Awards';
import Header from './component/common/Header';
import Footer from './component/common/Footer';
function App() {
  return (
   <>
   <Header/>
   <Routes>
   <Route path='/' element={<Home/>}/>
    <Route path="/community" element={<Community />} />
    <Route path="/contact" element={<Contactmain />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/solution" element={<OurSolution />} />
    <Route path='/about' element={<AboutUs/>}/>
    <Route path='/resource' element={<Resources/>}/>
    <Route path='/casestudies' element={<CaseStudies/>}/>
    <Route path='/awards' element={<Awards/>}/>
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
