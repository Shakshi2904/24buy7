import react from "react";
import Navbar from "./Nav.js";
import Intro from "./Intro.js";
import About from "./About.js";
import Achieve from "./Achieve.js";
import Offer from "./Offer.js";
import Services from "./Services.js";
import Faq from "./Faq.js";
import Footer from './Footer.js';
import Contact from "./Contact.js";
import Backedby from "./Backedby.js";
import Feeback from "./Feedback.js";
import Franchise from "./Franchise.js";
import Brandpartner from "./Brandparner.js";
import Expand from "./Expand.js";
import './App.css';
function App(){
  return (
    <div>
      <div className="all">
      <Navbar/>
      <Intro/>
      <Achieve/>
      <About/>
      <Offer/>
      <Franchise/>
      <Services/>
      <Brandpartner/>
      <Expand/>
      <Feeback/>
      <Faq/>
      <Backedby/>
      <Contact/>
    </div>
    <div className="footall"><Footer/></div>
    </div>
  );
}
export default App;