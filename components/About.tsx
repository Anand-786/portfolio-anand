import React from 'react';
import {motion} from 'framer-motion';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
};

function About({ pageInfo}: Props) {
  return (
    <motion.div initial={{
        opacity: 0,
    }} whileInView={{
        opacity: 1,
    }} transition={{
        duration: 1.5,
    }} className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-6xl
    sm:px-10 px-2 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-16 sm:top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img src={urlFor(pageInfo?.heroImage).url()} 
        initial={{
            x: -200,
            opacity: 0,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        transition={{
            duration: 1.2,
        }} 
        className='-mb-20 md:mb-0 mt-12 sm:mt-16 flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 
        rounded-full object-cover 
        md:rounded-lg md:w-44 md:h-72 xl:w-[300px] xl:h-[350px]' />

        <div className='sm:space-y-10 space-y-2 px-0 md:px-10 mt-10'>
            <h4 className='text-2xl font-semibold'>Here is a <span 
            className='underline decoration-[#006b38ff]/50'>little</span> background</h4>
            <p className='text-sm md:text-base lg:text-lg'>{pageInfo?.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}

export default About