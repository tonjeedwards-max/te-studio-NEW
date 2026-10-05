import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { nav, site } from "@/data/site";
import ContactModal from "@/components/site/ContactModal";

export default function Header() {
  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors ${
      isActive ? "text-accent" : "text-primary hover:text-accent"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center">
          <img
            src={site.logoIcon}
            alt="T.E Studio"
            className="h-10 w-10 rounded-full md:hidden"
          />
          <img
            src={site.logoFull}
            alt="Tonje Edwards — Media & More"
            className="hidden h-11 w-auto md:block"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <NavLink
                  to={item.to}
                  className={linkClass}
                  end={item.to === "/"}
                >
                  <span className="flex items-center gap-1">
                    {item.label} <ChevronDown size={14} strokeWidth={2.5} />
                  </span>
                </NavLink>
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="w-56 overflow-hidden rounded-xl border border-border bg-background py-2 shadow-xl">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-accent"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={linkClass}
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <ContactModal
          trigger={
            <button className="hidden rounded-full bg-primary px-5 py-2 text-sm font-bold text-foreground transition-transform hover:scale-105 md:inline-block">
              Let's Talk
            </button>
          }
        />
      </div>
    </header>
  );
}
