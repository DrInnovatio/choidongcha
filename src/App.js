/* eslint-disable react/jsx-pascal-case */
// import "./App.css";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Blood from "./Components/Blood";
// import CarCarousel from './Components/CarCarousel';
// import CustomerForm from './Components/CustomerForm';
// import Work from "./Components/Work";
// import FastContract from "./Components/FastContract";
// import Benefits from './Components/Benefits';
// import Footer from "./Components/Footer";
// import ScrollToTopButton from "./Components/ScrollToTopButton";

import React from 'react';
import MainPage from './Pages/MainPage'
import Termsconditions from './Pages/Termsconditions';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Termsconditions" element={<Termsconditions />} />
      </Routes>    
    </div>
    
  )
}




// function App() {
//   return (
//     <div className="App">
//       <Home />
//       <About />
//       <Blood />
//       <CustomerForm />
//       <CarCarousel />
//       <CustomerForm />
//       <Work />
//       <FastContract />
//       <Benefits />
//       <Footer />
//       <ScrollToTopButton />
//     </div>
//   );
// }



export default App;

