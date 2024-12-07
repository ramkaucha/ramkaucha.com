import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.svg'
import { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeSwitch from './components/ThemeSwitch';

export default function Navigation() {
  const navigate = useNavigate();

  interface PageItem {
    name: string,
    route: string,
    current: boolean
  }

  const [pages, setPages] = useState([
    {
      name: 'Home',
      route: '/',
      current: false
    },
    {
      name: 'Project',
      route: '/project',
      current: false
    },
    {
      name: 'About',
      route: '/about',
      current: false
    },
    {
      name: 'Blog',
      route: '/blog',
      current: false
    },
  ]);

  const handleClick = (item : PageItem) => {
    setPages(pages.map(page => ({
      ...page,
      current: page.name === item.name
    })));
    navigate(item.route)
  }

  return (
    <div className="flex justify-between py-2 my-4">
      <div className='py-2'>
        <img src={logo} alt="logo" className='w-10 h-10 cursor-pointer' onClick={() => handleClick(pages[0])} />
      </div>
      <div className='flex sm:space-x-2'>
        {pages.map((item) => (
          <motion.button
            key={item.name}
            onClick={() => handleClick(item)}
            aria-current={item.current ? 'page' : undefined}
            className={`
              text-sm sm:p-2 rounded-md my-3 leading-none h-fit
              ${item.current ? 'text-black' : 'text-gray-600'}
            `}
            animate={{
              backgroundColor: item.current ? "rgb(229, 231, 235)" : "rgb(255, 255, 255)"
            }}
            transition={ { duration: 0.5 }}
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