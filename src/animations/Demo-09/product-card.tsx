import { motion } from "framer-motion";
import { FC } from "react";

const ProductCard: FC<{
  imagePath: string;
  title: string;
  price: number;
}> = ({ imagePath, price, title }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img
        className="aspect-square w-full object-cover object-top"
        src={imagePath}
      />
      <div className="flex justify-between p-2">
        <p>{title}</p>
        <p>$ {price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
