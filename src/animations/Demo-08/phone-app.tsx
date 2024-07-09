import { motion } from "framer-motion";
import { forwardRef } from "react";

const PhoneApp = forwardRef<HTMLDivElement, { onClose: () => void }>(
  ({ onClose }, ref) => {
    return (
      <motion.div
        layoutId="phone"
        ref={ref}
        className="absolute inset-0 left-0 top-0 z-40 bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          borderRadius: 12,
          backgroundImage: `url("/screenshots/phone.jpeg")`,
        }}
      >
        <button
          className="absolute bottom-2 left-1/2 h-1 w-28 -translate-x-1/2 rounded bg-black"
          onClick={onClose}
        />
      </motion.div>
    );
  },
);

export default PhoneApp;
