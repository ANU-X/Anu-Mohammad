import { createContext } from "react";
import skill_Progress from "../assets/skillProgress.js";
import Blog from "../assets/Blog.js";
import Portfilo from "../assets/Portfilo.js";

export const AllassetContet = createContext(null);

const AssetsProvider = ({ children }) => {
  const contextValu = { 
    skill_Progress, 
    Blog, 
    Portfilo 
};

  return (
    <AllassetContet.Provider value={contextValu}>
      {children}
    </AllassetContet.Provider>
  );
};

export default AssetsProvider;
