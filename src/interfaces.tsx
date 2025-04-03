export interface SocialButtonItem {
  name: string,
  url: string
}

export interface PageItem {
  name: string,
  route: string,
  current: boolean
}

export interface Project {
  id: string,
  title: string,
  description: string,
  image: string,
  techStack: string[],
  blogId?: string,
  githubUrl: string,
  demoUrl?: string,
  videoUrl?: string,
  defaultUrl: string,
  createdAt: string // date format here
}


export type ProjectList = Project[];
