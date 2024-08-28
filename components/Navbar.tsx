import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex'>
        <Image
        className='p-4'
        src="/Brand.png"
        alt="Picture of the author"
        width={200}
        height={200}
        />

      {/* test */}
    </div>
  )
}

export default Navbar