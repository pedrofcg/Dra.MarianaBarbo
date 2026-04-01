import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { C, fadeUp, fadeIn, stagger } from "../constants/tokens";
import Section from "./ui/Section";
import SectionLabel from "./ui/SectionLabel";
import Heading from "./ui/Heading";
import "../styles/blog.css";

const posts = [
  {
    tag: "Performance",
    date: "15 Mar 2025",
    title: "Como o sono influencia diretamente na recuperação muscular",
    excerpt:
      "Entenda por que atletas que dormem bem evoluem mais rápido e como você pode otimizar seu descanso.",
    time: "5 min",
  },
  {
    tag: "Nutrição",
    date: "03 Mar 2025",
    title: "Suplementação esportiva: o que a ciência realmente comprova",
    excerpt:
      "Um olhar baseado em evidências sobre creatina, whey, cafeína e outros suplementos populares no esporte.",
    time: "8 min",
  },
  {
    tag: "Reabilitação",
    date: "20 Fev 2025",
    title: "Retorno ao esporte após lesão: quando e como voltar com segurança",
    excerpt:
      "Os critérios clínicos e funcionais que determinam o momento ideal para o atleta retomar os treinos.",
    time: "6 min",
  },
];

export default function Blog() {
  return (
    <Section id="blog">
      <div className="container">
        <div className="blog__header">
          <div>
            <SectionLabel>Conteúdo</SectionLabel>
            <Heading>
              Artigos & <em>Insights</em>
            </Heading>
          </div>
          <motion.a variants={fadeIn} href="#blog" className="blog__all-link">
            Ver todos os artigos →
          </motion.a>
        </div>

        <motion.div variants={stagger} className="blog__grid">
          {posts.map((p, i) => (
            <motion.article key={i} variants={fadeUp} className="blog__card">
              <div className="blog__card-img">
                <BookOpen size={40} color={`${C.accent}50`} />
                <span className="blog__card-tag">{p.tag}</span>
              </div>
              <div className="blog__card-body">
                <div className="blog__card-meta">
                  <span>{p.date}</span>
                  <span>{p.time} leitura</span>
                </div>
                <h3 className="blog__card-title">{p.title}</h3>
                <p className="blog__card-excerpt">{p.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
