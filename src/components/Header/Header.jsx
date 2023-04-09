import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between items-center px-7 bg-green-700 text-white'>
            <div>
                <h2 className='text-orange-500 text-3xl font-extrabold shadow-purple-800' >Rakib</h2>
            </div>
            <div className='md:space-x-8 md:space-y-7'>
            <Link to='/home'>Home</Link>
            <Link to='/review'>Order</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            </div>
            
        </nav>
    );
};

export default Header;