import { useLocation, useNavigate } from 'react-router-dom';
import logo from './assets/logo.svg'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import ThemeSwitch from './components/ThemeSwitch';
import { PageItem } from './interfaces';
import { sitePages } from './config/pages';

export default function Navigation() {
  const navigate = useNavigate();
  const { resolvedTheme } = useTheme();
  const location = useLocation();

  const [pages, setPages] = useState(() =>
    sitePages.map(page => ({
      ...page,
      current: page.route === location.pathname
    }))
  );

  const handleClick = (item : PageItem) => {
    setPages(pages.map(page => ({
      ...page,
      current: page.name === item.name
    })));
    navigate(item.route)
  }

  return (
    <div className="flex justify-between py-5 my-5 mb-10">
      <div className='py-2 hidden sm:block'>
        <img src={logo} alt="logo" className='w-10 h-10 cursor-pointer' onClick={() => handleClick(pages[0])} />
      </div>
      <div className='flex md:space-x-2'>
        {pages.map((item) => (
          <motion.button
            key={item.name}
            onClick={() => handleClick(item)}
            aria-current={item.current ? 'page' : undefined}
            className={`
              text-sm p-2 rounded-md my-3 leading-none h-fit
              ${item.current 
                ? resolvedTheme === 'dark' ? 'text-white' : 'text-black'
                : resolvedTheme === 'dark' ? 'text-gray-50' : 'text-gray-600'
              }
            `}
            animate={{
              backgroundColor: item.current 
                ? resolvedTheme === 'dark' ? "rgba(30, 41, 50, 1)" : "rgba(229, 231, 235, 1)"
                : resolvedTheme === 'dark' ? "rgba(30, 30, 30, 0)" : "rgb(255, 255, 255, 0)"  
              }}
            transition={ { duration: 0.2 }}
          >
            {item.name}
          </motion.button>
        ))}
      </div>
      <div className='flex items-center'>
        <ThemeSwitch />
      </div>
    </div>
  );
}