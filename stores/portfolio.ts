import { ref } from "vue";
import { defineStore } from "pinia";
import portfolioDataJson from "~/content/data.json";
import type {
  Experience,
  PersonalInfo,
  PortfolioData,
  Project,
} from "~/types/portfolio";

const portfolioData = portfolioDataJson as PortfolioData;

export const usePortfolioStore = defineStore("portfolio", () => {
  const personal = ref<PersonalInfo>(portfolioData.personal);
  const projects = ref<Project[]>(portfolioData.projects);
  const experiences = ref<Experience[]>(portfolioData.experiences);

  function getFilteredProjects(tech?: string): Project[] {
    if (!tech) return projects.value;

    const filtered = projects.value.filter((project) =>
      project.technologies.some((technology) =>
        technology.toLowerCase().includes(tech.toLowerCase()),
      ),
    );

    if (!filtered.length) return projects.value;

    return filtered;
  }

  return {
    personal,
    projects,
    experiences,
    getFilteredProjects,
  };
});
