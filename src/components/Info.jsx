import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'remixicon/fonts/remixicon.css'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Info = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    gsap.from('.hero-reveal > *', {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
    })

    gsap.utils.toArray('.animate-section').forEach((section) => {
      gsap.from(section, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
        },
      })
    })

    gsap.from('.job-item', {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.job-list',
        start: 'top 85%',
      },
    })

    // Skill pills — safe pattern
    gsap.set('.skill-pill', { scale: 0.8, opacity: 0 })
    gsap.to('.skill-pill', {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.skill-list',
        start: 'top 90%',
      },
    })
  }, { scope: containerRef })

  const experience = [
    {
      role: 'Center Incharge',
      company: 'Delhivery Ltd.',
      location: 'Delhi, India',
      period: 'Jul 2026 — Present',
      points: [
        'Managing end-to-end service center operations with 100+ manpower across shifts.',
        'Driving process optimization (5S, Kaizen) and monitoring TAT, productivity, and SLA KPIs.',
      ],
    },
    {
      role: 'Team Lead',
      company: 'Delhivery Ltd.',
      location: 'Delhi, India',
      period: 'Sep 2024 — Jun 2026',
      points: [
        'Supervised hub and fulfillment operations — freight handling, last-mile, workforce allocation.',
        'Audited airway bills and delivery challans for operational compliance.',
      ],
    },
    {
      role: 'Finance Intern',
      company: 'Acmegrade Pvt. Ltd.',
      location: 'Remote',
      period: 'Mar 2024 — Aug 2024',
      points: [
        'Assisted in budgeting, forecasting, and financial modeling for strategic planning.',
      ],
    },
  ]

  const skills = [
    'Transportation & Freight',
    'Last-Mile Delivery',
    'Route Optimization',
    'Vendor Negotiations',
    'Reverse Logistics',
    'Import / Export Docs',
    'Logistics Compliance',
    'SLA & KPI Reporting',
    'SAP / Tally / Excel',
  ]

  const projects = [
    {
      title: 'Last-Mile Delivery Dashboard',
      year: '2024',
      desc: 'Power BI dashboard tracking 50+ executives — cut reporting time 70%, improved on-time delivery 12%.',
    },
    {
      title: 'Inventory Replenishment System',
      year: '2023',
      desc: 'Excel VBA + Tally alert system — reduced stockouts 20%, optimized warehouse space.',
    },
  ]

  return (
    <div ref={containerRef} className='min-h-screen bg-yellow-100 text-black overflow-hidden'>

      {/* Top Navigation */}
      <div className='max-w-6xl mx-auto px-6 md:px-12 pt-10 flex items-center justify-between'>

        <Link
          to='/'
          className='group relative overflow-hidden flex items-center gap-3 pl-4 pr-4 py-2 rounded-full border border-black/20 text-black text-xs uppercase tracking-[0.3em] font-[anzo4] font-bold hover:pr-8 transition-all duration-500 cursor-pointer'
        >
          <span className='relative z-10 text-lg group-hover:-translate-x-1 transition-transform duration-500'>
            ←
          </span>
          <span className='relative z-10 transition-colors duration-500 group-hover:text-white'>
            Back
          </span>
          <span className='absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500' />
        </Link>

        <Link
          to='/'
          className='group flex items-center gap-3 bg-yellow-400 text-black text-xs uppercase tracking-[0.3em] font-[anzo4] font-bold pl-5 pr-5 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'
        >
          <span className='w-1.5 h-1.5 rounded-full bg-black group-hover:bg-yellow-400 transition-colors duration-500' />
          <span>Home</span>
        </Link>
      </div>

      {/* Hero */}
      <div className='max-w-6xl mx-auto px-6 md:px-12 pt-16 pb-8'>
        <div className='hero-reveal'>
          <p className='text-xs uppercase tracking-[0.4em] text-black/40 font-[anzo4] mb-6 flex items-center gap-3'>
            <span className='w-8 h-[2px] bg-yellow-400' />
            About Me
          </p>

          <h1 className='text-6xl md:text-8xl font-[anzo3] font-black leading-[0.95] tracking-tighter mb-8'>
            Hi, I'm{' '}
            <span className='bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent'>
              Rohit Bhati
            </span>
          </h1>

          <p className='text-lg md:text-xl text-black/60 max-w-3xl leading-relaxed font-[anzo4]'>
            Center Incharge at Delhivery with an MBA in Finance & Business Analytics. I turn
            logistics operations into data-driven systems — optimizing processes, leading
            100+ teams, and reducing operational costs.
          </p>
        </div>
      </div>

      {/* Two-column body */}
      <div className='max-w-6xl mx-auto px-6 md:px-12 pt-8 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-16'>

        {/* Left Column */}
        <div className='lg:col-span-8 space-y-20'>

          {/* 1. Experience */}
          <section className='animate-section'>
            <h2 className='text-xs uppercase tracking-[0.4em] text-black/40 font-[anzo4] mb-8 flex items-center gap-3'>
              <span className='w-8 h-[2px] bg-yellow-400' />
              Experience
            </h2>

            <div className='job-list space-y-12'>
              {experience.map((job, i) => (
                <div
                  key={i}
                  className='job-item group relative pl-6 border-l-2 border-black/10 hover:border-yellow-400 transition-colors duration-500'
                >
                  <span className='absolute -left-[7px] top-3 w-3 h-3 rounded-full bg-yellow-100 border-2 border-black/20 group-hover:border-yellow-400 group-hover:bg-yellow-400 transition-all duration-500' />

                  <div className='flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 md:gap-4 mb-2'>
                    <h3 className='text-2xl font-[anzo3] font-black tracking-tight group-hover:text-yellow-600 transition-colors duration-300'>
                      {job.role}
                    </h3>
                    <span className='text-xs uppercase tracking-[0.25em] text-black/40 font-[anzo4]'>
                      {job.period}
                    </span>
                  </div>

                  <p className='text-sm font-[anzo4] font-bold mb-4 bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent'>
                    {job.company} · {job.location}
                  </p>

                  <ul className='space-y-2 text-black/70 font-[anzo4] leading-relaxed'>
                    {job.points.map((point, j) => (
                      <li key={j} className='flex gap-3'>
                        <span className='text-yellow-500 mt-2'>•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Education */}
          <section className='animate-section'>
            <h2 className='text-xs uppercase tracking-[0.4em] text-black/40 font-[anzo4] mb-8 flex items-center gap-3'>
              <span className='w-8 h-[2px] bg-yellow-400' />
              Education & Certifications
            </h2>

            <div className='space-y-6'>
              <div className='group'>
                <h3 className='text-xl font-[anzo3] font-black tracking-tight group-hover:text-yellow-600 transition-colors duration-300'>
                  MBA — Finance & Business Analytics
                </h3>
                <p className='text-sm text-black/50 font-[anzo4] mt-1'>
                  Galgotias University · 2023–2025
                </p>
              </div>

              <div className='group'>
                <h3 className='text-xl font-[anzo3] font-black tracking-tight group-hover:text-yellow-600 transition-colors duration-300'>
                  B.Sc.
                </h3>
                <p className='text-sm text-black/50 font-[anzo4] mt-1'>
                  MDU Rohtak · 2020–2023
                </p>
              </div>

              <div className='pt-4'>
                <p className='text-xs uppercase tracking-[0.3em] text-black/40 font-[anzo4] mb-4'>
                  Certifications
                </p>
                <ul className='space-y-2 text-black/70 font-[anzo4]'>
                  {[
                    'Certified Supply Chain Professional (CSCP)',
                    'Lean Six Sigma — Green & Advanced Green Belt',
                    'Supply Chain Analytics',
                    'BI for Logistics',
                  ].map((c, i) => (
                    <li key={i} className='flex gap-3'>
                      <span className='text-yellow-500'>•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Projects */}
          <section className='animate-section'>
            <h2 className='text-xs uppercase tracking-[0.4em] text-black/40 font-[anzo4] mb-8 flex items-center gap-3'>
              <span className='w-8 h-[2px] bg-yellow-400' />
              Key Projects
            </h2>

            <div className='space-y-8'>
              {projects.map((p, i) => (
                <div
                  key={i}
                  className='group p-6 rounded-2xl border border-black/10 hover:border-yellow-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-500'
                >
                  <div className='flex justify-between items-baseline gap-4 mb-2'>
                    <h3 className='text-xl font-[anzo3] font-black tracking-tight group-hover:text-yellow-600 transition-colors duration-300'>
                      {p.title}
                    </h3>
                    <span className='text-xs uppercase tracking-[0.25em] text-black/40 font-[anzo4]'>
                      {p.year}
                    </span>
                  </div>
                  <p className='text-black/60 font-[anzo4] leading-relaxed'>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <aside className='lg:col-span-4 space-y-12'>

          {/* Skills */}
          <section>
            <h2 className='text-xs uppercase tracking-[0.4em] text-black/40 font-[anzo4] mb-6 flex items-center gap-3'>
              <span className='w-8 h-[2px] bg-yellow-400' />
              Core Skills
            </h2>

            <div className='skill-list flex flex-wrap gap-2'>
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className='skill-pill px-3 py-1.5 text-xs uppercase tracking-wider font-[anzo4] border border-black/15 rounded-full text-black/70 hover:border-yellow-400 hover:text-yellow-600 hover:scale-105 transition-all duration-300 cursor-default'
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Contact Card */}
          <section className='animate-section relative overflow-hidden bg-black text-white p-8 rounded-3xl group'>
            <div className='absolute -top-20 -right-20 w-48 h-48 bg-yellow-400/20 rounded-full blur-3xl group-hover:bg-yellow-400/30 transition-colors duration-700' />
            <div className='absolute -bottom-20 -left-20 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl group-hover:bg-pink-500/30 transition-colors duration-700' />

            <div className='relative z-10'>
              <h2 className='text-xl font-[anzo3] font-black mb-3 tracking-tight'>
                Let's Connect
              </h2>
              <p className='text-white/50 font-[anzo4] text-sm leading-relaxed mb-6'>
                Based in Faridabad, Haryana. Open to new opportunities in logistics
                and supply chain analytics.
              </p>

              <div className='space-y-3 font-[anzo4] text-sm'>
                <a
                  href='mailto:rohitbhati0503@gmail.com'
                  className='flex items-center gap-3 text-white/80 hover:text-yellow-400 hover:translate-x-1 transition-all duration-300'
                >
                  <i className='ri-mail-line text-lg' />
                  <span>rohitbhati0503@gmail.com</span>
                </a>
                <a
                  href='tel:+918571995997'
                  className='flex items-center gap-3 text-white/80 hover:text-yellow-400 hover:translate-x-1 transition-all duration-300'
                >
                  <i className='ri-phone-line text-lg' />
                  <span>+91 85719 95997</span>
                </a>
                <a
                  href='https://linkedin.com/in/rohit-bhati-56a84a274'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 text-white/80 hover:text-yellow-400 hover:translate-x-1 transition-all duration-300'
                >
                  <i className='ri-linkedin-box-line text-lg' />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </section>

        </aside>

      </div>
    </div>
  )
}

export default Info