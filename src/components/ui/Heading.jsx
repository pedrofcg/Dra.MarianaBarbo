import { motion } from "framer-motion";
import { fadeUp } from "../../constants/tokens";

export default function Heading({ children, as: Tag = "h2", className = "" }) {
  return (
    <motion.div variants={fadeUp}>
      <Tag className={`heading ${className}`}>
        {children}
      </Tag>
    </motion.div>
  );
}
