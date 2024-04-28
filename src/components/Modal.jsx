import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ title, children }) {
  return createPortal(
    <>
      <motion.dialog
        initial="hidden"
        animate="visible"
        exit="hidden"
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}