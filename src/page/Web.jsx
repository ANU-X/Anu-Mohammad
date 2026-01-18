import Education from "../components/education/Education"
import Experience from "../components/experience/Experience"
import Learning from "../components/learning/Learning"
import Myskill from "../components/myskill/Myskill"
import Project from "../components/project/Project"
import Service from "../components/service/Service"

const Web = () => {


  return (
    <div className="space-y-50">
      <div className="container mx-auto">
        <Myskill/>
      </div>
      <div className="container mx-auto">
        <Project/>
      </div>
      <div className="container mx-auto">
        <Experience/>
      </div>
      <div>
        <Service/>
      </div>
      <div>
        <Learning/>
      </div>
      <div>
        <Education/>
      </div>
    </div>
  )
}

export default Web

