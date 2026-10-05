import { Outlet } from "react-router-dom";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import MobileTabBar from "@/components/site/MobileTabBar";
import SunflowerMotif from "@/components/site/SunflowerMotif";

export default function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* faint global sunflower theme */}
      <SunflowerMotif className="pointer-events-none fixed -right-16 -top-10 h-64 w-64 text-goldDeep/[0.05]" />
      <SunflowerMotif className="pointer-events-none fixed -left-20 bottom-40 h-72 w-72 text-goldDeep/[0.04]" />

      <Header />
      <main className="relative flex-1">
        <Outlet />
      </main>
      <Footer />
      <MobileTabBar />
    </div>
  );
}
