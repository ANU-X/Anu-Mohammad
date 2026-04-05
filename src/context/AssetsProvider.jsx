import { createContext, useState } from "react";
import skill_Progress from "../assets/skillProgress.js";
import Blog from "../assets/Blog.js";
import Contributor from "../assets/Contributor.js";
import ProjectCart from '../assets/ProjectCart.js'
import { useRef } from "react";

export const AllassetContet = createContext(null);

const AssetsProvider = ({ children }) => {

  const [activeSection, setActiveSection] = useState('home');

  const contextValu = { 
    skill_Progress, 
    Blog, 
    Contributor,
    ProjectCart
};

  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectsRef = useRef(null);
  const exprenceRef = useRef(null);
  const serviceRef = useRef(null);
  const learningRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef, sectoname) => {
    setActiveSection(sectoname)
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };
  return (
    <AllassetContet.Provider value={{...contextValu, aboutRef, skillRef, projectsRef, exprenceRef, serviceRef, learningRef, educationRef, contactRef, activeSection, setActiveSection, scrollToSection}}>
      {children}
    </AllassetContet.Provider>
  );
};


export default AssetsProvider;
