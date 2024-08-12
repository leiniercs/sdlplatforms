import type { Metadata } from "next";
import type { Organization } from "schema-dts";
import { ReactNode } from "react";
import { jsonLdScriptProps } from "react-schemaorg";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Noto_Sans } from "next/font/google";

type CustomLayoutProps = {
   children: ReactNode;
};

//const urlBase = "http://localhost:3000";
const urlBase = "https://www.sdlplatforms.com";
const appName: string = "SDL Platforms";
const favIcon: string = `${urlBase}/images/logo/favicon.png`;
const ogImage: string = `${urlBase}/images/logo/logo-background.png`;
const globalFont = Noto_Sans({
   subsets: ["latin"],
   preload: true
});

export async function generateMetadata(): Promise<Metadata> {
   unstable_setRequestLocale("en");
   const t = await getTranslations({ locale: "en", namespace: "metadata" });

   return {
      title: "SDL Platforms",
      description: t("description"),
      keywords: t("keywords"),
      icons: {
         icon: favIcon,
         shortcut: favIcon,
         apple: favIcon
      },
      openGraph: {
         siteName: "SDL Platforms",
         title: "SDL Platforms",
         description: t("description"),
         images: [ogImage],
         locale: "en",
         type: "website"
      },
      twitter: {
         card: "summary_large_image",
         site: "SDL Platforms",
         title: "SDL Platforms",
         description: t("description"),
         images: [ogImage]
      },
      alternates: {
         canonical: urlBase,
         languages: {
            en: `${urlBase}/en`,
            es: `${urlBase}/es`
         }
      },
      category: "technology",
      verification: { google: "qTPFncX-rYu8jMUfjaPfIwjIzWemG0kg0Rk3uxF8DvA" },
      robots: {
         index: true,
         follow: true,
         googleBot: {
            index: true,
            follow: true,
            noimageindex: true
         }
      }
   };
}

export default async function RootLayout({
   children
}: Readonly<CustomLayoutProps>) {
   unstable_setRequestLocale("en");
   const tMetadata = await getTranslations({
      locale: "en",
      namespace: "metadata"
   });

   return (
      <html className="antialiased dark">
         <head>
            <script
               {...jsonLdScriptProps<Organization>({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  image: ogImage,
                  url: urlBase,
                  logo: favIcon,
                  name: appName,
                  description: tMetadata("description"),
                  email: "contact@sdlplatforms.com",
                  telephone: "+971 (4) 288-5285",
                  address: {
                     "@type": "PostalAddress",
                     streetAddress:
                        "Building A1, Dubai Digital Park, Dubai Silicon Oasis. P.O. Box 342001",
                     addressLocality: "Dubai",
                     addressRegion: "Dubai",
                     postalCode: "00000",
                     addressCountry: "AE"
                  },
                  // @ts-ignore
                  hasMerchantReturnPolicy: {
                     merchantReturnLink: "https://www.sdlplatforms.com/refund",
                     itemCondition: "https://schema.org/NewCondition",
                     refundType: "https://schema.org/FullRefund",
                     returnFees: "https://schema.org/FreeReturn"
                  },
                  foundingDate: "2024-04-19T00:00:00",
                  taxID: "104457494300001"
               })}
            />
         </head>
         <body className={`text-base lg:text-lg ${globalFont.className}`}>
            {children}
         </body>
      </html>
   );
}
