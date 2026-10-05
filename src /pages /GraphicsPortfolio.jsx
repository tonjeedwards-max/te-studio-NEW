import PortfolioLayout from "@/components/site/PortfolioLayout";
import { graphicsWebPortfolio } from "@/data/site";

export default function GraphicsPortfolio() {
  return <PortfolioLayout slug="graphics" sections={graphicsWebPortfolio.sections} />;
}
