"use client"
import { AchmadPerson, LatiefPerson, NaufalPerson, PopyPerson } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Team() {
  const team = [
    {
      image: LatiefPerson,
      name: "M. Latief Arya S. S",
      position: "Komisaris Utama",
    },
    {
      image: AchmadPerson,
      name: "Achmad Gumilar, SE",
      position: "Direktur Utama",
    },
    {
      image: PopyPerson,
      name: "Popy Suryandari",
      position: "Direktur",
    },
    {
      image: NaufalPerson,
      name: "Muhammad Naufal",
      position: "Direktur",
    },
  ];

  return (
    <section id="tim" className="scroll-mt-32 w-full bg-white px-4 md:px-32 py-8">
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
              TIM KAMI
            </span>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-[#030712] text-3xl md:text-[48px] font-medium leading-tight md:leading-[56px]">
              Struktur Pimpinan Perusahaan
            </h2>
            <p className="text-[#4A5565] text-lg md:text-xl font-normal leading-6">
              Kami akan selalu bergerak selaras dengan tujuan dan kesuksesan
              Anda.
            </p>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {team.map((member, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="flex flex-col gap-4 w-full"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="w-full h-[308px] object-cover rounded-lg"
              />
              <div className="flex flex-col gap-2 w-full">
                <h3 className="text-[#030712] text-2xl font-medium leading-8">
                  {member.name}
                </h3>
                <p className="text-[#4A5565] text-xl font-normal leading-6">
                  {member.position}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
