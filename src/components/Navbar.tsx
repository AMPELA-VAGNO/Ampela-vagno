import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Heart } from "lucide-react";

interface NavItem {
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
}

const navItems: NavItem[] = [
  { label: "Accueil", path: "/" },
  {
    label: "Nous découvrir",
    children: [
      { label: "Qui sommes-nous ?", path: "/qui-sommes-nous" },
      { label: "Le contexte", path: "/qui-sommes-nous#contexte" },
    ],
  },
  {
    label: "Nos actions",
    children: [
      { label: "Nos 5 axes d'intervention", path: "/nos-actions" },
      { label: "Activités Génératrices de Revenus", path: "/nos-actions#agr" },
      { label: "Réalisations & perspectives", path: "/nos-actions#realisations" },
    ],
  },
  { label: "Notre impact", path: "/notre-impact" },
  { label: "Nous soutenir", path: "/nous-soutenir" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-white/0 py-4"
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setMobileOpen(false)}>
          <span className="w-11 h-11 rounded-full bg-sunset-gradient flex items-center justify-center text-white font-display font-bold text-lg shadow-md">
            AV
          </span>
          <span className="font-display font-bold text-lg md:text-xl leading-tight text-ink-900">
            Ampela<span className="text-terracotta-600"> Vagno</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1 font-medium text-ink-700">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              {item.children ? (
                <>
                  <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-terracotta-600 hover:bg-terracotta-50 transition-colors">
                    {item.label}
                    <ChevronDown size={15} />
                  </button>
                  {openDropdown === item.label && (
                    <ul className="absolute top-full left-0 min-w-[240px] bg-white rounded-xl shadow-xl border border-ink-100 py-2 mt-1">
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <Link
                            to={child.path}
                            className="block px-4 py-2.5 text-sm hover:bg-terracotta-50 hover:text-terracotta-600 transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.path!}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg block hover:text-terracotta-600 hover:bg-terracotta-50 transition-colors ${
                      isActive ? "text-terracotta-600" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link to="/nous-soutenir" className="btn-primary text-sm">
            <Heart size={16} />
            Faire un don
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-ink-800"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Ouvrir le menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-ink-100 shadow-lg">
          <ul className="container-custom py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <details className="group">
                    <summary className="flex items-center justify-between py-2.5 font-medium text-ink-800 cursor-pointer list-none">
                      {item.label}
                      <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
                    </summary>
                    <ul className="pl-4 pb-2 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <Link
                            to={child.path}
                            className="block py-2 text-sm text-ink-600 hover:text-terracotta-600"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    to={item.path!}
                    className="block py-2.5 font-medium text-ink-800 hover:text-terracotta-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/nous-soutenir"
                className="btn-primary w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                <Heart size={16} />
                Faire un don
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
