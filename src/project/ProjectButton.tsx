import { Github, PictureInPicture2, Youtube } from 'lucide-react';

interface ProjectButtonProps {
  logo: string;
  url: string;
}


export default function ProjectButton({ logo, url }: ProjectButtonProps) {

  const renderIcon = () => {
    switch (logo.toLowerCase()) {
      case 'github':
        return <Github className='h-4 w-4' />
      case 'demo':
        return <PictureInPicture2 className='w-4 h-4' />
      case 'video':
        return <Youtube className='w-4 h-4' />
    }
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="text-black bg-gray-200 dark:text-white dark:bg-gray-700 hover:opacity-80 focus:ring-4 focus:outline-none forcus:ring-bg-gray-800/50 rounded-lg text-sm px-2 py-1 text-center inline-flex items-center gap-1"
    >
      {renderIcon()}
      {logo}
    </a>
  )
}
