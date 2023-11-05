import React from 'react'
import WorldMap from '../Images/Sri Lanka Map.svg'

export default function HeroSection() {
    return (
        <div className='relative isolate px-6 pt-14 lg:px-8'>
            <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80' aria-hidden="true">
                <div
                    className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-x-6'>
                <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
                    <div className='text-center '>
                        <h1 className='text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-10 -mt-20'>
                            Where Technology Meets Imagination
                        </h1>
                        <p className='mt-6 text-lg leading-8 text-gray-600 '>
                            We bridge the gap between imagination and technology.Join us at the intersection of imagination and Technology, let's bring your ideas into life.
                        </p>
                        {/* Join Linker buttons goes here */}
                        <div className='mt-10 flex items-center justify-center gap-x-6'>
                            <a
                                href='#'
                                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                                Join Linker
                            </a>
                            <a href='#' className='text-sm font-semibold leading-6 text-indigo-900'>
                                Join Linker <span arial-hidden='true'>→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='relative isolate overflow-hidden py-24 sm:py-32 bg-transparent max-w-full '>
                    <img
                        className='sm:static max-w-full'
                        src={WorldMap}
                        alt='' />
                </div>
            </div>
        </div>
    )
}
