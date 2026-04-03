import { motion } from "framer-motion";
import { Shield, Target, TrendingUp, Clipboard } from "lucide-react";
import { fadeUp } from "../constants/tokens";
import Section from "./ui/Section";
import SectionLabel from "./ui/SectionLabel";
import Heading from "./ui/Heading";
import "../styles/sobre.css";

const diferenciais = [
  {
    icon: <Shield size={18} />,
    title: "Baseada em Evidência",
    desc: "Abordagem fundamentada em ciência para resultados seguros e eficazes.",
  },
  {
    icon: <Target size={18} />,
    title: "Composição Corporal",
    desc: "Foco em melhora da composição corporal com protocolos personalizados.",
  },
  {
    icon: <TrendingUp size={18} />,
    title: "Saúde Metabólica",
    desc: "Análise completa de perfil hormonal, resistência insulínica e marcadores inflamatórios.",
  },
  {
    icon: <Clipboard size={18} />,
    title: "Avaliação Completa",
    desc: "Histórico clínico detalhado, hábitos alimentares, sono, função intestinal e aspectos hormonais.",
  },
];

const timeline = [
  { year: "2022", text: "Graduação em Medicina — UNICEPLAC, Brasília" },
  { year: "2024", text: "Pós-graduação em Nutrologia — ABRAN" },
  { year: "2024", text: "Pós-graduação em Medicina do Esporte — UNIGUAÇU" },
  { year: "2024", text: "Fellow com Dr. Diogo Viana · Saúde Intestinal com Dra. Denise Carvalho · Implantes Hormonais — Bios" },
];

export default function Sobre() {
  return (
    <Section id="sobre" className="sobre">
      <div className="container">
        <div className="sobre__grid">
          {/* Left */}
          <div>
            <SectionLabel>Sobre</SectionLabel>
            <Heading>
              Mais que uma<br />
              <em>médica — uma parceira</em><br />
              na sua jornada
            </Heading>

            <motion.p variants={fadeUp} className="sobre__text">
              Sou Mariana Barbo, médica formada pela UNICEPLAC (Brasília, 2022),
              com pós-graduação em Nutrologia pela ABRAN e Medicina do Esporte
              pela UNIGUAÇU. Atuo em consultório com foco em emagrecimento,
              hipertrofia, lipedema, longevidade, menopausa e disfunções
              intestinais (disbiose).
            </motion.p>

            <motion.p variants={fadeUp} className="sobre__text">
              Minha abordagem é baseada em evidência científica, com foco em
              melhora da composição corporal, performance, saúde metabólica e
              qualidade de vida. Cada paciente recebe um cuidado único e
              personalizado.
            </motion.p>

            {/* Timeline */}
            <motion.div variants={fadeUp} className="sobre__timeline">
              {timeline.map((t, i) => (
                <div key={i} className="sobre__timeline-item">
                  <span className="sobre__timeline-year">{t.year}</span>
                  <div className="sobre__timeline-content">
                    <span className="sobre__timeline-dot" />
                    <span className="sobre__timeline-text">{t.text}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — differential cards */}
          <div>
            {diferenciais.map((d, i) => (
              <motion.div key={i} variants={fadeUp} className="sobre__card">
                <div className="sobre__card-icon">{d.icon}</div>
                <div>
                  <div className="sobre__card-title">{d.title}</div>
                  <div className="sobre__card-desc">{d.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
