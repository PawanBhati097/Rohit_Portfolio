import React from 'react'

const TiltText = (props) => {
  return (
    <div id='tiltDiv' ref={props.abc} className='ml-24 mb-20 select-none'>
          {/* Line 1 */}
          <div className='flex items-baseline gap-4'>
            <span className='text-[4.5vw] uppercase font-[anzo4] text-white/40 leading-none'>
              I am
            </span>
            <h1 className='text-[5.2vw] uppercase font-[anzo3] font-black text-white leading-none'>
              Logistic
            </h1>
          </div>

          {/* Line 2 - accent + outline mix */}
          <div className='flex items-baseline gap-4 mt-1'>
            <h1
              className='text-[5.2vw] uppercase font-[anzo3] font-black text-transparent leading-none'
              style={{ WebkitTextStroke: '1.5px white' }}
            >
              Leader
            </h1>
            <span className='text-[2vw] uppercase font-[anzo4] text-white/40 tracking-[0.3em]'>
              &amp;
            </span>
          </div>

          {/* Line 3 - the money line */}
          <h1 className='text-[5.2vw] uppercase font-[anzo3] font-black leading-none mt-1'>
            <span className='bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent'>
              Business Analyst
            </span>
          </h1>

          {/* Bottom CTA row */}
          <div className='flex items-center gap-6 mt-10'>
            <div className='w-20 h-[2px] bg-yellow-400'></div>
            <p className='text-[1.4vw] uppercase tracking-[0.3em] text-white/60 font-[anzo4]'>
              Available to hire
            </p>
          </div>
        </div>
  )
}

export default TiltText