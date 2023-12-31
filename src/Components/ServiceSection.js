import React from 'react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'


const features = [
  {
    name: 'Web Development',
    description: 'Our web development services ensure that your online presence is not only visually appealing but also functionality robust. We create responsive and user-friendly websites and web applications tailored to your specific needs.'
  },
  {
    name: 'Mobile Application Development',
    description: 'Our web development services ensure that your online presence is not only visually appealing but also functionality robust. We create responsive and user-friendly websites and web applications tailored to your specific needs.'
  },
  {
    name: 'UI/UX Design',
    description: 'Our web development services ensure that your online presence is not only visually appealing but also functionality robust. We create responsive and user-friendly websites and web applications tailored to your specific needs.'
  },
  {
    name: 'Data Science ',
    description: 'Our web development services ensure that your online presence is not only visually appealing but also functionality robust. We create responsive and user-friendly websites and web applications tailored to your specific needs.'
  }
]

export default function ServiceSection() {
  return (
    <div className='bg-white py-24 sm:py-32 flex text-start'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center '>
          <p className='mt-2 text-3xl font-bolt tracking-tight text-gray-900 sm:text-4xl'>
            Your Path to Digital Success
          </p>
          <h2 className='text-base font-semibold leading-7 mt-10 '>
            Your Success,<span className='text-indigo-600'>Our Mission</span>
          </h2>

          <p className='mt-10 text-lg leading-8 text-gray-600'>
            your success is not just a goal but our mission. We are passionate about providing a range of exceptional services, including web development, mobile application development, UI/UX design, and cutting-edge data science, all geared towards putting you on the path to digital triumph.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div key={feature.name} className='relative pl-16 shadow-md bg-white rounded-md pb-10'>
                <dt className='text-base font-semibold leading-7 text-gray-900'>

                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>

                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600'>
                  {feature.description}
                </dd>

              </div>
            ))}
          </dl>
        </div>

      </div>

    </div>
  )
}
