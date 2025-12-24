'use client';

import { WomanPerson, WomanPersonBG } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="kontak" className="scroll-mt-32 w-full py-16 px-4 md:px-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full mt-12"
      >
        {/* Background Card */}
        <div
          className="absolute inset-0 overflow-hidden shadow-2xl z-0"
        >
          <Image
            src={WomanPersonBG}
            alt="Background"
            fill
            className="object-cover object-center"
            quality={90}
            priority
          />
        </div>

        {/* Content & Image Wrapper */}
        <div className="relative z-10 flex flex-col md:flex-row min-h-[400px] md:min-h-[480px]">
          {/* Image - Pop out effect */}
          <div className="relative md:absolute md:bottom-0 md:-left-12 lg:-left-20 w-[380px] md:w-[600px] lg:w-[750px] shrink-0 z-20 flex items-end">
            <Image
              src={WomanPerson}
              alt="Contact Person"
              className="w-full h-auto object-contain drop-shadow-2xl translate-y-[2px]"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6 p-8 md:py-12 md:pr-12 md:pl-[500px] lg:pl-[640px] w-full items-center md:items-start text-center md:text-left self-center relative z-30">
            <div className="inline-flex px-3 py-1.5 bg-white rounded-md">
              <span className="text-[#193CB8] text-sm font-bold tracking-wide">
                HUBUNGI KAMI
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-white text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight">
                Get In Touch With Us
              </h2>
              <p className="text-white/90 text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-xl">
                Reach out today to discuss how we can support your business
                goals. Our team is ready to provide answers and solutions.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start pt-2">
              <button className="px-6 py-3 bg-white rounded-lg text-[#101828] text-sm md:text-base font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl active:scale-95 duration-200">
                Konsultasi Gratis Sekarang!
              </button>

              <div className="flex items-center gap-3 bg-white/10 p-2 pr-4 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M5.73051 12.2982L8.81101 9.21769C9.4394 8.58932 9.65683 7.66082 9.40268 6.80927C9.20395 6.1434 8.98005 5.34291 8.83122 4.65841C8.69356 4.02531 8.13803 3.5 7.49014 3.5H5.73051C4.43474 3.5 3.37063 4.55448 3.51277 5.84243C4.59328 15.6329 12.3671 23.4067 22.1576 24.4873C23.4456 24.6294 24.5 23.5653 24.5 22.2695V20.5099C24.5 19.862 23.9726 19.3305 23.3351 19.2145C22.6319 19.0867 21.888 18.8771 21.2655 18.6787C20.3713 18.3936 19.3773 18.594 18.7137 19.2576L15.7018 22.2695"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.418 12.836L23.3346 12.8337M15.168 7.58593V4.66699M20.9426 7.05895L18.8791 9.12249"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-white/80 text-xs font-medium">
                    Have Any Question?
                  </span>
                  <span className="text-white text-sm md:text-base font-bold whitespace-nowrap">
                    +62 (21) 896 8756 4
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
