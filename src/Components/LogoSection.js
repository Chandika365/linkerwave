import React from 'react'
import Airbnb from '../Images/Company/Company=Airbnb.svg'
import Amazon from '../Images/Company/Company=Amazon.svg'
import Google from '../Images/Company/Company=Google.svg'
import Medium from '../Images/Company/Company=Medium.svg'
import Netflix from '../Images/Company/Company=Netflix.svg'
import PayPal from '../Images/Company/Company=PayPal.svg'
import Tesla from '../Images/Company/Company=Tesla.svg'




export default function LogoSection() {
  return (
    <div className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <h2 className='text-center text-lg font-semibold leading-8 text-gray-900'>
            Endorsed by the planet's most inventive minds.

            </h2>
            <div className='mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6'>
                <img  
                    className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                    src={Airbnb}
                    alt='airbnb'
                    width={158}
                    height={48}
                    />
                     <img  
                    className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                    src={Amazon}
                    alt='airbnb'
                    width={158}
                    height={48}
                    />
                     <img  
                    className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                    src={Google}
                    alt='airbnb'
                    width={158}
                    height={48}
                    />
                     <img  
                    className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                    src={Medium}
                    alt='airbnb'
                    width={158}
                    height={48}
                    />
                     <img  
                    className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                    src={Netflix}
                    alt='airbnb'
                    width={158}
                    height={48}
                    />
                    <img  
                    className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                    src={PayPal}
                    alt='airbnb'
                    width={158}
                    height={48}
                    />
            </div>

        </div>
    </div>
  )
}
