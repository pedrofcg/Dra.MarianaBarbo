import { motion } from "framer-motion";
import {
  TrendingDown, Dumbbell, Droplets, Clock, Flower2, HeartPulse,
} from "lucide-react";
import { fadeUp, stagger } from "../constants/tokens";
import Section from "./ui/Section";
import SectionLabel from "./ui/SectionLabel";
import Heading from "./ui/Heading";
import "../styles/servicos.css";

const items = [
  {
    icon: <TrendingDown size={28} />,
    title: "Emagrecimento",
    desc: "Protocolos personalizados para perda de gordura com preservação de massa magra, baseados em evidência científica e acompanhamento metabólico.",
    tag: "Composição Corporal",
  },
  {
    icon: <Dumbbell size={28} />,
    title: "Hipertrofia",
    desc: "Estratégias integradas de suplementação, modulação hormonal e acompanhamento clínico para maximizar o ganho de massa muscular.",
    tag: "Performance",
  },
  {
    icon: <Droplets size={28} />,
    title: "Lipedema",
    desc: "Diagnóstico e tratamento do lipedema com abordagem clínica completa, visando melhora da qualidade de vida e redução de sintomas.",
    tag: "Tratamento",
  },
  {
    icon: <Clock size={28} />,
    title: "Longevidade",
    desc: "Medicina preventiva e funcional com foco em saúde metabólica, marcadores inflamatórios e envelhecimento saudável.",
    tag: "Prevenção",
  },
  {
    icon: <Flower2 size={28} />,
    title: "Menopausa",
    desc: "Acompanhamento hormonal completo para mulheres no climatério e menopausa, com foco em bem-estar e equilíbrio.",
    tag: "Saúde Feminina",
  },
  {
    icon: <HeartPulse size={28} />,
    title: "Saúde Intestinal",
    desc: "Investigação e tratamento de disbiose e disfunções intestinais, com análise de marcadores e protocolos baseados em evidência.",
    tag: "Disbiose",
  },
];

export default function Servicos() {
  return (
    <Section id="serviços">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 64 }}>
          <SectionLabel>Serviços</SectionLabel>
          <Heading className="text-center">
            Áreas de<br />
            <em>atuação</em>
          </Heading>
        </div>

        <motion.div variants={stagger} className="servicos__grid">
          {items.map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="servicos__card">
              <div className="servicos__card-glow" />
              <div className="servicos__card-icon">{s.icon}</div>
              <div className="servicos__card-tag">{s.tag}</div>
              <div className="servicos__card-title">{s.title}</div>
              <div className="servicos__card-desc">{s.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
