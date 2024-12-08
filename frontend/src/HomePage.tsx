import { useTheme } from "next-themes"
import SocialButton from "./components/SocialButton";
import { SocialButtonItem } from "./interfaces";

export default function Home() {
  const { resolvedTheme } = useTheme();
  
  const socials: SocialButtonItem[] = [
    {
      name: 'Github',
      url: 'github.com/ramkaucha'
    },
    {
      name: 'LinkedIn',
      url: 'www.linkedin.com/in/ram-kaucha/ '
    },
    {
      name: 'Email',
      url: 'mailto:me@ramkaucha.com'
    }
  ];

  return (
    <div className="px-6">
      <p className="text-[1.5em] font-medium py-1">
        hey there, i'm
      </p>
      <p className="text-[2.5em] font-bold">
        Ram Kaucha
      </p>
      <p className={`
        ${resolvedTheme === 'dark' ? "text-gray-400" : "text-gray-700"}
          py-1 `}>
        i'm a second year student studying computer science <br/> at the university of new south wales
      </p>
      <div className="py-4">
        <p className="text-lg font-medium">connect with me!</p>
        <div className="flex flex-row gap-3 py-2">
          {socials.map(social => (
              <SocialButton 
                key={social.name}
                name={social.name} 
                url={social.url}
              />
          ))}
        </div>
      </div>
      <div className="py-5">
        <p className="text-[2em] font-bold">
          Projects
        </p>
        <p>
          Coming soon...
        </p>
      </div>
      <div className="py-5">
        <p className="text-[2em] font-bold">
          Blogs
        </p>
        <p>
          Comming soon...
        </p>
      </div>
    </div>
  )
}
