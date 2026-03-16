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

export const projects: Project[] = [
  {
    id: 1,
    title: "Pokelytro",
    imageSrc: "/pokelytro.png",
    imageAlt: "Pokelytro",
    technologies: ["Angular", "Node.js", "MongoDB"],
    description:
      "This website features a Pokédex, allowing users to search by name, Pokédex number, type, or favorites. It also includes a team builder where users can create their own Pokémon team and save it to their profile for future reference.",
    githubUrl: "https://github.com/marcoslgl/pokelytro",
    demoUrl: "https://pokelytro.vercel.app/",
  },
  {
    id: 2,
    title: "LitroGym",
    imageSrc: "/litrogym.png",
    imageAlt: "LitroGym",
    technologies: ["Remix", "Node.js", "Vite"],
    description:
      "This website functions as a gym routine creator, allowing users to create their own routines or view healthy meal options for their diet. It also includes an exercise section where users can filter by muscle group, exercise type, or required equipment.",
    githubUrl: "https://github.com/edumoro412/LitrogymRemix",
  },
  {
    id: 3,
    title: "App Mensaje del Dia",
    imageSrc: "/app-mensaje-dia.png",
    imageAlt: "App Mensaje del Dia",
    technologies: ["Angular", "Node.js"],
    description:
      "This website was originally created for a friend working abroad. The site contains an inspiring message for each day of the month. It also features a personalized wordle that changes daily and hints for each incorrect answer.",
    githubUrl: "https://github.com/RubenMMPS/app-mensaje-dia",
  },
];
