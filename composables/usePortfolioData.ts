import { storeToRefs } from "pinia";
import { usePortfolioStore } from "~/stores/portfolio";
import type { Project } from "~/types/portfolio";

export function usePortfolioData() {
  const portfolioStore = usePortfolioStore();
  const { personal, projects, experiences } = storeToRefs(portfolioStore);

  function getFilteredProjects(tech?: string): Project[] {
    return portfolioStore.getFilteredProjects(tech);
  }

  return {
    personal,
    projects,
    experiences,
    getFilteredProjects,
  };
}
