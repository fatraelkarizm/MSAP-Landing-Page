import { Metadata } from "next";

export function constructMetadata({
     title = "PT. Mitra Surya Abadi Perkasa - Solusi Pengadaan Barang dan Jasa",
     description = "Mitra pengadaan barang dan jasa terpercaya untuk industri, perkantoran, dan pendidikan. Solusi efektif, efisien, dan profesional dengan layanan LPSE, SiKAP, dan Katalog Elektronik.",
     image = "/og-image.jpg",
     icons = "/favicon.ico",
     noIndex = false,
}: {
     title?: string;
     description?: string;
     image?: string;
     icons?: string;
     noIndex?: boolean;
} = {}): Metadata {
     return {
          title,
          description,
          keywords: [
               "Pengadaan Barang dan Jasa",
               "Vendor Terpercaya",
               "Supplier Kantor",
               "Peralatan Pendidikan",
               "LPSE",
               "SiKAP",
               "Katalog Elektronik",
               "PT MSAP",
               "Mitra Surya Abadi Perkasa",
               "Jasa Konstruksi",
               "Pengadaan IT"
          ],
          authors: [{ name: "PT. Mitra Surya Abadi Perkasa" }],
          creator: "PT. Mitra Surya Abadi Perkasa",
          publisher: "PT. Mitra Surya Abadi Perkasa",
          openGraph: {
               title,
               description,
               url: "https://ptmsap.com", // Placeholder, change if valid domain exists
               siteName: "PT. Mitra Surya Abadi Perkasa",
               images: [
                    {
                         url: image,
                         width: 1200,
                         height: 630,
                         alt: title,
                    },
               ],
               locale: "id_ID",
               type: "website",
          },
          twitter: {
               card: "summary_large_image",
               title,
               description,
               images: [image],
               creator: "@ptmsap", // Placeholder handle
          },
          icons,
          metadataBase: new URL("https://ptmsap.com"), // Fixes "metadataBase is missing" warning for OG images
          ...(noIndex && {
               robots: {
                    index: false,
                    follow: false,
               },
          }),
     };
}
