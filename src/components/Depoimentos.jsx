import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { C } from "../constants/tokens";
import Section from "./ui/Section";
import SectionLabel from "./ui/SectionLabel";
import Heading from "./ui/Heading";
import "../styles/depoimentos.css";

const items = [
  {
    name: "Lucas Ferreira",
    role: "Triatleta amador",
    stars: 5,
    text: "A Dra. Mariana transformou minha abordagem ao esporte. Com o acompanhamento dela, reduzi lesões e bati meu recorde pessoal no Iron Man. Incrível!",
  },
  {
    name: "Ana Clara Rodrigues",
    role: "Crossfiteira",
    stars: 5,
    text: "Voltei ao treino depois de uma lesão no joelho em metade do tempo previsto. Profissional altamente competente, carinhosa e sempre disponível.",
  },
  {
    name: "Roberto Mendes",
    role: "Corredor de rua",
    stars: 5,
    text: "Passei anos sem conseguir completar treinos por dores. Hoje corro 10km sem problema. O trabalho da Dra. Mariana foi fundamental para minha qualidade de vida.",
  },
  {
    name: "Camila Torres",
    role: "Nadadora competitiva",
    stars: 5,
    text: "Atenção personalizada, diagnóstico preciso e um plano de reabilitação impecável. Voltei a competir mais forte do que nunca. Recomendo demais!",
  },
  {
    name: "Felipe Andrade",
    role: "Ciclista recreativo",
    stars: 5,
    text: "A avaliação física foi reveladora. Entendi melhor meu corpo, corrigi desequilíbrios musculares e minha performance melhorou 30% em 3 meses.",
  },
];

export default function Depoimentos() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);
  const next = () => setCurrent((c) => (c + 1) % items.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <Section id="depoimentos" className="depoimentos">
      <div className="depoimentos__wrapper">
        <SectionLabel>Depoimentos</SectionLabel>
        <Heading className="text-center">
          O que dizem<br />
          <em>meus pacientes</em>
        </Heading>

        <div className="depoimentos__slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5 }}
              className="depoimentos__card"
            >
              <div className="depoimentos__stars">
                {[...Array(items[current].stars)].map((_, i) => (
                  <Star key={i} size={18} fill={C.gold} color={C.gold} />
                ))}
              </div>

              <p className="depoimentos__text">
                "{items[current].text}"
              </p>

              <div className="depoimentos__author">
                <div className="depoimentos__avatar">
                  {items[current].name[0]}
                </div>
                <div style={{ textAlign: "left" }}>
                  <div className="depoimentos__name">
                    {items[current].name}
                  </div>
                  <div className="depoimentos__role">
                    {items[current].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="depoimentos__controls">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="depoimentos__arrow"
            >
              <ChevronLeft size={18} />
            </motion.button>

            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`depoimentos__dot ${
                  i === current
                    ? "depoimentos__dot--active"
                    : "depoimentos__dot--inactive"
                }`}
              />
            ))}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="depoimentos__arrow"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </Section>
  );
}
