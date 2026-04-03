import { motion } from "framer-motion";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import "../styles/footer.css";

const columns = [
  {
    title: "Links",
    links: ["Sobre", "Serviços", "Depoimentos", "Blog", "Contato"],
  },
  {
    title: "Serviços",
    links: [
      "Emagrecimento",
      "Hipertrofia",
      "Lipedema",
      "Longevidade",
      "Menopausa",
      "Saúde Intestinal",
    ],
  },
];

const socials = [
  { icon: <Instagram size={18} />, href: "https://www.instagram.com/dramariana.barbo/" },
  { icon: <MessageCircle size={18} />, href: "https://wa.me/5562991588693" }
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__logo">
              Dra. <span>Mariana Barbo</span>
            </div>
            <p className="footer__desc">
              Nutrologia e Medicina do Esporte com excelência, cuidado e ciência.
              Dedicada à sua saúde metabólica e qualidade de vida.
            </p>
            <div className="footer__social">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="footer__social-link"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {columns.map((col, i) => (
            <div key={i}>
              <div className="footer__col-title">{col.title}</div>
              {col.links.map((l) => (
                <a key={l} href="#" className="footer__col-link">
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span className="footer__copyright">
            © {new Date().getFullYear()} Dra. Mariana Barbo — Todos os direitos
            reservados.
          </span>
          <span className="footer__crm">
            CRM 30993-GO · ABRAN · Nutrologia · Medicina do Esporte
          </span>
        </div>
      </div>
    </footer>
  );
}
