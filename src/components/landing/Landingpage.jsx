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
import Footer from '../footer/Footer'


const Landingpage = () => {

  const {aboutRef, skillRef, projectsRef, exprenceRef, serviceRef, learningRef, educationRef, contactRef,} = useContext(AllassetContet)
  
  return (
    <div>
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
        <Footer/>
      </div>
    </div>
  );
};


export default Landingpage;
