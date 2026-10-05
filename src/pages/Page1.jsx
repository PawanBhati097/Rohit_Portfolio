import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import bgImage from "../images/image.png";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import logo from "../Logo/R-logo.png";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  const mouseMoving = (e) => {
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 70);
    setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 20);
  }

  useGSAP(function(){
    gsap.to(tiltRef.current,{
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 3,
      ease:'ease-out'
    })
  }, [xVal, yVal])

  return (
    <div id='page1' onMouseMove={(e) => {
      mouseMoving(e)
    }} className="h-screen bg-white px-3 py-3">
      <div id='page1-in'
        className="relative h-full w-full rounded-[50px] shadow-2xl shadow-gray-700 bg-cover bg-center bg-no-repeat p-6 flex flex-col justify-between"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Top: Logo + About Me */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img
              src={logo}
              alt="R logo"
              className="w-32 h-auto"
            />

            <Link
              to='/about'
              className='group relative overflow-hidden flex items-center gap-3 pl-4 pr-4 py-2 rounded-full bg-black/20 backdrop-blur border border-white/20 text-white text-xs uppercase tracking-[0.3em] font-[anzo4] font-bold hover:pr-8 transition-all duration-500 cursor-pointer'
            >
              {/* Yellow slide-up layer */}
              <span className='absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out' />

              {/* Dot */}
              <span className='relative z-10 w-1.5 h-1.5 rounded-full bg-yellow-400 group-hover:bg-black transition-colors duration-500' />

              {/* Text */}
              <span className='relative z-10 group-hover:text-black transition-colors duration-500'>
                About Me
              </span>

              {/* Arrow */}
              <span className='relative z-10 text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-black transition-all duration-500'>
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Middle: TiltText */}
        <TiltText abc={tiltRef} />

        {/* Bottom: Page1Bottom */}
        <Page1Bottom />

        {/* Bottom-Right: Name */}
        <p className='absolute bottom-8 right-9 text-white text-lg uppercase tracking-[0.4em] font-[anzo4] font-bold'>
          Rohit Bhati
        </p>
      </div>
    </div>
  );
};

export default Page1;