import { motion } from "motion/react";

function RevealText({
  children,
  className = "",
  delay = 0,
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{
          y: "100%",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.8,
        }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default RevealText;