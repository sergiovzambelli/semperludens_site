import { AnimatePresence, motion } from "framer-motion";
import LogoSL from "./LogoSL";

export default function Loading() {
  return (
    <div className="flex h-screen justify-center items-center">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            y : {
              duration: 0.01,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }
          }} 
          >
          <LogoSL height={200} width={200} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}