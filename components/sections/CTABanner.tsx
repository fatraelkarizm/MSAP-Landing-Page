"use client"
import { AvailMSAP } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="w-full px-4 md:px-32 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative min-h-[280px] h-auto rounded-xl px-6 md:px-[58px] py-[40px] md:py-[58px] flex items-center overflow-hidden"
      >
        <Image
          src={AvailMSAP}
          alt="CTA Background"
          fill
          className="object-cover object-center"
        />
        <div className="relative z-10 flex flex-col gap-4 md:gap-2 max-w-[740px]">
          <h2 className="text-white text-3xl md:text-[40px] font-medium leading-tight md:leading-[48px]">
            Kami Menyediakan apa yang Organisasi, Instansi, atau Bisnis Anda
            Butuhkan
          </h2>
          <p className="text-white text-lg md:text-xl font-normal leading-[150%] opacity-90 max-w-[508px]">
            Fokus kami adalah membangun kemitraan jangka panjang dengan
            memberikan kualitas layanan yang konsisten.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
