import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "./constants/tokens";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Resultados from "./components/Resultados";
import Depoimentos from "./components/Depoimentos";
import Blog from "./components/Blog";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Loading screen */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed",
              inset: 0,
              background: C.bg,
              zIndex: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <motion.div
              animate={{ scale: [0.8, 1.05, 1], opacity: [0, 1] }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 36,
                color: C.accent,
                fontWeight: 400,
              }}
            >
              MB
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              style={{
                height: 2,
                background: `linear-gradient(90deg, ${C.accent}, ${C.accentLt})`,
                borderRadius: 2,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div style={{ background: C.bg, color: C.text, minHeight: "100vh" }}>
        <Navbar />
        <Hero />
        <Sobre />
        <Servicos />
        <Resultados />
        <Depoimentos />
        <Blog />
        <Contato />
        <Footer />
      </div>
    </>
  );
}
