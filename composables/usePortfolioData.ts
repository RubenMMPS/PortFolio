import portfolioData from "~/content/data.json";
import type { Project } from "~/types/portfolio";

export function usePortfolioData() {
  const personal = portfolioData.personal;
  const allProjects = portfolioData.projects as Project[];
  const experiences = portfolioData.experiences;

  /**
   * Returns projects filtered by technology.
   * Early return: if no filter is provided or no results match, returns all projects.
   */
  function getFilteredProjects(tech?: string): Project[] {
    if (!tech) return allProjects;

    const filtered = allProjects.filter((project) =>
      project.technologies.some((t) =>
        t.toLowerCase().includes(tech.toLowerCase()),
      ),
    );

    if (!filtered.length) return allProjects;

    return filtered;
  }

  return {
    personal,
    projects: allProjects,
    experiences,
    getFilteredProjects,
  };
}
