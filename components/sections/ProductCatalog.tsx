"use client"
import { BagProduct, BookProduct, ChairProduct, DeskProduct, ElectronicProduct, MatrasProduct, TumbleProduct, WoodChair } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductCatalog() {
  const products = [
    {
      image: TumbleProduct,
      name: "Essentials Storage Set (Brown)",
      price: "IDR 9XX",
    },
    {
      image: BagProduct,
      name: "Essentials Storage Set (Brown)",
      price: "IDR 9XX",
    },
    {
      image: ElectronicProduct,
      name: "Essentials Storage Set (Brown)",
      price: "IDR 9XX",
    },
    {
      image: MatrasProduct,
      name: "Essentials Storage Set (Brown)",
      price: "IDR 9XX",
    },
    {
      image: BookProduct,
      name: "Essentials Storage Set (Brown)",
      price: "IDR 9XX",
    },
    {
      image: ChairProduct,
      name: "Essentials Storage Set (Brown)",
      price: "IDR 9XX",
    },
    {
      image: DeskProduct,
      name: "Essentials Storage Set (Brown)",
      price: "IDR 9XX",
    },
    {
      image: WoodChair,
      name: "Essentials Storage Set (Brown)",
      price: "IDR 9XX",
    },
  ];

  return (
    <section id="katalog" className="scroll-mt-32 w-full bg-white px-4 md:px-32 py-8">
      <div className="flex flex-col gap-8">
        {/* Header with Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0">
          {/* Results Count & Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="text-[#1E2939] text-base md:text-lg font-medium leading-7">
              Showing 1 - 8 of 24 Result
            </span>
            <div className="flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="opacity-40 cursor-pointer"
              >
                <path
                  d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
                  stroke="#141B34"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="cursor-pointer">
                <path
                  d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                  stroke="#141B34"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* Filter Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full lg:w-auto"
          >
            <button className="flex items-center justify-between md:justify-center gap-4 px-4 py-3 border border-[#D1D5DC] rounded-lg text-[#1E2939] text-base md:text-lg font-medium leading-[150%] hover:bg-gray-50 transition-colors">
              Pilih Kategori
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                  stroke="#1E2939"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="flex items-center justify-between md:justify-center gap-4 px-4 py-3 border border-[#D1D5DC] rounded-lg text-[#1E2939] text-base md:text-lg font-medium leading-[150%] hover:bg-gray-50 transition-colors">
              Urutkan
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                  stroke="#1E2939"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="flex items-center gap-4 px-4 py-3 border border-[#D1D5DC] rounded-lg w-full md:w-[416px]">
              <input
                type="text"
                placeholder="Search Products..."
                className="flex-1 text-[#6A7282] text-base md:text-lg font-medium leading-[150%] bg-transparent outline-none w-full"
              />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 17L21 21"
                  stroke="#141B34"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
                  stroke="#141B34"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              key={index}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[308px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#1E2939] text-xl font-medium leading-7 group-hover:text-[#155DFC] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#1E2939] text-lg font-medium leading-5">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
