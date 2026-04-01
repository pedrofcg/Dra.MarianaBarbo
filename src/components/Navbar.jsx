import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import "../styles/navbar.css";

const links = ["Sobre", "Serviços", "Depoimentos", "Blog", "Contato"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      >
        <a href="#hero" className="navbar__logo">
          Dra. <span>Mariana Barbo</span>
        </a>

        <div className="navbar__links">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="navbar__link">
              {l}
            </a>
          ))}
          <a href="#contato" className="navbar__cta">
            Agendar
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="navbar__hamburger"
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="mobile-drawer"
          >
            <button onClick={() => setOpen(false)} className="mobile-drawer__close">
              <X size={28} />
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="mobile-drawer__link"
              >
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
