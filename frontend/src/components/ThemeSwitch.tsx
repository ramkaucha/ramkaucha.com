// import React from 'react'

import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import * as Select from "@radix-ui/react-select";
import { MoonIcon, ComputerDesktopIcon } from "@heroicons/react/20/solid";
import { SunIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";



export default function ThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [ mounted, setMounted ] = useState(false);

  useEffect(() => {
    setMounted(true);

    console.log('Current state:', {
      theme,
      resolvedTheme,
      htmlClass: document.documentElement.className
    });
    if (!theme) {
      setTheme('light');
    }
  }, [theme]);

  if (!mounted) {
    return null;
  }
  const iconStyle = `
    ${resolvedTheme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}
    flex justify-center gap-2 px-6 py-2 cursor-pointer outline-none`;
  
  return (
    <Select.Root value={theme} onValueChange={setTheme}>
      <Select.Trigger
        className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="theme"
      >
        <Select.Value>
          {resolvedTheme === 'dark' ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5" />
          )}
        </Select.Value>
      </Select.Trigger>

      <AnimatePresence>
        <Select.Portal>
          <Select.Content 
            align="end" 
            position="popper" 
            side="bottom"
            sideOffset={5}
            className="z-50"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8}}
              animate={{ opacity: 1, scale: 1}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.3 }}
              className={`
                ${resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-white'}
                 rounded-lg shadow-lg border border-gray-200`}
            >
              <Select.Viewport>
                <Select.Item 
                  value="light"
                  className={iconStyle}
                >
                  <SunIcon className="h-5 w-5" />
                </Select.Item>
                <Select.Item 
                  value="dark"
                  className={iconStyle}
                >
                  <MoonIcon className="w-5 h-5" />
                </Select.Item>
                <Select.Item 
                  value="system"
                  className={iconStyle}
                >
                  <ComputerDesktopIcon className="w-5 h-5" />
                </Select.Item>
              </Select.Viewport>
            </motion.div>
          </Select.Content>
        </Select.Portal>
      </AnimatePresence>
    </Select.Root>
  );
}

