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

  return {
    personal,
    projects,
    experiences,
  };
});
