"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { CapterraMSAP, FeaturedMSAP, HonoredMSAP } from "@/assets";
import Image from "next/image";

export default function Footer() {
     return (
          <footer className="bg-white px-8 md:px-32 pt-16 pb-0">
               {/* Footer Links */}
               <div className="flex justify-between items-start pb-10">
                    {/* Company Column */}
                    <div className="flex flex-col gap-4">
                         <h3 className="text-[#8C9BAA] text-base font-semibold leading-[140%] tracking-[-0.24px]">
                              COMPANY
                         </h3>
                         <div className="flex flex-col gap-3">
                              <Link
                                   href="/about"
                                   className="text-black text-base font-semibold leading-[140%] tracking-[-0.24px] hover:text-[#155DFC] transition-colors"
                              >
                                   About Us
                              </Link>
                              <Link
                                   href="/services"
                                   className="text-black text-base font-semibold leading-[140%] tracking-[-0.24px] hover:text-[#155DFC] transition-colors"
                              >
                                   Our Services
                              </Link>
                              <Link
                                   href="/products"
                                   className="text-black text-base font-semibold leading-[140%] tracking-[-0.24px] hover:text-[#155DFC] transition-colors"
                              >
                                   Products
                              </Link>
                              <Link
                                   href="/privacy"
                                   className="text-black text-base font-semibold leading-[140%] tracking-[-0.24px] hover:text-[#155DFC] transition-colors"
                              >
                                   Privacy Policy
                              </Link>
                         </div>
                    </div>

                    {/* Resource Column */}
                    <div className="flex flex-col gap-4">
                         <h3 className="text-[#8C9BAA] text-base font-semibold leading-[140%] tracking-[-0.24px]">
                              RESOURCE
                         </h3>
                         <div className="flex flex-col gap-3">
                              <Link
                                   href="/partners"
                                   className="text-black text-base font-semibold leading-[140%] tracking-[-0.24px] hover:text-[#155DFC] transition-colors"
                              >
                                   Mitra Terpercaya
                              </Link>
                              <Link
                                   href="/team"
                                   className="text-black text-base font-semibold leading-[140%] tracking-[-0.24px] hover:text-[#155DFC] transition-colors"
                              >
                                   Struktur Tim
                              </Link>
                              <Link
                                   href="/process"
                                   className="text-black text-base font-semibold leading-[140%] tracking-[-0.24px] hover:text-[#155DFC] transition-colors"
                              >
                                   Mekanisme Transaksi
                              </Link>
                         </div>
                    </div>

                    {/* Blog Column */}
                    <div className="flex flex-col gap-4">
                         <h3 className="text-[#8C9BAA] text-base font-semibold leading-[140%] tracking-[-0.24px]">
                              Blog
                         </h3>
                         <div className="flex flex-col gap-3">
                              <Link
                                   href="/blog/ux"
                                   className="text-black text-base font-semibold leading-[140%] tracking-[-0.24px] hover:text-[#155DFC] transition-colors"
                              >
                                   UX design
                              </Link>
                              <Link
                                   href="/blog/ui"
                                   className="text-black text-base font-semibold leading-[140%] tracking-[-0.24px] hover:text-[#155DFC] transition-colors"
                              >
                                   UI design
                              </Link>
                              <Link
                                   href="/blog/sitemap"
                                   className="text-black text-base font-semibold leading-[140%] tracking-[-0.24px] hover:text-[#155DFC] transition-colors"
                              >
                                   Sitemaps design & IA
                              </Link>
                              <Link
                                   href="/blog/web"
                                   className="text-black text-base font-semibold leading-[140%] tracking-[-0.24px] hover:text-[#155DFC] transition-colors"
                              >
                                   Web design
                              </Link>
                         </div>
                    </div>

                    {/* Awards Section */}
                    <div className="flex flex-col gap-2">
                         {/* Play Store Badge */}
                         <div className="bg-white rounded-xl p-3 flex items-center justify-center">
                              <Image
                                   src={FeaturedMSAP}
                                   alt="Google Play"
                                   className="h-[58px] w-auto"
                              />
                         </div>

                         {/* G2 Award */}
                         <div className="bg-white rounded-xl p-3 flex items-center gap-2">
                              <Image
                                   src={HonoredMSAP}
                                   alt="G2"
                                   className="h-[50px] w-[42px]"
                              />
                              <div className="flex flex-col gap-1">
                                   <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                             <svg
                                                  key={i}
                                                  width="19"
                                                  height="19"
                                                  viewBox="0 0 19 19"
                                                  fill="none"
                                             >
                                                  <path
                                                       d="M9.5 2L11.618 7.561L17.5 8.271L13.227 12.129L14.383 18L9.5 14.961L4.617 18L5.773 12.129L1.5 8.271L7.382 7.561L9.5 2Z"
                                                       fill="#FF492C"
                                                  />
                                             </svg>
                                        ))}
                                   </div>
                                   <p className="text-[#8C9BAA] text-base font-semibold leading-[140%] tracking-[-0.24px]">
                                        Honored by G2
                                   </p>
                              </div>
                         </div>

                         {/* Capterra Award */}
                         <div className="bg-white rounded-xl p-3 flex items-center gap-2">
                              <Image
                                   src={CapterraMSAP}
                                   alt="Capterra"
                                   className="h-[46px] w-[42px]"
                              />
                              <div className="flex flex-col gap-1">
                                   <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                             <svg
                                                  key={i}
                                                  width="19"
                                                  height="19"
                                                  viewBox="0 0 19 19"
                                                  fill="none"
                                             >
                                                  <path
                                                       d="M9.5 2L11.618 7.561L17.5 8.271L13.227 12.129L14.383 18L9.5 14.961L4.617 18L5.773 12.129L1.5 8.271L7.382 7.561L9.5 2Z"
                                                       fill="#FF9D28"
                                                  />
                                             </svg>
                                        ))}
                                   </div>
                                   <p className="text-[#8C9BAA] text-base font-semibold leading-[140%] tracking-[-0.24px]">
                                        Capterra admitted
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Footer Bottom */}
               <div className="border-t border-gray-200 py-8 flex justify-between items-center">
                    {/* Copyright & Links */}
                    <div className="flex items-center gap-4">
                         <span className="text-[#8C9BAA] text-base font-semibold leading-[140%] tracking-[-0.24px]">
                              © 2023 FlowMapp
                         </span>
                         <div className="w-1 h-1 rounded-full bg-[#8C9BAA]"></div>
                         <Link
                              href="/terms"
                              className="text-[#8C9BAA] text-base font-semibold leading-[140%] tracking-[-0.24px] hover:text-[#155DFC] transition-colors"
                         >
                              Terms of Use
                         </Link>
                         <Link
                              href="/security"
                              className="text-[#8C9BAA] text-base font-semibold leading-[140%] tracking-[-0.24px] hover:text-[#155DFC] transition-colors"
                         >
                              Security
                         </Link>
                         <Link
                              href="/privacy"
                              className="text-[#8C9BAA] text-base font-semibold leading-[140%] tracking-[-0.24px] hover:text-[#155DFC] transition-colors"
                         >
                              Privacy
                         </Link>
                         <div className="w-1 h-1 rounded-full bg-[#8C9BAA]"></div>
                         <a
                              href="mailto:info@flowmapp.com"
                              className="text-[#8C9BAA] text-base font-semibold leading-[140%] tracking-[-0.24px] hover:text-[#155DFC] transition-colors"
                         >
                              info@flowmapp.com
                         </a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex items-center gap-2">
                         {/* Twitter */}
                         <a
                              href="#"
                              className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                         >
                              <svg width="18" height="15" viewBox="0 0 18 15" fill="none">
                                   <path
                                        d="M13.3732 0H15.9798L9.2565 6.36534L17.9432 15H11.6958L7.5875 9.75283L2.8842 15H0.2775L7.3408 8.19188L-1.0625 0H5.3152L9.0268 4.79341L13.3732 0ZM12.4608 13.5055H13.9058L4.5558 1.43914H2.0032L12.4608 13.5055Z"
                                        fill="#8C9BAA"
                                   />
                              </svg>
                         </a>

                         {/* Medium */}
                         <a
                              href="#"
                              className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                         >
                              <svg width="18" height="15" viewBox="0 0 18 15" fill="none">
                                   <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.207588 0.5V0.903747L2.13511 3.35719V12.3013L0 15.1507V15.5H5.36752V15.1507L3.20259 12.3013V4.78551L7.91758 15.5H8.45153L12.5141 4.78551V13.5124L10.9423 15.1507V15.5H18V15.1507L16.3988 13.5124V2.48758L18 0.841599V0.5H13.0181L9.48931 9.75471L5.45634 0.5H0.207588Z"
                                        fill="#8C9BAA"
                                   />
                              </svg>
                         </a>

                         {/* LinkedIn */}
                         <a
                              href="#"
                              className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                         >
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                   <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.5 -1.00024C1.5 -1.82811 2.1699 -2.5 3.00066 -2.5C3.82806 -2.5 4.5 -1.82811 4.5 -1.00024C4.5 -0.171895 3.82806 0.5 3.00066 0.5C2.1699 0.5 1.5 -0.171895 1.5 -1.00024ZM18 15.5H15V9.5C15 8 15 5.75 12.75 5.75C10.5 5.75 10.5 7.88148 10.5 9.5V15.5H7.5V3.5H10.5V5C10.5 5 12 3.5 14.25 3.5C16.5 3.5 18 5.03193 18 8.75V15.5ZM4.5 15.5H1.5V3.5H4.5V15.5Z"
                                        fill="#8C9BAA"
                                   />
                              </svg>
                         </a>

                         {/* Instagram */}
                         <a
                              href="#"
                              className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                         >
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                   <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6.375 8.00054C6.375 9.45013 7.55029 10.6259 8.99911 10.6259C10.448 10.6259 11.6231 9.45013 11.6231 8.00054C11.6231 6.55005 10.448 5.375 8.99911 5.375C7.55029 5.375 6.375 6.55005 6.375 8.00054ZM11.9979 4.06225C11.9979 3.54469 12.4178 3.12461 12.9351 3.12461C13.4534 3.12461 13.8732 3.54469 13.8732 4.06225C13.8732 4.57981 13.4534 4.99989 12.9351 4.99989C12.4178 4.99989 11.9979 4.57981 11.9979 4.06225ZM5.25048 8.00054C5.25048 5.92909 6.92898 4.24984 8.99911 4.24984C11.0693 4.24984 12.7476 5.92909 12.7476 8.00054C12.7476 10.072 11.0693 11.7512 8.99911 11.7512C6.92898 11.7512 5.25048 10.072 5.25048 8.00054ZM5.69746 0.5C3.37896 0.5 1.5 2.37907 1.5 4.69704V11.303C1.5 13.621 3.37896 15.5 5.69746 15.5H12.3026C14.621 15.5 16.5 13.621 16.5 11.303V4.69704C16.5 2.37907 14.621 0.5 12.3026 0.5H5.69746Z"
                                        fill="#8C9BAA"
                                   />
                              </svg>
                         </a>

                         {/* YouTube */}
                         <a
                              href="#"
                              className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                         >
                              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                                   <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.8136 1.41821C17.6746 1.64873 18.3513 2.32535 18.5818 3.18641C18.9983 4.74548 19 8.00033 19 8.00033C19 8.00033 19 11.2552 18.5818 12.8143C18.3513 13.6753 17.6746 14.352 16.8136 14.5825C15.2545 15.0007 9 15.0007 9 15.0007C9 15.0007 2.74548 15.0007 1.18641 14.5825C0.325322 14.352 -0.351334 13.6753 -0.581818 12.8143C-1 11.2552 -1 8.00033 -1 8.00033C-1 8.00033 -1 4.74548 -0.581818 3.18641C-0.351334 2.32535 0.325322 1.64873 1.18641 1.41821C2.74548 1 9 1 9 1C9 1 15.2545 1 16.8136 1.41821ZM12.194 8.00061L6.99814 11.0002V5.00094L12.194 8.00061Z"
                                        fill="#8C9BAA"
                                   />
                              </svg>
                         </a>
                    </div>
               </div>
          </footer>
     );
}
