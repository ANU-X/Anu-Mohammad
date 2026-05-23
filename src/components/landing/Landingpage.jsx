import { useContext } from "react";
import Contact from "../../page/Contact";
import About from "../about/About";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import Learning from "../learning/Learning";
import Myskill from "../myskill/Myskill";
import Project from "../project/Project";
import Service from "../service/Service";
import { AllassetContet } from "../../context/AssetsProvider";
import Footer1 from "../footer/Footer1";
import Hero from "../hero/Hero";



const Landingpage = () => {

  const {homeRef, aboutRef, skillRef, projectsRef, exprenceRef, serviceRef, learningRef, educationRef, contactRef} = useContext(AllassetContet)
  
  return (
    <div>
      <div ref={homeRef}>
        <Hero/>
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
        <div ref={skillRef}>
          <Myskill />
        </div>
        <div ref={projectsRef}>
          <Project />
        </div>
        <div ref={exprenceRef}>
          <Experience />
        </div>
        <div ref={serviceRef}>
          <Service />
        </div>
        <div ref={learningRef}>
          <Learning />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={contactRef}>
        <Contact />
      </div>
      <div>
        <Footer1/>
      </div>
    </div>
  );
};


export default Landingpage;
