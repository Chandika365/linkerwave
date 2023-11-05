import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../Images/log.png'


const navigation = [
    { name: 'Service', href: 'service', current: false },
    { name: 'About Us', href: 'about', current: false },
    { name: 'Product', href: 'product', current: false },
    { name: 'Blog', href: 'blog', current: false },
    { name: 'Careers', href: 'careers', current: false },
    { name: 'Contact', href: 'contact', current: false },
]

export default function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isSticky, setSticky] = useState(false)
    return (
        <div className='bg-white'>
            <header className='absolute inset-x-0 top-0 z-50'>
                <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>

                    {/* this goes company logo section */}

                    <div className='flex lg:flex-1'>
                        <a href='#' className='-m-1.5 p-1.5'>
                            {/* company logo */}
                            {/* <img
                        className='h-20 w-auto'
                        src={Logo}
                        /> */}

                            <div className='flex items-center flex-col '>
                                <div className='text-lg font-semibold leading-6 text-gray-900 mb-0'>
                                    Linkerwave

                                </div>
                                <div className='text-sm font-semibold leading-4 text-indigo-400 ml-20 mt-0'>
                                    Innovate Solutions
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* this code goes with hambergermenu */}

                    <div className='flex lg:hidden' >
                        <button type='button' className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700' onClick={() => setMobileMenuOpen(true)}>
                            {/* this code open main menu */}
                            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                        </button>
                    </div>
                    {/* this goes display navbar items */}
                    <div className='hidden lg:flex lg:gap-x-12'>
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className='text-sm font-semibold leading-6 text-gray-900'>
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                        <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
                            Join Linker <span aria-hidden='true'>&rarr;</span>
                        </a>
                    </div>
                </nav>
                {/* this goes with open menu  */}
                <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className='fixed inset-0 z-50' />
                    <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                        <div className='flex items-center justify-between'>
                            <a href='#' className='-m-1.5 p-1.5'>
                                <div className='text-lg font-semibold leading-6 text-gray-900'>
                                    Linkerwave
                                </div>
                            </a>
                            <button
                                type='button'
                                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {/* close button */}
                                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                            </button>
                        </div>
                        <div className='mt-6 flow-root'>
                            <div className='-my-6 divide-y divide-gray-500/10'>
                                <div className='space-y-2 py-6'>
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50'
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className='py-6'>
                                    <a
                                        href='#'
                                        className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                                        Join Linker
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}
