import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    projects: Project[];
};

function Projects({projects}: Props) {
    const order = [2,8,1,4,5,7,3,6];
  return (
    <motion.div initial={{opacity: 0}} 
    whileInView={{opacity: 1}} 
    transition={{duration: 1.5}} 
    className='h-screen relative flex overflow-hidden flex-col text-left 
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-16 sm:top-6 uppercase tracking-[20px] 
        text-gray-500 text-2xl'>Projects</h3>
        <div className='absolute top-8 left-2 sm:left-5 h-10 w-10 text-gray-400 animate-pulse'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z" clipRule="evenodd" />
            </svg>
        </div >
        <div className='absolute top-8 right-10 sm:right-5 h-10 w-10 text-gray-400 animate-pulse'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
        </div>
        <div id='sc' className='relative top-14 sm:top-10 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory 
        z-20'>
            {/* projects */}
            {projects?.map((project, i) => (
                <div key={project?._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-0 
                items-center justify-center p-20 md:p-2 h-screen z-40'>
                    <a href={project?.linkToBuild} target='_blank' className='cursor-pointer'>
                        <motion.img 
                            initial={{y: -300, opacity: 0}} 
                            transition={{duration: 1.2}} 
                            whileInView={{opacity: 1, y: 0}} 
                            viewport={{once: true}} 
                            src={urlFor(project?.image).url()} 
                            alt='' className='h-[485px] w-[665px] rounded-md shadow-xl shadow-black object-contain' />
                    </a>

                    <div className='space-y-0 px-0 md:px-6'>
                        <h4 className='relative text-md sm:text-2xl font-semibold text-center items-center'>
                            <span className='underline underline-offset-4 decoration-[3px] decoration-black'>
                                Case Study {i+1} of {projects.length}:</span> {project?.title} {<span
                                 className='space-x-2 text-[#f2aa4cff] text-sm sm:text-xl'>[
                                    {project?.technologies.map((technology, i) => (
                                        <div key={technology?._id} className='inline-flex items-center space-x-1 justify-center'>
                                            <p>{(i!=0)?', ':' '}{technology.title}</p>
                                        </div>
                                    ))}
                                ]
                            </span>}
                            <a href={project?.linkToBuild} target='_blank' className='absolute top-[6px] inline-flex pl-2 cursor-pointer hover:scale-110 transition duration-200 ease-out'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                            </a>
                        </h4>

                        <p className='text-sm sm:text-lg text-center md:text-left pb-1'>
                            {project?.summary}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.5}}>
            <div className='w-full absolute top-[30%] bg-[#d4d4d4]/50 blur-md left-0 h-[50px] -skew-y-12'></div>
            <div className='w-full absolute top-[40%] bg-[#a80000]/40 blur-md left-0 h-[200px] -skew-y-12'></div>
            <div className='w-full absolute top-[73%] bg-[#d4d4d4]/50 blur-md left-0 h-[50px] -skew-y-12'></div>
        </motion.div>
    </motion.div>
  )
}

export default Projects