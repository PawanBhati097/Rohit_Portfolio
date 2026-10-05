import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Page2 = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    gsap.from('.rotateText', {
      rotateX: -90,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'bottom 80%',
        scrub: 2,
      },
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} id='section2' className='bg-white text-black text-center'>
      {/* Designed intro heading */}
      <div className='px-9 pt-24 pb-12'>
        <p className='text-xs uppercase tracking-[0.4em] text-black/40 font-[anzo4] mb-6'>
          — What I Do
        </p>
        <h3 className='text-5xl md:text-6xl font-[anzo3] font-black leading-tight max-w-4xl mx-auto'>
          I turn complex supply chains into{' '}
          <span className='bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent'>
            smart, data-driven systems
          </span>{' '}
          that move faster and cost less.
        </h3>
        <p className='text-base md:text-lg text-black/50 font-[anzo4] mt-6 max-w-2xl mx-auto leading-relaxed'>
          Combining logistics expertise with business analytics to help companies
          make sharper decisions — from warehouse to boardroom.
        </p>
      </div>

      {/* Stacked rotating text */}
      <div className='flex flex-col [perspective:1000px]'>
        <div className='rotateText origin-top'>
          <h3 className='text-[22vw] text-black leading-[24vw] font-[anzo3] font-black tracking-tighter'>SMART</h3>
        </div>
        <div className='rotateText origin-top'>
          <h3 className='text-[22vw] text-black leading-[24vw] font-[anzo3] font-black tracking-tighter'>LOGISTICS</h3>
        </div>
        <div className='rotateText origin-top'>
          <h3 className='text-[22vw] text-black leading-[24vw] font-[anzo3] font-black tracking-tighter'>DEMANDS</h3>
        </div>
        <div className='rotateText origin-top'>
          <h3 className='text-[22vw] text-black leading-[24vw] font-[anzo3] font-black tracking-tighter'>SHARP</h3>
        </div>
        <div className='rotateText origin-top'>
          <h3 className='text-[22vw] text-black leading-[24vw] font-[anzo3] font-black tracking-tighter'>BUSINESS</h3>
        </div>
        <div className='rotateText origin-top'>
          <h3 className='text-[22vw] text-black leading-[24vw] font-[anzo3] font-black tracking-tighter'>ANALYTICS</h3>
        </div>
      </div>

      
    </div>
  )
}

export default Page2