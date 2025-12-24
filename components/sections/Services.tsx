"use client"
import { CatalogueLogo, LPSELogo, SikapLogo, SiplahLogo } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: LPSELogo,
      title: "Layanan Pengadaan Secara Elektronik",
      description:
        "Melalui portal online LPSE, perusahaan kami dapat mengikuti berbagai tender untuk menyediakan barang dan jasa yang instansi Anda butuhkan.",
    },
    {
      icon: SikapLogo,
      title: "Sistem Informasi\nKinerja Penyedia",
      description:
        "Sistem daring yang digunakan oleh instansi pemerintah untuk menyelenggarakan seluruh proses tender atau lelang pengadaan barang/jasa secara transparan dan akuntabel.",
    },
    {
      icon: SiplahLogo,
      title: "Sistem Informasi Pengadaan Di Sekolah",
      description:
        "Sistem daring yang digunakan oleh instansi pemerintah untuk menyelenggarakan seluruh proses tender atau lelang pengadaan barang/jasa secara transparan dan akuntabel.",
    },
    {
      icon: CatalogueLogo,
      title: "Sistem katalog\nElektronik",
      description:
        "Sistem daring yang digunakan oleh instansi pemerintah untuk menyelenggarakan seluruh proses tender atau lelang pengadaan barang/jasa secara transparan dan akuntabel.",
    },
  ];

  return (
    <section id="layanan" className="scroll-mt-32 w-full bg-white px-4 md:px-32 py-8">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 max-w-[956px]"
          >
            <div className="inline-flex px-3 py-2 bg-[rgba(22,36,86,0.05)] self-start">
              <span className="text-[#162456] text-sm font-normal leading-[150%]">
                LAYANAN PENGADAAN BARANG DAN JASA
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl md:text-[48px] font-medium leading-tight md:leading-[56px]">
                <span className="text-[rgba(3,7,18,1)]">
                  Layanan pengadaan terpadu{" "}
                </span>
                <span className="text-[rgba(3,7,18,0.8)]">untuk ber</span>
                <span className="text-[rgba(3,7,18,0.6)]">
                  bagai kebutuhan organisasi atau bisnis Anda.
                </span>
              </h2>
              <p className="text-[#4A5565] text-base md:text-xl font-medium leading-[150%]">
                kami memastikan setiap kategori pengadaan berjalan efektif dan
                terkontrol.
              </p>
            </div>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="px-6 py-4 bg-[#155DFC] rounded-md text-white text-base font-medium leading-[150%] hover:bg-[#1247CC] transition-colors w-full md:w-auto"
          >
            Lihat Katalog Produk
          </motion.button>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="flex flex-col gap-4 p-6 rounded-xl border border-[#E5E7EB] bg-white hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col gap-2">
                <Image
                  src={service.icon}
                  alt={service.title}
                  className="w-[115px] h-12"
                />
                <h3 className="text-xl md:text-2xl font-medium leading-7 text-black whitespace-pre-line">
                  {service.title}
                </h3>
                <p className="text-[#4A5565] text-base md:text-xl font-normal leading-[150%]">
                  {service.description}
                </p>
              </div>
              <a
                href="#"
                className="text-[#193CB8] text-lg font-medium leading-[150%] underline hover:text-[#155DFC] transition-colors"
              >
                Lihat Produk
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
