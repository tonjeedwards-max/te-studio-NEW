import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import MobileTabBar from "@/components/site/MobileTabBar";
import SunflowerMotif from "@/components/site/SunflowerMotif";

export default function Layout() {
  useEffect(() => {
    const isEditable = (target) =>
      target instanceof HTMLElement &&
      (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

    const blockContextMenu = (event) => {
      if (!isEditable(event.target)) event.preventDefault();
    };
    const blockCopy = (event) => {
      if (!isEditable(event.target)) event.preventDefault();
    };
    const blockShortcuts = (event) => {
      if (isEditable(event.target) || !(event.ctrlKey || event.metaKey)) return;
      if (["a", "c", "s", "u", "p", "x"].includes(event.key.toLowerCase())) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("copy", blockCopy);
    document.addEventListener("cut", blockCopy);
    document.addEventListener("keydown", blockShortcuts);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("copy", blockCopy);
      document.removeEventListener("cut", blockCopy);
      document.removeEventListener("keydown", blockShortcuts);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col select-none">
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
