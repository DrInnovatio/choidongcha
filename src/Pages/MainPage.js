import "./MainPage.css";
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

import Home from '../Components/Home';
import About from "../Components/About";
import Blood from "../Components/Blood";
import CarCarousel from '../Components/CarCarousel';
import CustomerForm from '../Components/CustomerForm';
import Work from "../Components/Work";
import FastContract from "../Components/FastContract";
import Benefits from '../Components/Benefits';
import Partners from '../Components/Partners';
import Footer from "../Components/Footer";
import ScrollToTopButton from "../Components/ScrollToTopButton";



function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Blood />
      <CustomerForm />
      <CarCarousel />
      <CustomerForm />
      <Work />
      <FastContract />
      <Benefits />
      <Partners/>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}



export default App;

