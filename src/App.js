import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home/Home';
import Community from './component/pages/Community/main';
import Contactmain from './component/pages/Contact/main';
import Careers from './component/pages/Careers/career';
import OurSolution from './component/pages/solution/solution';
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
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
