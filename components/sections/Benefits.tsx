"use client"
import { HandBenefit, LoyaltyBenefit, ModestyBenefit, PaperBenefit } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Benefits() {
  const benefits = [
    {
      icon: HandBenefit,
      title: "Integritas",
      description:
        "Kami selalu berpegang teguh pada etika bisnis, keadilan, dan kejujuran yang menjadi kunci keberhasilan.",
    },
    {
      icon: PaperBenefit,
      title: "Profesionality",
      description:
        "Senantiasa bertindak dengan mengedepankan moralitas, bertanggung jawab, jujur, serta konsisten",
    },
    {
      icon: LoyaltyBenefit,
      title: "Loyality",
      description:
        "Memiliki tekad untuk mentaati serta melaksanakan peraturan dengan penuh kesadaran dan sikap tanggung jawab.",
    },
    {
      icon: ModestyBenefit,
      title: "Modesty",
      description:
        "Perilaku kami selalu mencerminkan sikap rendah hati, sederhana, dan sopan santun dalam setiap interaksi.",
    },
  ];

  return (
    <section id="benefit" className="scroll-mt-32 w-full bg-white px-4 md:px-32 py-8">
      <div className="flex flex-col items-center gap-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 max-w-[852px]"
        >
          <div className="inline-flex px-3 py-2 bg-[rgba(22,36,86,0.05)]">
            <span className="text-[#162456] text-sm font-normal leading-[150%]">
              BENEFIT KERJA SAMA
            </span>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-[#030712] text-2xl md:text-[48px] font-medium leading-tight md:leading-[56px]">
              Menjaga setiap proses kerjasama agar tetap memberikan pengalaman
              terbaik
            </h2>
            <p className="text-[#4A5565] text-base md:text-xl font-normal leading-6">
              Tujuan kami adalah menjadi perusahaan terbaik dan inovatif di
              bidang pengadaan barang dan jasa.
            </p>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {benefits.map((benefit, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="w-full h-auto min-h-[268px] bg-[#FAFAFA] relative p-6 pb-8 md:pb-6 rounded-xl"
            >
              <Image
                src={benefit.icon}
                alt={benefit.title}
                className="w-16 h-16 mb-4"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-[#030712] text-xl md:text-[30px] font-medium leading-7 md:leading-9">
                  {benefit.title}
                </h3>
                <p className="text-[#4A5565] text-sm md:text-xl font-normal leading-6">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
