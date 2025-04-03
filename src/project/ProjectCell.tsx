import { useState, useEffect } from "react";
import { Project } from "../interfaces";
import ProjectButton from "./ProjectButton";
import { motion, useAnimation } from "framer-motion";

interface ProjectCellProps {
  project: Project
}

function ProjectCell({ project }: ProjectCellProps) {
  const {
    title,
    description,
    image,
    techStack,
    blogId,
    githubUrl,
    demoUrl,
    videoUrl,
    defaultUrl
  } = project;

  const [isHovered, setIsHovered] = useState(false);
  const showSliding = techStack.length > 4;
  const controls = useAnimation();

  const animationDuration = techStack.length * 2;

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start({
      x: -50 * techStack.length,
      transition: {
        duration: animationDuration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }
    });
  };

  useEffect(() => {
    if (showSliding && !isHovered) {
      controls.start({
        x: -50 * techStack.length,
        transition: {
          duration: animationDuration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    }
  }, [controls, showSliding, isHovered, techStack.length, animationDuration, image]);

  const handleClick = () => {
    if (defaultUrl) {
      window.open(defaultUrl, '_blank');
    }
  }

  return (
    <div
      className="cursor-poi1nter flex w-full flex-col h-[23.5rem] border border-gray-300 rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      onClick={handleClick}
    >
      {/* Image */}
      <div className="w-full h-1/2 bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="flex flex-col w-full h-1/2 p-4">
        {/* Title and logos */}
        <div className="flex justify-between mb-3">
          {/* Title */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">{title}</h3>
          </div>

          {/* Tech-stack logos */}
          <div
            className="relative overflow-hidden w-36"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {showSliding ? (
              <motion.div
                className="flex space-x-2"
                initial={{ x: 0 }}
                animate={controls}
                style={{ width: 'max-content' }}
              >
                {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                  <div key={`tech-${index}`} className="flex flex-col items-center">
                    <div className="w-7 h-7 flex items-center justify-center rounded-lg p-1">
                      <img
                        src={`https://cdn.simpleicons.org/${tech}`}
                        alt={`${tech} logo`}
                        className="max-w-full max-h-full"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <div className="flex space-x-2 justify-end">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-7 h-7 flex items-center justify-center rounded-lg p-1">
                      <img
                        src={`https://cdn.simpleicons.org/${tech}`}
                        alt={`${tech} logo`}
                        className="max-w-full max-h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="flex-grow">
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">{description}</p>
        </div>

        {/* Read more and Buttons */}
        <div className="flex justify-between mt-auto">
          {/* Read more button - linked to blogId */}
          <div>
            {blogId && (
              <a
                href={`/blog/${blogId}`}
                className="text-gray-500 hover:text-blue-800 text-sm font-medium"
              >
                Read more
              </a>
            )}
          </div>

          {/* Button urls */}
          <div className="flex space-x-3" onClick={(e) => e.stopPropagation()}>
            {githubUrl && (
              <ProjectButton logo="github" url={githubUrl} />
            )}

            {demoUrl && (
              <ProjectButton logo="demo" url={demoUrl} />
            )}

            {videoUrl && (
              <ProjectButton logo="video" url={videoUrl} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCell;
