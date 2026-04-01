import { motion } from "framer-motion";
import { stagger } from "../../constants/tokens";
import { useReveal } from "../../hooks/useReveal";

export default function Section({ id, children, className = "" }) {
  const [ref, inView] = useReveal();
  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={stagger}
      className={`section ${className}`}
    >
      {children}
    </motion.section>
  );
}
