import { motion } from "framer-motion";
import { fadeUp } from "../../constants/tokens";

export default function SectionLabel({ children }) {
  return (
    <motion.span variants={fadeUp} className="section-label">
      <span className="section-label__line" />
      {children}
    </motion.span>
  );
}
