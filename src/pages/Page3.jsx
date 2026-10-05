import React from 'react'
import truckVideo from '../Gif/Truck.mp4'

const Page3 = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <video
        src={truckVideo}
        autoPlay
        loop
        muted
        playsInline
        className='w-full h-auto object-cover rounded-2xl'
      />

      {/* Contact links — yellow by default */}
      <div className='flex flex-wrap mr-20 items-center justify-center gap-5 py-20 px-6'>
        <a
          href='https://www.linkedin.com/in/rohit-bhati-56a84a274/'
          target='_blank'
          rel='noopener noreferrer'
          className='group flex items-center gap-4 pl-5 pr-6 py-3 rounded-full bg-black text-white hover:bg-black hover:text-white transition-all duration-300'
        >
          <span className='w-9 h-9 flex items-center justify-center rounded-full text-yellow-400 text-lg group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300'>
            <i className='ri-linkedin-fill'></i>
          </span>
          <span className='text-xs uppercase tracking-[0.25em] font-[anzo4] font-bold'>Connect</span>
        </a>

        {/* Email — opens Gmail compose */}
        <a
          href='https://mail.google.com/mail/?view=cm&fs=1&to=rohitbhati0503@gmail.com&su=Hiring%20Inquiry'
          target='_blank'
          rel='noopener noreferrer'
          className='group flex items-center gap-4 pl-5 pr-6 py-3 rounded-full bg-black text-white hover:bg-black hover:text-white transition-all duration-300'
        >
          <span className='w-9 h-9 flex items-center justify-center rounded-full bg-black text-yellow-400 text-lg group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300'>
            <i className='ri-mail-fill'></i>
          </span>
          <span className='text-xs uppercase tracking-[0.25em] font-[anzo4] font-bold'>Email Me</span>
        </a>

        {/* Phone — opens dialer */}
        <a
          href='tel:+918571995997'
          className='group flex items-center gap-4 pl-5 pr-6 py-3 rounded-full bg-black text-white hover:bg-black hover:text-white transition-all duration-300'
        >
          <span className='w-9 h-9 flex items-center justify-center rounded-full text-yellow-400 text-lg group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300'>
            <i className='ri-phone-fill'></i>
          </span>
          <span className='text-xs uppercase tracking-[0.25em] font-[anzo4] font-bold'>Call Me</span>
        </a>
      </div>
    </div>
  )
}

export default Page3