import { useRef } from "react";
import { useInView } from "framer-motion";

export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px", amount: threshold });
  return [ref, inView];
}
