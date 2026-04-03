import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fadeUp } from "../constants/tokens";
import Section from "./ui/Section";
import SectionLabel from "./ui/SectionLabel";
import Heading from "./ui/Heading";
import "../styles/resultados.css";

import img1 from "../assets/antes-depois-1.jpeg";
import img2 from "../assets/antes-depois-2.jpeg";
import img3 from "../assets/antes-depois-3.jpeg";

const results = [
  {
    src: img1,
    alt: "Resultado de paciente — Transformação corporal com emagrecimento e hipertrofia",
  },
  {
    src: img2,
    alt: "Resultado de paciente — Melhora da composição corporal",
  },
  {
    src: img3,
    alt: "Resultado de paciente — Emagrecimento e ganho de massa muscular",
  },
];

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
};

export default function Resultados() {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = useCallback(
    (dir) => {
      setCurrent(([prev]) => {
        const next = (prev + dir + results.length) % results.length;
        return [next, dir];
      });
    },
    []
  );

  // Auto-play every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 10000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <Section id="resultados">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 56 }}>
          <SectionLabel>Resultados</SectionLabel>
          <Heading className="text-center">
            Antes e<br />
            <em>depois</em>
          </Heading>
          <motion.p variants={fadeUp} className="resultados__subtitle">
            Transformações reais de pacientes com acompanhamento personalizado,
            baseado em evidência científica.
          </motion.p>
        </div>

        <motion.div variants={fadeUp} className="resultados__carousel">
          {/* Navigation arrows */}
          <button
            className="resultados__arrow resultados__arrow--left"
            onClick={() => paginate(-1)}
            aria-label="Anterior"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            className="resultados__arrow resultados__arrow--right"
            onClick={() => paginate(1)}
            aria-label="Próximo"
          >
            <ChevronRight size={22} />
          </button>

          {/* Image slider */}
          <div className="resultados__slider">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="resultados__slide"
              >
                <img
                  src={results[current].src}
                  alt={results[current].alt}
                  className="resultados__image"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="resultados__dots">
            {results.map((_, i) => (
              <button
                key={i}
                className={`resultados__dot ${i === current ? "resultados__dot--active" : ""}`}
                onClick={() => setCurrent([i, i > current ? 1 : -1])}
                aria-label={`Ver resultado ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Counter */}
        <motion.div variants={fadeUp} className="resultados__counter">
          <span className="resultados__counter-current">
            {String(current + 1).padStart(2, "0")}
          </span>
          <span className="resultados__counter-sep">/</span>
          <span className="resultados__counter-total">
            {String(results.length).padStart(2, "0")}
          </span>
        </motion.div>
      </div>
    </Section>
  );
}
