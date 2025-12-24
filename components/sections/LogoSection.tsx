"use client"
import { LogoBear, LogoDarkBlue, LogoIpsum, Logoo, LogoStar } from "@/assets";
import { motion } from "framer-motion";

export default function LogoSection() {
  const logos = [
    {
      src: LogoBear.src,
      alt: "Logo Bear",
      width: 177,
      height: 39,
    },
    {
      src: LogoIpsum.src,
      alt: "Logo Ipsum",
      width: 193,
      height: 38,
    },
    {
      src: LogoStar.src,
      alt: "Logo Star",
      width: 147,
      height: 32,
    },
    {
      src: LogoDarkBlue.src,
      alt: "Logo Dark Blue",
      width: 168,
      height: 38,
    },
    {
      src: Logoo.src,
      alt: "Logoo",
      width: 154,
      height: 42,
    },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] px-4 md:px-32 py-11">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
      >
        {logos.map((logo, index) => (
          <motion.img
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="mix-blend-luminosity cursor-pointer"
            style={{
              height: `${logo.height}px`,
              width: "auto",
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}
