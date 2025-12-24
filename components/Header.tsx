"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoMSAP } from "@/assets";

export default function Header() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [activeSection, setActiveSection] = useState("beranda");

     useEffect(() => {
          const handleScroll = () => {
               // Order must match the DOM structure in page.tsx
               const sections = [
                    "beranda",
                    "layanan",
                    "profil",
                    "katalog",
                    "benefit",
                    "faq",
                    "tim",
                    "kontak",
                    "artikel"
               ];

               let current = "";

               for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                         const rect = element.getBoundingClientRect();
                         // Trigger point: 250px from top (roughly below header + some content)
                         // If the section top is above this line, it's a candidate for "active"
                         if (rect.top <= 250) {
                              current = section;
                         }
                    }
               }

               if (current) {
                    setActiveSection(current);
               }
          };

          window.addEventListener("scroll", handleScroll);
          handleScroll(); // Check on mount
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     const navLinks = [
          { href: "#beranda", label: "Beranda", id: "beranda" },
          { href: "#layanan", label: "Kategori Layanan", id: "layanan" },
          { href: "#profil", label: "Profil Kami", id: "profil" },
          { href: "#katalog", label: "Katalog Produk", id: "katalog" },
          { href: "#benefit", label: "Benefit", id: "benefit" },
          { href: "#faq", label: "FAQs", id: "faq" },
          { href: "#tim", label: "Tim Kami", id: "tim" },
          { href: "#artikel", label: "Artikel", id: "artikel" },
     ];

     return (
          <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
               {/* Top Bar */}
               <div className="bg-[#1C398E] px-4 md:px-32 py-2.5 hidden md:block">
                    <div className="flex items-center gap-8 text-white text-sm leading-[150%]">
                         <span className="font-normal">Phone: +62 XXX XXXX XXXX</span>
                         <span className="font-normal">Email: support@ptmsap.com</span>
                    </div>
               </div>

               {/* Main Navigation */}
               <div className="bg-white px-4 md:px-32 py-4 md:py-5 flex justify-between items-center relative">
                    {/* Logo */}
                    <Link href="#beranda" onClick={() => setActiveSection("beranda")}>
                         <Image
                              src={LogoMSAP}
                              alt="PT Mitra Surya Abadi Perkasa"
                              className="h-[32px] md:h-[42px] w-auto"
                         />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-4">
                         <nav className="flex items-center">
                              {navLinks.map((link) => (
                                   <Link
                                        key={link.id}
                                        href={link.href}
                                        onClick={() => setActiveSection(link.id)}
                                        className={`px-4 py-3 text-base font-medium leading-[150%] transition-colors ${activeSection === link.id
                                             ? "text-[#155DFC]"
                                             : "text-[#1E2939] hover:text-[#155DFC]"
                                             }`}
                                   >
                                        {link.label}
                                   </Link>
                              ))}
                         </nav>

                         {/* CTA Button */}
                         <Link
                              href="#kontak"
                              onClick={() => setActiveSection("kontak")}
                              className="px-5 py-3 bg-[#155DFC] rounded-md text-center text-white text-base font-medium leading-[150%] hover:bg-[#1247CC] transition-colors"
                         > 
                              Jadwalkan Konsultasi
                         </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                         className="lg:hidden p-2 text-[#1E2939]"
                         onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                         {isMenuOpen ? (
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                   <line x1="18" y1="6" x2="6" y2="18"></line>
                                   <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                         ) : (
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                   <line x1="3" y1="12" x2="21" y2="12"></line>
                                   <line x1="3" y1="6" x2="21" y2="6"></line>
                                   <line x1="3" y1="18" x2="21" y2="18"></line>
                              </svg>
                         )}
                    </button>
               </div>

               {/* Mobile Menu Drawer */}
               <AnimatePresence>
                    {isMenuOpen && (
                         <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                         >
                              <div className="flex flex-col px-4 py-4 gap-2">
                                   {navLinks.map((link) => (
                                        <Link
                                             key={link.id}
                                             href={link.href}
                                             className={`px-4 py-3 text-base font-medium leading-[150%] rounded-lg ${activeSection === link.id
                                                  ? "text-[#155DFC] bg-gray-50"
                                                  : "text-[#1E2939] hover:bg-gray-50"
                                                  }`}
                                             onClick={() => {
                                                  setActiveSection(link.id);
                                                  setIsMenuOpen(false);
                                             }}
                                        >
                                             {link.label}
                                        </Link>
                                   ))}
                                   <Link
                                        href="#kontak"
                                        className="mt-2 w-full px-5 py-3 bg-[#155DFC] rounded-md text-white text-base font-medium leading-[150%] hover:bg-[#1247CC] transition-colors text-center"
                                        onClick={() => {
                                             setActiveSection("kontak");
                                             setIsMenuOpen(false);
                                        }}
                                   >
                                        Jadwalkan Konsultasi
                                   </Link>
                              </div>
                         </motion.div>
                    )}
               </AnimatePresence>
          </header>
     );
}
