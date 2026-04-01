import { motion } from "framer-motion";
import { Shield, Target, TrendingUp, Users } from "lucide-react";
import { fadeUp } from "../constants/tokens";
import Section from "./ui/Section";
import SectionLabel from "./ui/SectionLabel";
import Heading from "./ui/Heading";
import "../styles/sobre.css";

const diferenciais = [
  {
    icon: <Shield size={18} />,
    title: "Abordagem Integrativa",
    desc: "Tratamento personalizado que une evidências científicas e visão holística do atleta.",
  },
  {
    icon: <Target size={18} />,
    title: "Foco em Performance",
    desc: "Protocolos específicos para maximizar resultados sem comprometer a saúde.",
  },
  {
    icon: <TrendingUp size={18} />,
    title: "Acompanhamento Contínuo",
    desc: "Monitoramento periódico para ajustes precisos no plano de saúde e treino.",
  },
  {
    icon: <Users size={18} />,
    title: "Equipe Multidisciplinar",
    desc: "Trabalho integrado com fisioterapeutas, nutricionistas e preparadores físicos.",
  },
];

const timeline = [
  { year: "2012", text: "Graduação em Medicina — [Universidade]" },
  { year: "2015", text: "Residência em Clínica Médica — [Hospital]" },
  { year: "2017", text: "Especialização em Medicina Esportiva — [Instituicao]" },
  { year: "2020", text: "Pós-graduação em — [XXXX]" },
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
              Sou Mariana Barbo, médica especialista em medicina esportiva
              formada pela Universidade de [Universidade]. Com mais de [X] anos de
              experiência, atuo acompanhando atletas de alta performance,
              praticantes recreativos e pacientes em reabilitação.
            </motion.p>

            <motion.p variants={fadeUp} className="sobre__text">
              Minha missão é unir ciência e prática para que cada paciente
              alcance o melhor de si — seja cruzando uma linha de chegada ou
              conquistando mais qualidade de vida no dia a dia.
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
