import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../typings';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
}

function ContactMe({pageInfo}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:101801007@smail.iitpkd.ac.in?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message} (email: ${formData.email})`;
  };

  return (
    <div className='h-screen flex relative flex-col text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly 
    mx-auto items-center'>
        <h3 className='absolute top-16 sm:top-20 uppercase tracking-[20px] 
        text-gray-500 text-2xl'>Contact</h3>

        <div className='absolute top-28 sm:top-36 flex flex-col space-y-4 max-w-full'>
            <h4 className='text-lg sm:text-2xl font-semibold text-center'>I have got just what you need.{" "}
                <span className='text-[#f2aa4cff] underline underline-offset-4 decoration-[3px] decoration-[#cdcdcd]'>
                    Lets Talk.
                </span>
            </h4>

            <div className='space-y-1 sm:space-y-4'>
              <div className='flex items-center space-x-1 sm:space-x-5 justify-center'>
                <PhoneIcon className='text-[#f2aa4cff] h-7 w-7 animate-pulse' />
                <p className='text-sm sm:text-lg'>{pageInfo?.phoneNumber}</p>
              </div>

              <div className='flex items-center space-x-1 sm:space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#f2aa4cff] h-7 w-7 animate-pulse' />
                <p className='text-sm sm:text-lg'>{pageInfo?.email}</p>
              </div>

              <div className='flex items-center space-x-1 sm:space-x-5 justify-center'>
                <MapPinIcon className='text-[#f2aa4cff] h-7 w-7 animate-pulse' />
                <p className='text-sm sm:text-lg'>{pageInfo?.address}</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-1 sm:space-y-2 w-[300px] sm:w-fit mx-auto'>
                <div className='flex space-x-1 sm:space-x-3'>
                  <input {...register('name')} className='contactInput w-[149px] sm:w-full' type='text' spellCheck='false' placeholder='Name' />
                  <input {...register('email')} className='contactInput w-[148px] sm:w-full' type='email' spellCheck='false' placeholder='Email' />
                </div>

                <input {...register('subject')} className='contactInput' type='text' spellCheck='false' placeholder='Subject' />
                <textarea {...register('message')} className='contactInput' spellCheck='false' placeholder='Message' />
                <button type='submit' className='bg-[#f2aa4cff] py-5 px-6 sm:py-5 sm:px-10 rounded-md text-black 
                font-bold text-sm sm:text-lg'>Submit</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default ContactMe