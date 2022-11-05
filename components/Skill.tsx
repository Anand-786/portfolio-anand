import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    skill: Skill;
    ind: number;
}

function Skill({ skill, ind }: Props) {
  var xw = 1;
  if (typeof window !== 'undefined') {
    if(window.innerWidth > 400) {
      if(window.innerWidth > 700) {xw=250}
      else {xw=100}
    }
  }
  return (
    <motion.div initial={{
        x: (Math.floor((ind)/5)%2==1)? -xw : xw,
        opacity: 0,
        }} 
        transition={{duration: 1}} 
        whileInView={{opacity: 1, x: 0}} title={skill?.title} className='group relative flex cursor-pointer'>
        <img src={urlFor(skill?.image).url()} alt='' 
        className='rounded-full border border-gray-500 object-cover w-16 h-16 
        xl:h-20 xl:w-20 filter group-hover:grayscale transition duration-300 ease-in-out' />

        <div className='absolute opacity-0 group-hover:opacity-80 transition 
        duration-300 ease-in-out group-hover:bg-white h-16 w-16 
        xl:h-20 xl:w-20 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-2xl font-bold text-black opacity-100'>{skill?.progress}%</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Skill