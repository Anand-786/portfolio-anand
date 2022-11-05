import React from 'react';
import { motion } from 'framer-motion';
import EducationCard from './EducationCard';
import EducationCard1 from './EducationCard1';

type Props = {}

function Education({}: Props) {
  return (
    <motion.div initial={{
        opacity: 0,
    }} whileInView={{opacity: 1,}}
    transition={{duration: 1.5,}} className='h-screen flex relative overflow-hidden 
    flex-col text-left md:flex-row max-w-full px-10 
    justify-evenly mx-auto items-center'>
        <h3 className='absolute top-16 sm:top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Education
        </h3>

        <div className='w-full h-[550px] mt-24 flex space-x-5 overflow-x-scroll p-2 snap-x 
        snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f2aa4cff]/80'>
            {/* EducationCard */}
            <EducationCard />
            <EducationCard1 />
        </div>
    </motion.div>
  )
}

export default Education