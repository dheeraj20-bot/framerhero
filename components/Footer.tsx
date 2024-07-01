import React from 'react'
import Link from 'next/link'
import { cn } from '@/utils/cn'

const Footer = () => {
  return (
    <footer className={cn('bg-black border-t border-t-gray-500 text-white pt-16')}>
      <div className=' max-w-7xl mx-auto'>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>

          <div className='mb-6 md:mb-0'>
            <Link href='/' className='font-bold text-2xl'>
              GHA Media
            </Link>
            <p className='mt-2 text-gray-400'>
              On-Demand Video Editing Services
            </p>
          </div>

            <div>
              <h3 className='font-bold text-lg mb-2'>Company</h3>
              <ul className='space-y-2'>
                <li>
                  <Link href='/about' className='hover:text-yellow-500'>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href='/services' className='hover:text-yellow-500'>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href='/blog' className='hover:text-yellow-500'>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href='/contact' className='hover:text-yellow-500'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='font-bold text-lg mb-2'>Resources</h3>
              <ul className='space-y-2'>
                <li>
                  <Link href='/privacy-policy' className='hover:text-yellow-500'>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href='/terms-of-service' className='hover:text-yellow-500'>
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

        </div>

        <div className='mt-8 text-center text-gray-400 py-2'>
          <p>© {new Date().getFullYear()} GHA Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
