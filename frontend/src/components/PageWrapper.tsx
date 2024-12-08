import { animate, motion } from "framer-motion";
import { ReactNode } from "react";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duraction: 0.3,
      ease: 'easeIn'
    }
  }
}

export default function PageWrapper({ children } : { children: ReactNode}) {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}