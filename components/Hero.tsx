import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';

type Props = {
    pageInfo: PageInfo
};

function Hero({ pageInfo }: Props) {
    const [ text, count ] = useTypewriter({
        words: [`Hi, this is ${pageInfo?.name}`, "I-Love-Coffee.js", "function(Coffee){return <code/>}"],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src={urlFor(pageInfo?.profilePic).url()} alt='' />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] pl-3'>{pageInfo.role}</h2>
            <h1 className='text-3xl lg:text-4xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#f7ab0a' />
            </h1>
            <div className='pt-2 ml-3'>
                <Link href='#about'>
                    <button className='hero-btn'>About</button>
                </Link>
                <Link href='#education'>
                    <button className='hero-btn'>Education</button>
                </Link>
                <Link href='#skills'>
                    <button className='hero-btn'>Skills</button>
                </Link>
                <Link href='#projects'>
                    <button className='hero-btn'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default Hero