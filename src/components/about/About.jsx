import FSR03764 from '../../assets/FSR03764.jpg'


const About = () => {
  return (
    <div id="about" className=" h-screen flex flex-col md:flex-row justify-center md:justify-around items-center gap-10">
      <div className=" flex flex-col gap-4">
        <h6 >Hello i'm ANU</h6>
        <h1 className=" font-inter-itght font-bold sm:font-black text-2xl sm:text-5xl">
          A Multiple Profession <br /> At Computer
        </h1>
        <h6>based in bangladesh. Let's build the future together!</h6>
        <div className="flex sm:block flex-col space-y-5 sm:space-x-8 mt-5">
        <span className="border border-gray-400 text-lg px-4 py-2">Web Developer</span>
        <span className=" border border-gray-400 text-lg px-4 py-2 ">Graphic Designer</span>
        <span className="border border-gray-400 text-lg px-4 py-2">Data Analist</span>
        </div>
      </div>
      <div className="w-60 sm:w-80
      ">
        <div className='border p-2 rounded-2xl border-app-border'>
          <img src={FSR03764} alt="img" loading='lazy' className=" rounded-2xl" />
        </div>
      </div>
    </div>
  );
};


export default About;
