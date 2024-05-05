import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='bg-black text-white w-auto h-24 flex'>
      <div className=''>
        <h1 className='font-bold text-3xl p-8 font-mono'>Kamal Classes</h1>
        <p className='-m-10 p-1 text-sm font-serif pl-40'>You Dream It, We Frame It</p>
      </div>
      <div className='w-6/12'>
        <ul className='flex justify-center'>
        <li className='ml-2 pt-10'><Link to="/about">About</Link></li>
        <li className='ml-2 pt-10'><Link to="/course">Course</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
