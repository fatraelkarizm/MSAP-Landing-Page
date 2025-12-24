"use client"
import { motion } from "framer-motion";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      question: "What is Financial Planning?",
      answer: "",
    },
    {
      question: "Why is financial planning important?",
      answer:
        "Financial planning helps you understand your financial situation, set achievable goals, and create a roadmap to reach those goals. It can provide peace of mind, help you make informed decisions, and prepare for unexpected events.",
    },
    {
      question: "How often should I review my financial plan?",
      answer: "",
    },
    {
      question: "Do I need a financial advisor to create a financial plan?",
      answer: "",
    },
    {
      question: "Do I need a financial advisor to create a financial plan?",
      answer: "",
    },
  ];

  return (
    <section id="faq" className="scroll-mt-32 w-full bg-[#F8FAFC] px-4 md:px-32 py-16">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 w-full lg:w-[524px]"
        >
          <div className="inline-flex px-3 py-2 bg-[rgba(22,36,86,0.05)] self-start">
            <span className="text-[#162456] text-sm font-normal leading-[150%]">
              Frequently Ask Questions
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#030712] text-3xl md:text-[48px] font-medium leading-tight md:leading-[56px]">
              Proven Results You
              <br />
              Can See
            </h2>
            <p className="text-[#4A5565] text-lg md:text-xl font-normal leading-[150%]">
              Find answers to some of the most common questions about financial
              planning, from budgeting and investment strategies to retirement
              planning and managing debt.
            </p>
          </div>
          <button className="px-6 py-4 bg-[#155DFC] rounded-md text-white text-base font-medium leading-[150%] self-start hover:bg-[#1247CC] transition-colors">
            Konsultasi Gratis Sekarang!
          </button>
        </motion.div>

        {/* Right Column - FAQ List */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col justify-center w-full"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#E5E7EB] py-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <div className="flex flex-col gap-2.5">
                <div className="flex justify-between items-center">
                  <h3 className="text-[#101828] text-xl md:text-2xl font-medium leading-[150%]">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="#101828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  {faq.answer && (
                    <p className="text-[#101828] text-lg md:text-xl font-normal leading-[150%] pb-2">
                      {faq.answer}
                    </p>
                  )}
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
