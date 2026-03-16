
import CrossfadeSlideshow from './CrossfadeSlideshow/CrossfadeSlideshow'



const Profile = () => {

  return (
    <div className=' relative w-full h-screen' >
        <CrossfadeSlideshow/>
        <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
          <h1 className='text-xl sm:text-4xl font-dmserif sm:font-bold text-white'> I'm a Web Developer </h1>
          <p className='text-white'> MD. ANU MIA </p>
        </div>
    </div>
  )
}

export default Profile
