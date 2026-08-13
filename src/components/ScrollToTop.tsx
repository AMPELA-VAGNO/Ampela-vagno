import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // Give the DOM a tick to render before scrolling to the anchor
      const timeout = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        window.scrollTo(0, 0);
      }, 80);
      return () => clearTimeout(timeout);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
