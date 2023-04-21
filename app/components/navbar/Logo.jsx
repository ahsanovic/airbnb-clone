"use client";

import Image from 'next/image'

const Logo = () => {
  return (
    <Image 
      src="/images/logo.png"
      alt="logo"
      width="100"
      height="100"
      className='hidden md:block cursor-pointer'
    />
  )
}

export default Logo