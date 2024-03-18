import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Nobel_Prize.png';
import { Search } from './Search';
export const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='flex flex-col justify-center item-center pb-5 border-b-2'>
        <div className='flex justify-between items-center p-5'>
            <Link to="/">
                <p className='bg-yellow-500 text-2xl flex items-center justify-center w-64 text-yellow-100 font-serif italic rounded px-2 py-2'>
                    Nobel<img className="ml-2 h-8" src={logo} alt="nobel-prize"/>Quest
                </p>
            </Link>

            <button type='button' onClick={()=> setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg'>
                {darkTheme?'Light 🌞':'Dark 🌛'}
            </button>
            
        </div>

        <div>
            <Search/>
        </div>
        
    </div>
  )
}
