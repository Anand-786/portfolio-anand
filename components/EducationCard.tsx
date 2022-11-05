import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function EducationCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-1 flex-shrink-0 w-full 
    md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-4 opacity-40 hover:opacity-100 
    cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img initial={{y: -100, opacity: 0,}} 
        whileInView={{opacity: 1, y: 0,}} 
        transition={{duration: 1.2,}} 
        viewport={{once: true,}} 
        className='h-20 w-20 sm:h-28 sm:w-28 rounded-xl sm:rounded-3xl xl:w-[110px] xl:h-[110px] object-cover object-center' 
        src='./IIT_PKD_logo.jpg' alt='' />

        <div className='px-0 md:px-5'>
            <h4 className='text-2xl font-bold'>Indian Institute of Technology, Palakkad, Kerala</h4>
            <p className='text-xl font-light'>Bachelor of Technology -Civil engineering</p>
            <div className='flex space-x-2 my-2'>
                {/* Icons */}
                <img className='h-10 w-10 rounded-full' src='./c.png' alt='' />
                <img className='h-10 w-10 rounded-full' src='./autocad.jpg' alt='' />
                <img className='h-10 w-10 rounded-full' src='./matlab.png' alt='' />
                <img className='h-10 w-10 rounded-full' src='./arc.jpg' alt='' />
            </div>
            <p className='uppercase text-gray-300 italic text-sm'>Year : 2018-22</p>
            <ul className='list-disc list-inside space-y-2 ml-8 text-sm md:text-base 
            max-h-80 max-w-4/5 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f2aa4cff]/80'>
                <li>Scored a CGPA of -
                  <ul className='flex space-x-2 ml-5 text-gray-300'>
                    <li>Year 1 : 7.72</li>
                    <li>Year 2 : 7.23</li>
                    <li>Year 3 : 6.80</li>
                    <li>Year 4 : 6.82</li>
                  </ul>
                </li>
                <li>Scored Outstanding Grade in C++ Programming course in Semester 2.</li>
                <li>Active Member of Data Analysis Club.</li>
                <li>Achieved Excellent Grade in Engineering Drawing, 
                  Hydraulics, Construction Lab, Chemistry and Physics Lab.</li>
                <li>Elective Courses : Principles of Economics , 
                  Professional Ethics , Culture and Gender Perfomativity, 
                  Film Studies and Short Fiction in Literature.</li>
                <li>Organized NSO inter-college event including games like Football and Basketball.</li>
            </ul>
        </div>
    </article>
  )
}

export default EducationCard