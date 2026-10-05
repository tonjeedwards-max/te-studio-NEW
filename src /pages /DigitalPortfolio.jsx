import PortfolioLayout from "@/components/site/PortfolioLayout";
import { digitalArtPortfolio } from "@/data/site";

export default function DigitalPortfolio() {
  return <PortfolioLayout slug="digital" sections={digitalArtPortfolio.sections} />;
}
