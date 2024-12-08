import { useTheme } from 'next-themes';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { SocialButtonItem } from '../interfaces';

export default function SocialButton({ name, url}: SocialButtonItem) {
  const { resolvedTheme } = useTheme();

  const getFullUrl = (url: string) => {
    if(url.startsWith('mailto:')) return url;

    return url.startsWith('http') ? url : `https://${url}`
  }

  return (
    <a
      href={getFullUrl(url)}
      className={`
        ${resolvedTheme === 'dark' ? 'text-white bg-gray-700' : 'text-black bg-gray-200'}
        flex items-center text-sm w-fit rounded-full px-3 hover:opacity-80
      `}
      target='_blank'
      rel='noopener noreferrer'
    >
      {name}
      <ArrowUpRightIcon className="ml-1 w-3 h-3" />
    </a>
  );
}


