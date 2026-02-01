import Buttons from "../components/buttons/Buttons"
import Education from "../components/education/Education"
import Experience from "../components/experience/Experience"
import Learning from "../components/learning/Learning"
import Myskill from "../components/myskill/Myskill"
import Project from "../components/project/Project"
import Service from "../components/service/Service"

const Web = () => {


  return (
    <div className="space-y-50">

      <div className="max-w-lg mx-auto px-4">
        <Myskill/>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <Project/>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <Experience/>
      </div>

      <div>
        <Service/>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <Learning/>
      </div>
      
      <div className="max-w-4xl mx-auto px-4">
        <Education/>
      </div>

      <div className="max-w-4xl mx-auto px-4 mb-8">
        <Buttons buttonStracter ={['graphic', 'operatore']}/>
      </div>

    </div>
  )
}

export default Web

