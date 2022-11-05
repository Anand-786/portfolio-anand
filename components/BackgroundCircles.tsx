import React from 'react';
import {motion} from 'framer-motion';

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div initial={{
        opacity: 0,
    }}
    animate={{
        scale: [1,0.8,2,2,1],
        opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius: ["20%","20%","50%","80%","20%"],
    }}
    transition={{
        duration: 2.5,
    }}
     className='relative flex justify-center items-center mt-20'>
        <div className='absolute border border-[#ba0020ff] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52' />
        <div className='absolute border border-[#006b38ff] rounded-full h-[500px] w-[500px] mt-52' />
        <div className='absolute border border-[#006b38ff] opacity-20 animate-pulse rounded-full h-[600px] w-[600px] mt-52' />
        <div />
    </motion.div>
  )
}

export default BackgroundCircles