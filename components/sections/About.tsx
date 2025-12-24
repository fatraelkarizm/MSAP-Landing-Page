"use client"
import { AboutMSAP, ShakeHandMSAP } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="profil" className="scroll-mt-32 w-full bg-white px-4 md:px-32 py-8">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <div className="inline-flex px-3 py-2 bg-[rgba(22,36,86,0.05)] items-center gap-2.5 self-start">
            <Image
              src={ShakeHandMSAP}
              alt=""
              className="w-[25.6px] h-5"
            />
            <span className="text-[#162456] text-sm font-normal leading-[150%]">
              TENTANG KAMI
            </span>
          </div>
          <h2 className="text-[#030712] text-2xl md:text-[48px] font-medium leading-tight md:leading-[56px] max-w-[740px]">
            Mitra Pengadaan Barang dan Jasa yang Berpengalaman
          </h2>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-8">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 h-[300px] lg:h-auto lg:min-h-[380px] relative shrink-0"
          >
            <Image
              src={AboutMSAP}
              alt="About Us"
              fill
              className="rounded-xl object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col flex-1 h-auto gap-6 lg:gap-8 justify-between"
          >
            <div className="flex flex-col gap-4">
              <p className="text-base md:text-[30px] font-medium leading-7 md:leading-9">
                <span className="text-[rgba(16,24,40,1)]">
                  Merupakan perusahaan pengadaan barang dan jasa,{" "}
                </span>
                <span className="text-[rgba(16,24,40,0.8)]">
                  Kami berkomitmen untuk menghadirkan{" "}
                </span>
                <span className="text-[rgba(16,24,40,0.6)]">
                  solusi yang tepat, efisien, dan dapat diandalkan.
                </span>
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex flex-col gap-1">
                  <span className="text-[#101828] text-3xl md:text-[48px] font-bold leading-[64px]">
                    2000+
                  </span>
                  <span className="text-[#101828] text-base md:text-xl font-normal leading-[150%]">
                    Vendor Terpercaya
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#155DFC] text-3xl md:text-[48px] font-bold leading-[64px]">
                    750+
                  </span>
                  <span className="text-[#101828] text-base md:text-xl font-normal leading-[150%]">
                    Transaksi Selesai
                  </span>
                </div>
              </div>

              <p className="text-[#4A5565] text-base md:text-xl font-normal leading-[150%]">
                Fokus kami adalah membangun kemitraan jangka panjang dengan
                memberikan kualitas layanan yang konsisten.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <button className="px-6 py-4 bg-[#155DFC] rounded-md text-white text-base font-medium leading-[150%] hover:bg-[#1247CC] transition-colors w-full sm:w-auto">
                Lebih Banyak Tentang Kami
              </button>
              <button className="px-6 py-4 rounded-md text-[#1E2939] text-base font-medium leading-[150%] hover:bg-gray-100 transition-colors w-full sm:w-auto">
                Eksplorasi Produk & Jasa
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
