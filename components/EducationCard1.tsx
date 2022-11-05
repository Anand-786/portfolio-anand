import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function EducationCard1({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-1 flex-shrink-0 w-full 
    md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-4 opacity-40 hover:opacity-100 
    cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img initial={{y: -100, opacity: 0,}} 
        whileInView={{opacity: 1, y: 0,}} 
        transition={{duration: 1.2,}} 
        viewport={{once: true,}} 
        className='h-20 w-20 sm:h-28 sm:w-28 rounded-xl sm:rounded-3xl xl:w-[110px] xl:h-[110px] object-cover object-center' 
        src='./school.png' alt='' />

        <div className='px-0 md:px-5 space-y-2'>
            <h4 className='text-2xl font-bold'>Dr. Virendra Swaroop Education Center, Kanpur, UP</h4>
            <p className='text-xl font-light'>Class -X &amp; XII (ISC Board)</p>
            <p className='uppercase text-gray-300 italic text-sm'>Year : 2016 and 2018</p>
            <ul className='list-disc list-inside space-y-3 ml-8 text-sm md:text-base 
            max-h-80 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f2aa4cff]/80'>
                <li>Class X Marks : 95%</li>
                <li>Class XII Marks : 97%</li>
                <li>Scored a perfect score of 100 Marks in Mathematics and 
                    Computer Applications in Class X and XII.</li>
                <li>Engaged in several National Science Olympiads and Cyber Olympiads.</li>
                <li>Participated in International Math Olympiad (MathsComp)</li>
                <li>Soft Skills: Presentation, Patience, Adaptability, Attention to details.</li>
                <li>Interests: Astronomy, Sketching, Book-reading, Running and Exercise, 
                    Music, Gaming, Badminton, Cricket , Skating , Coding.</li>
            </ul>
        </div>
    </article>
  )
}

export default EducationCard1