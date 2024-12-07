import { Menu } from '@headlessui/react';
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid";

export default function ThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
        {resolvedTheme === 'dark' ? (
          <MoonIcon className="w-5 h-5" />
        ) : (
          <SunIcon className="w-5 h-5" />
        )
			}
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? 'bg-gray-100 dark:bg-gray-700' : ''
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                onClick={() => setTheme('light')}
              >
                <SunIcon className="w-5 h-5 mr-2" />
                Light
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? 'bg-gray-100 dark:bg-gray-700' : ''
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                onClick={() => setTheme('dark')}
              >
                <MoonIcon className="w-5 h-5 mr-2" />
                Dark
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? 'bg-gray-100 dark:bg-gray-700' : ''
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                onClick={() => setTheme('system')}
              >
                <ComputerDesktopIcon className="w-5 h-5 mr-2" />
                System
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}