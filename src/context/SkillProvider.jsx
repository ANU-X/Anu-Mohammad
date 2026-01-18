import { createContext } from "react";
import skill_Progress from '../assets/skillProgress.js'


export const SkillContet = createContext(null);

const SkillProvider = ({children})=>{
    const contextValu = { skill_Progress }

    return(
        <SkillContet.Provider value={contextValu}>
            {children}
        </SkillContet.Provider>
    )
}

export default SkillProvider;
