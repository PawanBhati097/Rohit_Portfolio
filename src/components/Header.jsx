import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-10 flex justify-end items-center gap-3 pt-8 pr-8'>

      {/* Hire Me — opens Gmail compose */}
      <a
        href='https://mail.google.com/mail/?view=cm&fs=1&to=rohitbhati0503@gmail.com&su=Hiring%20Inquiry&body=Hi%20Rohit%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.'
        target='_blank'
        rel='noopener noreferrer'
        className='group flex items-center gap-2 bg-yellow-400 text-black text-xs uppercase tracking-widest font-bold px-4 py-2 rounded-full hover:bg-white transition cursor-pointer'
      >
        Hire Me
        <span className='w-4 h-4 rounded-full bg-black text-yellow-400 flex items-center justify-center text-[10px] group-hover:translate-x-0.5 transition-transform'>
          →
        </span>
      </a>

      {/* More menu */}
      <button className='w-8 h-8 flex items-center justify-center rounded-full border border-white/30 text-white hover:border-yellow-400 hover:text-yellow-400 transition cursor-pointer'>
        <i className='ri-more-2-line text-lg'></i>
      </button>

    </div>
  )
}

export default Header