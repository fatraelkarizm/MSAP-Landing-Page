"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroMSAP } from "@/assets";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="scroll-mt-32 relative w-full h-[560px] flex items-center overflow-hidden"
    >
      <Image
        src={HeroMSAP}
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
        quality={90}
      />

      {/* Gradient Overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, rgba(21, 93, 252, 0.8) 130%), linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))`
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-[106px] max-w-[878px] mx-auto md:mx-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 text-center md:text-left"
        >
          {/* Text Content */}
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-4xl md:text-[60px] font-bold leading-tight md:leading-[70px]">
              Solusi Pengadaan
              <br />
              yang Efektif, Efisien, dan Profesional.
            </h1>
            <p className="text-white text-base md:text-lg font-medium leading-[150%] max-w-[654px] mx-auto md:mx-0">
              Partner Terpercaya untuk Pengadaan Barang dan Jasa Industri,
              Perkantoran, dan Pendidikan Anda. Hanya kepada PT. Mitra Surya
              Abadi Perkasa
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="px-4 py-3 bg-[#EFF6FF] rounded-md text-[#1E2939] text-base font-semibold leading-[150%] hover:bg-white transition-colors w-full md:w-auto">
              Eksplorasi Produk dan Jasa
            </button>
            <button className="px-4 py-3 rounded-lg text-white text-base font-semibold leading-[150%] border border-white hover:bg-white/10 transition-colors w-full md:w-auto">
              Cek Status Pengiriman
            </button>
          </div>
        </motion.div>
      </div>
    </section >
  );
}
