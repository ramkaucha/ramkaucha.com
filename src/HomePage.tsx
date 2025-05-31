import { useTheme } from "next-themes"
import SocialButton from "./components/SocialButton";
import { socials } from "./config/socialLinks";
import ProjectList from "./project/ProjectList";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [numProject, setNumProjects] = useState<number>(4);

  const handleSeeMore = () => {
    setNumProjects(prev => prev + 4);
  }

  return (
    <div className="sm:px-6">
      <p className="text-[1.5em] font-medium py-1">
        hey there, i'm
      </p>
      <p className="text-[2.5em] font-bold">
        Ram Kaucha
      </p>
      <p className={`
        ${resolvedTheme === 'dark' ? "text-gray-400" : "text-gray-700"}
          py-1 `}>
        I'm a final year student studying computer science at the university of new south wales
      </p>
      <div className="py-4">
        <p className="text-lg font-medium">connect with me!</p>
        <div className="flex flex-col sm:flex-row gap-3 py-2">
          {socials.map(social => (
            <SocialButton
              key={social.name}
              name={social.name}
              url={social.url}
            />
          ))}
        </div>
      </div>
      <div className="py-5 items-center justify-center flex flex-col">
        <ProjectList max={numProject} />
        <div className="mt-4 text-sm text-gray-700 dark:text-gray-50 cursor-pointer flex flex-row" onClick={handleSeeMore}>
          <p>See more</p>
          <ChevronDown className="w-5 h-5"/>
        </div>
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
