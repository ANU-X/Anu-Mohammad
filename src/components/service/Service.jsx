import commerce_soluition from "../../assets/commerce_soluition.png";
import web_application from "../../assets/web application.png";
import web_support from "../../assets/web support.png";
import landing_page from "../../assets/landing-page.png";
import performance from "../../assets/performance.png";
import seo_optimization from "../../assets/seo_optimization.png";
import seo_frendly from "../../assets/seo_frendly.png";
import data_protection from "../../assets/data-protection.png";

const Service = () => {
  return (
    <div className=" flex flex-col justify-center items-center list-inside space-y-16 py-5 bg-gray-50 border border-gray-100">
      <div className=" font-montserrat font-semibold text-2xl sm:text-3xl text-gray-800 letter-speace underline underline-offset-4">
        What i knows
      </div>

      <div className=" container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-8">
        <div className=" flex space-x-5 ">
          <img src={commerce_soluition} alt="" className="h-10 md:h-12" />
          <div>
            <h2 className="md:text-lg font-montserrat font-semibold text-gray-700">E-Commerce Soluition</h2>
            <p className="font-inter text-gray-500"> it is a ecmmerce site </p>
          </div>
        </div>

        <div className=" flex space-x-5">
          <img src={web_application} alt="" className="h-10 md:h-12" />
          <div>
            <h2 className="md:text-lg font-montserrat font-semibold text-gray-700"> Custom web aplicication </h2>
            <p className="font-inter text-gray-500">this is ak file</p>
          </div>
        </div>

        <div className=" flex space-x-5">
          <img src={web_support} alt="" className="h-10 md:h-12" />
          <div>
            <h2 className="md:text-lg font-montserrat font-semibold text-gray-700"> Web maintencee and sapport </h2>
            <p className="font-inter text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique, exercitationem.
            </p>
          </div>
        </div>

        <div className=" flex space-x-5">
          <img src={landing_page} alt="" className="h-10 md:h-12" />
          <div>
            <h2 className="md:text-lg font-montserrat font-semibold text-gray-700"> Landing page site </h2>
            <p className="font-inter text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              accusamus?
            </p>
          </div>
        </div>

        <div className=" flex space-x-5">
          <img src={seo_optimization} alt="" className="h-10 md:h-12" />
          <div>
            <h2 className="md:text-lg font-montserrat font-semibold text-gray-700"> Seo optimization </h2>
            <p className="font-inter text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              possimus?
            </p>
          </div>
        </div>

        <div className=" flex space-x-5">
          <img src={seo_frendly} alt="" className="h-10 md:h-12" />
          <div>
            <h2 className="md:text-lg font-montserrat font-semibold text-gray-700"> Site seo friendly </h2>
            <p className="font-inter text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Adipisci, illum?
            </p>
          </div>
        </div>

        <div className=" flex space-x-5">
          <img src={performance} alt="" className="h-10 md:h-12" />
          <div>
            <h2 className="md:text-lg font-montserrat font-semibold text-gray-700"> Site performance </h2>
            <p className="font-inter text-gray-500">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className=" flex space-x-5">
          <img src={data_protection} alt="" className="h-10 md:h-12" />
          <div>
            <h2 className="md:text-lg font-montserrat font-semibold text-gray-700"> Data security </h2>
            <p className="font-inter text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Incidunt, rerum?
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Service;

