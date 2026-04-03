import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { C, fadeUp, fadeIn, stagger } from "../constants/tokens";
import Section from "./ui/Section";
import SectionLabel from "./ui/SectionLabel";
import Heading from "./ui/Heading";
import "../styles/blog.css";

const posts = [
  {
    tag: "Emagrecimento",
    date: "PubMed",
    title: "Long-term weight loss and mortality (systematic review)",
    excerpt:
      "Revisão sistemática sobre o impacto da perda de peso a longo prazo na redução da mortalidade.",
    link: "https://pubmed.ncbi.nlm.nih.gov/17949355/",
  },
  {
    tag: "Saúde Metabólica",
    date: "PubMed",
    title: "Metabolic syndrome and cardiovascular risk (meta-analysis)",
    excerpt:
      "Meta-análise demonstrando como a síndrome metabólica agrava os fatores de risco cardiovascular.",
    link: "https://pubmed.ncbi.nlm.nih.gov/20863953/",
  },
  {
    tag: "Longevidade",
    date: "PubMed",
    title: "Resistance training and mortality (systematic review & meta-analysis)",
    excerpt:
      "Os impactos significativos do treinamento resistido (musculação) na longevidade e prevenção de doenças.",
    link: "https://pubmed.ncbi.nlm.nih.gov/35599175/",
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
            <motion.a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              variants={fadeUp}
              className="blog__card"
              style={{ textDecoration: "none", display: "block" }}
            >
              <div className="blog__card-img">
                <BookOpen size={40} color={`${C.accent}50`} />
                <span className="blog__card-tag">{p.tag}</span>
              </div>
              <div className="blog__card-body">
                <div className="blog__card-meta">
                  <span>Pesquisa Científica</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="blog__card-title">{p.title}</h3>
                <p className="blog__card-excerpt">{p.excerpt}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
