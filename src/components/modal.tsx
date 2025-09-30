import { motion, AnimatePresence } from "motion/react";
import React from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  children: React.ReactNode;
  title: string
}

function Modal({ children, isOpen, setIsOpen, title}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="z-40 absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setIsOpen(false)}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <motion.div
            className="bg-white border p-4 w-[80vw] h-[80vh] rounded-lg flex flex-col gap-2 relative"
            initial={{
              scale: 0.6,
            }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.6 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >

            <h2 className="w-fit absolute left-3 top-3 font-semibold">{title}</h2>
            <Button
              className="w-fit absolute right-2 top-2"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <X />
            </Button>

            <>{children}</>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
