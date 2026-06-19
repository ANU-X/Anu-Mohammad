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
    <div className="relative flex flex-col justify-center items-center list-inside space-y-16 py-5">
      <div className=" font-montserrat font-semibold text-[#3bd595] text-2xl sm:text-3xl letter-speace underline underline-offset-4">
        What i knows
      </div>

      <div className=" container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className=" flex space-x-5 ">
          <img src={commerce_soluition} alt="" className="h-10 md:h-12" />
          <div>
            <h2 className="md:text-lg font-montserrat font-semibold">E-Commerce Soluition</h2>
            <p className="font-inter text-gray-500"> Specialized in building end-to-end e-commerce solutions that drive sales and improve user experience. </p>
          </div>
        </div>

        <div className=" flex space-x-5">
          <img src={web_application} alt="" className="h-10 md:h-12" />
          <div>
            <h2 className="md:text-lg font-montserrat font-semibold"> Custom web aplicication </h2>
            <p className="font-inter text-gray-500">Expert in building fully customized web applications designed around specific client requirements.</p>
          </div>
        </div>

        <div className=" flex space-x-5">
          <img src={web_support} alt="" className="h-10 md:h-12" />
          <div>
            <h2 className="md:text-lg font-montserrat font-semibold"> Web maintencee and sapport </h2>
            <p className="font-inter text-gray-500">
              Providing proactive website maintenance and technical support to ensure maximum security and uptime.
            </p>
          </div>
        </div>

        <div className=" flex space-x-5">
          <img src={landing_page} alt="" className="h-10 md:h-12" />
          <div>
            <h2 className="md:text-lg font-montserrat font-semibold"> Landing page site </h2>
            <p className="font-inter text-gray-500">
              Designing high-converting landing pages tailored to turn visitors into loyal customers.
            </p>
          </div>
        </div>

        <div className=" flex space-x-5">
          <img src={seo_optimization} alt="" className="h-10 md:h-12" />
          <div>
            <h2 className="md:text-lg font-montserrat font-semibold"> Seo optimization </h2>
            <p className="font-inter text-gray-500">
              Optimizing websites for search engines to increase organic traffic, visibility, and search rankings.
            </p>
          </div>
        </div>

        <div className=" flex space-x-5">
          <img src={seo_frendly} alt="" className="h-10 md:h-12" />
          <div>
            <h2 className="md:text-lg font-montserrat font-semibold"> Site seo friendly </h2>
            <p className="font-inter text-gray-500">
              Building SEO-friendly websites optimized for higher search engine rankings and increased organic traffic.
            </p>
          </div>
        </div>

        <div className=" flex space-x-5">
          <img src={performance} alt="" className="h-10 md:h-12" />
          <div>
            <h2 className="md:text-lg font-montserrat font-semibold"> Site performance </h2>
            <p className="font-inter text-gray-500">Optimizing website performance and loading speeds to deliver a fast, smooth, and seamless user experience.</p>
          </div>
        </div>

        <div className=" flex space-x-5">
          <img src={data_protection} alt="" className="h-10 md:h-12" />
          <div>
            <h2 className="md:text-lg font-montserrat font-semibold"> Data security </h2>
            <p className="font-inter text-gray-500">
              Implementing robust data security measures and protocols to protect sensitive information from vulnerabilities.
            </p>
          </div>
        </div>
        
      </div>
            <div className=" absolute h-100 w-50 md:w-100 bg-[#5c87f8] opacity-5 blur-3xl pointer-events-none "></div>
    </div>
  );
};

export default Service;