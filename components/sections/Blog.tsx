"use client"
import Link from "next/link";
import { GroupArticle, KeyArticle, TalkArticle } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    {
      image: KeyArticle,
      date: "22 DES",
      category: "KATEGORI I",
      title: "5 Key Strategies for Sustainable Business Growth",
      description:
        "Discover Actionable Strategies to Effectively Scale your business and achieve long-term success",
      featured: true,
    },
    {
      image: GroupArticle,
      date: "22 DES",
      category: "KATEGORI I",
      title: "5 Key Strategies for Sustainable Business Growth",
      description:
        "Discover Actionable Strategies to Effectively Scale your business and achieve long-term success",
      featured: false,
    },
    {
      image: TalkArticle,
      date: "22 DES",
      category: "KATEGORI I",
      title: "5 Key Strategies for Sustainable Business Growth",
      description:
        "Discover Actionable Strategies to Effectively Scale your business and achieve long-term success",
      featured: false,
    },
  ];

  return (
    <section id="artikel" className="scroll-mt-32 w-full bg-white px-4 md:px-32 py-8">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 max-w-[956px]"
          >
            <div className="inline-flex px-3 py-2 bg-[rgba(22,36,86,0.05)] self-start">
              <span className="text-[#162456] text-sm font-normal leading-[150%]">
                READ OUR BLOG
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[#030712] text-3xl md:text-[48px] font-medium leading-tight md:leading-[56px]">
                Insight & Artikel Terbaru dari Kami
              </h2>
              <p className="text-[#4A5565] text-lg md:text-xl font-medium leading-[150%]">
                Temukan insight terkini, tips ahli, dan update terbaru yang
                membantu Anda tetap selangkah lebih maju.
              </p>
            </div>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="px-6 py-4 bg-[#155DFC] rounded-md text-white text-base font-medium leading-[150%] hover:bg-[#1247CC] transition-colors w-full lg:w-auto"
          >
            Lihat Lebih Banyak
          </motion.button>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="flex flex-col gap-[21px] w-full"
            >
              {/* Image with Date Badge */}
              <div className="relative w-full aspect-square md:h-[416px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4 w-24 h-24 bg-white/60 backdrop-blur-[250px] rounded-none flex flex-col items-center justify-center gap-1 opacity-60">
                  <span className="text-white text-4xl font-bold leading-9">
                    {post.date.split(" ")[0]}
                  </span>
                  <span className="text-white text-2xl font-normal leading-6">
                    {post.date.split(" ")[1]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <span className="text-[#193CB8] text-base font-normal leading-[18px]">
                  {post.category}
                </span>
                <h3 className="text-[#030712] text-2xl font-medium leading-8">
                  <Link href="#" className="hover:underline decoration-2 underline-offset-2">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-[#4A5565] text-base font-normal leading-[18px]">
                  {post.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
