import React from 'react'
// import we_bg_1 from '../assets/web-bg-1.jpg'
// import we_bg_2 from '../assets/web-bg-2.jpg'
// import we_bg_3 from '../assets/web-bg-3.jpg'
import we_bg_4 from '../assets/web-bg-4.jpg'
// import we_bg from '../assets/web-bg-5.jpg'



const Profile = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen bg-center bg-cover bg-no-repeat' style={{backgroundImage:`url(${we_bg_4})` }} >
        <div className='text-center'>
          <h1 className='text-2xl sm:text-4xl font-dmserif font-bold text-white'> I'm a Web Developer </h1>
          <p className='text-white'> MD. ANU MIA </p>
        </div>
    </div>
  )
}

export default Profile
