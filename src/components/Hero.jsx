import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Award, Heart } from "lucide-react";
import { C } from "../constants/tokens";
import AnimatedCounter from "./ui/AnimatedCounter";
import "../styles/hero.css";
import heroImage from "../assets/hero-image.png";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const orbs = [
    { w: 320, h: 320, top: "10%", right: "5%", bg: `${C.accent}0C` },
    { w: 180, h: 180, bottom: "15%", right: "20%", bg: `${C.gold}14` },
    { w: 120, h: 120, top: "40%", left: "3%", bg: `${C.accent}08` },
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero__mesh" />

      {orbs.map((o, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -18, 0], rotate: [0, 3, 0] }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
          className="hero__orb"
          style={{
            width: o.w,
            height: o.h,
            top: o.top,
            right: o.right,
            bottom: o.bottom,
            left: o.left,
            background: o.bg,
          }}
        />
      ))}

      <motion.div style={{ y, opacity }} className="hero__grid">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="hero__subtitle-bar">
            <span className="hero__specialty">Medicina Esportiva</span>
            <span className="hero__divider" />
            <span className="hero__crm">CRM 12345-SP</span>
          </div>

          <h1 className="hero__title">
            Dra. Mariana
            <br />
            <span className="hero__title-accent">Barbo</span>
          </h1>

          <p className="hero__quote">
            "Performance, saúde e qualidade de vida
            <br />
            em primeiro lugar."
          </p>

          <p className="hero__description">
            Especialista em medicina esportiva com foco em atletas, praticantes
            de atividade física e reabilitação. Cuidando do seu corpo para que
            você alcance seu melhor.
          </p>

          <div className="hero__actions">
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="hero__btn-primary"
            >
              <Calendar size={16} />
              Agendar Consulta
            </motion.a>
            <motion.a
              href="#sobre"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="hero__btn-secondary"
            >
              Saiba Mais
            </motion.a>
          </div>

          <div className="hero__stats">
            {[
              { end: "8", suffix: "+", label: "Anos de experiência" },
              { end: "1200", suffix: "+", label: "Pacientes atendidos" },
              { end: "15", suffix: "+", label: "Especializações" },
            ].map((s) => (
              <div key={s.label}>
                <AnimatedCounter end={s.end} suffix={s.suffix} />
                <div className="hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero__img-wrap"
        >
          <div className="hero__img-container">
            <div className="hero__ring hero__ring--outer" />
            <div className="hero__ring hero__ring--inner" />

            <div className="hero__photo">
              <img
                src={heroImage}
                alt="Dra. Mariana Barbo — Medicina Esportiva"
              />
              <div className="hero__photo-gradient" />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="hero__badge glass"
              style={{ top: 30, right: -20 }}
            >
              <Award size={18} color={C.gold} />
              <div>
                <div className="hero__badge-title">Certificada</div>
                <div className="hero__badge-sub">SBMEE · CREF</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="hero__badge glass"
              style={{ bottom: 50, left: -25 }}
            >
              <Heart size={18} color={C.accent} />
              <div>
                <div className="hero__badge-title">4.9 ★</div>
                <div className="hero__badge-sub">Avaliação média</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
