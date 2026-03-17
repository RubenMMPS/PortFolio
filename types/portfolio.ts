export interface PersonalInfo {
  name: string;
  role: string;
  specialty: string;
  description: string;
  yearsExperience: string;
  projectsDone: string;
  aboutParagraphs: string[];
  profileImage: string;
}

export interface Project {
  id: number;
  title: string;
  imageSrc: string;
  imageAlt: string;
  technologies: string[];
  description: string;
  githubUrl: string;
  demoUrl?: string;
}

export interface Experience {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  projects: Project[];
  experiences: Experience[];
}
