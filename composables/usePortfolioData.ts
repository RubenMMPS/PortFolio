import { storeToRefs } from "pinia";
import { usePortfolioStore } from "~/stores/portfolio";

export function usePortfolioData() {
  const portfolioStore = usePortfolioStore();
  const { personal, projects, experiences } = storeToRefs(portfolioStore);

  return {
    personal,
    projects,
    experiences,
  };
}
