import React from 'react'

const Buttons = ({text, icon, link}) => {
  return (
    <button className='border border-app-border px-6 py-2 rounded-lg transition-all duration-300  hover:shadow-[0_0_20px_2px_rgba(179,74,228,0.6)] hover:border-white bg-linear-to-r from-[#5c87f8] to-[rgb(188,148,245)] hover:from-blue-500 hover:to-purple-500'>
      <a
      className='flex justify-center text-nowrap items-center gap-4'
      target='blank'
      href={link}
      >
      <span>{text}</span>
      <span>{icon}</span>
      </a>
      </button>
  )
}

export default Buttons
