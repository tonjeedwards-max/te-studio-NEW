import { NavLink } from "react-router-dom";
import { Home, User, Sparkles, Images, Mail } from "lucide-react";

const tabs = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/about", label: "About", icon: User, end: false },
  { to: "/skills", label: "Skills", icon: Sparkles, end: false },
  { to: "/portfolio", label: "Portfolio", icon: Images, end: false },
  { to: "/contact", label: "Contact", icon: Mail, end: false },
];

export default function MobileTabBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      {tabs.map((t) => {
        const Icon = t.icon;
        return (
          <NavLink
            key={t.to}
            to={t.to}
            end={t.end}
            className="flex flex-1 flex-col items-center gap-1 py-2"
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={20}
                  className={isActive ? "text-accent" : "text-foreground/45"}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span
                  className={`text-[10px] font-semibold ${
                    isActive ? "text-accent" : "text-foreground/45"
                  }`}
                >
                  {t.label}
                </span>
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}
