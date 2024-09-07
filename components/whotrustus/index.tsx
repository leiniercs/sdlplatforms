"use client";
import type { Company } from "@/types/whotrustus";
import { useTranslations } from "next-intl";
import { Card, CardBody, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const titleFont = Poppins({ subsets: ["latin"], weight: "700" });

export default function WhoTrustUs() {
   const companies: Company[] = [
      { name: "IFZA", logo: "/images/logo/ifza.png" },
      { name: "EmiratesNBD", logo: "/images/logo/emiratesnbd.webp" },
      { name: "RAKBank", logo: "/images/logo/rakbank.png" },
      {
         name: "Network International",
         logo: "/images/logo/networkinternational.svg"
      },
      { name: "Hetzner", logo: "/images/logo/hetzner.svg" },
      { name: "Namecheap", logo: "/images/logo/namecheap.svg" }
   ];
   const motionAnimations = {
      initial: {
         y: "50%",
         opacity: 0
      },
      animate: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.2,
            staggerChildren: 0.3
         }
      }
   };
   const tWhoTrustUs = useTranslations("whotrustus");

   return (
      <section className="relative flex justify-center py-28 px-10 bg-slate-800">
         <motion.div
            className="flex flex-col gap-10 items-center max-w-screen-lg"
            variants={motionAnimations}
            initial="initial"
            whileInView="animate"
         >
            <motion.h1
               className={`text-xl lg:text-3xl uppercase ${titleFont.className}`}
               variants={motionAnimations}
            >
               {tWhoTrustUs("title")}
            </motion.h1>
            <motion.div variants={motionAnimations}>
               <Card className="bg-slate-900">
                  <CardBody>
                     <div className="flex flex-wrap justify-center py-8 px-14 gap-10">
                        {companies.map((company: Company, index: number) => (
                           <motion.div key={index} variants={motionAnimations}>
                              <Image
                                 classNames={{
                                    img: "w-28 h-10"
                                 }}
                                 radius="none"
                                 src={company.logo}
                                 alt={company.name}
                              />
                           </motion.div>
                        ))}
                     </div>
                  </CardBody>
               </Card>
            </motion.div>
         </motion.div>
      </section>
   );
}
