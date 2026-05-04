import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { fadeUp } from "../constants/tokens";
import Section from "./ui/Section";
import SectionLabel from "./ui/SectionLabel";
import Heading from "./ui/Heading";
import "../styles/contato.css";

const contactInfo = [
  { icon: <Phone size={18} />, label: "Telefone / WhatsApp", value: "+55 (62) 99158-8693" },

  {
    icon: <MapPin size={18} />,
    label: "Endereço",
    value: (
      <a
        href="https://maps.app.goo.gl/WYszxQmZnfyBABn68"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        R. 13, 941 - Q G15 LT 02 - St. Marista, Goiânia - GO, 74150-140
      </a>
    ),
  },
];

export default function Contato() {
  return (
    <Section id="contato" className="contato">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 64 }}>
          <SectionLabel>Contato</SectionLabel>
          <Heading className="text-center">
            Vamos conversar sobre<br />
            <em>sua saúde?</em>
          </Heading>
        </div>

        <motion.div className="contato__content" variants={fadeUp}>
          {contactInfo.map((c, i) => (
            <div key={i} className="contato__info-item">
              <div className="contato__info-icon">{c.icon}</div>
              <div>
                <div className="contato__info-label">{c.label}</div>
                <div className="contato__info-value">{c.value}</div>
              </div>
            </div>
          ))}

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/5562991588693"
            target="_blank"
            rel="noopener noreferrer"
            className="contato__whatsapp"
          >
            <MessageCircle size={18} />
            Chamar no WhatsApp
          </motion.a>

          <div className="contato__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15284.16242427044!2d-49.27631663270869!3d-16.724825626287856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1ff9247a731%3A0xc2c3a00f17f54e27!2sCl%C3%ADnica%20Mood!5e0!3m2!1spt-BR!2sus!4v1775066174535!5m2!1spt-BR!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
