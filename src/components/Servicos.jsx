import { motion } from "framer-motion";
import {
  Activity, Heart, Zap, Trophy, Shield, BookOpen,
} from "lucide-react";
import { fadeUp, stagger } from "../constants/tokens";
import Section from "./ui/Section";
import SectionLabel from "./ui/SectionLabel";
import Heading from "./ui/Heading";
import "../styles/servicos.css";

const items = [
  {
    icon: <Activity size={28} />,
    title: "Avaliação Física",
    desc: "Avaliação clínica completa com análise de composição corporal, VO₂ máx, limiar anaeróbio e aptidão funcional.",
    tag: "Diagnóstico",
  },
  {
    icon: <Heart size={28} />,
    title: "Reabilitação Esportiva",
    desc: "Programa individualizado de recuperação de lesões musculoesqueléticas com foco em retorno seguro à prática.",
    tag: "Reabilitação",
  },
  {
    icon: <Zap size={28} />,
    title: "Prescrição de Treino",
    desc: "Elaboração de protocolos de treinamento baseados em evidências, alinhados ao seu objetivo e condição atual.",
    tag: "Treino",
  },
  {
    icon: <Trophy size={28} />,
    title: "Performance Esportiva",
    desc: "Estratégias avançadas de periodização, recuperação e suplementação para elevar seu nível competitivo.",
    tag: "Performance",
  },
  {
    icon: <Shield size={28} />,
    title: "Medicina Preventiva",
    desc: "Check-up esportivo completo para prevenção de lesões, doenças crônicas e promoção da saúde a longo prazo.",
    tag: "Prevenção",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Qualidade de Vida",
    desc: "Atendimento voltado a quem busca melhorar bem-estar geral, saúde metabólica e longevidade com saúde.",
    tag: "Bem-estar",
  },
];

export default function Servicos() {
  return (
    <Section id="serviços">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 64 }}>
          <SectionLabel>Serviços</SectionLabel>
          <Heading className="text-center">
            O que posso fazer<br />
            <em>por você</em>
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
