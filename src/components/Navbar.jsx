import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <nav 
      className={`${styles.paddingX} w-full flex 
      items-center py-5 fixed top z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to="/"
          className='flex items-center gap-2'
          onClick={() =>{
            setActive("");
            window.scrollTo(0,0);
          }}
        >
          <img src={logo} alt="logo" className='w-4 h-4 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'> <span className='sm:block-hidden'>Romeo Nombre Jr.</span> </p>
        </Link>
        <p className='text-red-500'>asdf</p>
      </div>
    </nav>
  )
}

export default Navbar