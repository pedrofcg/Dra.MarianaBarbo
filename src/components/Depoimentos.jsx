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
    name: "Celma",
    role: "Paciente — Qualidade de vida",
    stars: 5,
    text: "Parece outra pessoa. Muito mais leve. Claro que tem alguns momentos ainda, mas ela está se sentindo melhor. Relato do meu pai sobre a minha mãe: 'parece outra pessoa'.",
  },
  {
    name: "Lucas Gomes",
    role: "Paciente — Hipertrofia",
    stars: 5,
    text: "Dra, amei nossa consulta hoje. Sério, há muito tempo procurava alguém como você, que olhasse tanto a parte da saúde, quanto o meu objetivo de hipertrofiar. Fiquei encantado com a clínica, com seu atendimento e pela segurança que me passou.",
  },
  {
    name: "Natalia",
    role: "Paciente — Saúde integral",
    stars: 5,
    text: "Você é a melhor! A profissional mais responsável, dedicada, preocupada com cada detalhe, em ajustar cada dificuldade na vida de cada paciente com suas especificidades! Mudança muito além da estética! Melhora na saúde física e mental!",
  },
  {
    name: "Felipe Mauri",
    role: "Paciente — Longevidade",
    stars: 5,
    text: "Eu achava que era impossível conciliar uma vida saudável com a rotina puxada de estudos da residência médica, além do trabalho e estudo pesado. Se dizem que um homem com vida bagunçada precisa de uma esposa pra arrumar a vida dele, quem dirá uma esposa com a competência médica que a minha tem.",
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
