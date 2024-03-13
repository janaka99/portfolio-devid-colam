import React from "react";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../../../animations/animation";

const Title = ({ children, color = "text-primary-3" }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="visible"
      transition={{
        duration: 0.5,
      }}
      viewport={{ once: true }}
      variants={slideInFromBottom}
      className={`${color} text-4xl md:text-5xl font-semibold tracking-tight mb-16 text-primary-1`}
    >
      {children}
    </motion.div>
  );
};

export default Title;
