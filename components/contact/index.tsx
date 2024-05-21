"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { contact } from "@/components/common/contact";
import { Button, Input, Textarea } from "@nextui-org/react";

const titleFont = Poppins({ subsets: ["latin"], weight: "700" });

export default function Contact() {
	const motionFadeFromBellow = {
		initial: {
			y: "25%",
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.2, staggerChildren: 0.3 }
		}
	};
	const tHeader = useTranslations("header");
	const tContact = useTranslations("contact");

	return (
		<section
			id="contact"
			className="relative flex flex-col items-center py-28 px-10 bg-slate-800"
		>
			<div className="w-full flex flex-col gap-16 items-center max-w-screen-lg">
				<motion.h1
					className={`text-2xl lg:text-4xl uppercase ${titleFont.className}`}
					variants={motionFadeFromBellow}
					initial="initial"
					whileInView="animate"
				>
					{tHeader("menuitems.contact")}
				</motion.h1>

				<div className="w-full flex flex-row flex-wrap">
					<div className="flex flex-col gap-4 w-full lg:max-w-[50%]">
						<div className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap gap-1">
							<span className="font-semibold">
								{tContact("address")}:
							</span>
							<span>{contact.address}</span>
						</div>
						<div className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap gap-1">
							<span className="font-semibold">
								{tContact("emirate")}:
							</span>
							<span>{contact.emirate}</span>
						</div>
						<div className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap gap-1">
							<span className="font-semibold">
								{tContact("country")}:
							</span>
							<span>{contact.country}</span>
						</div>
						<iframe
							className="w-full min-h-80 mt-4"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.509718887014!2d55.374976276128315!3d25.118452634884243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f650004f24a1b%3A0xadcfb632edbf1318!2sSDL%20Platforms!5e0!3m2!1sen!2sae!4v1716308991586!5m2!1sen!2sae"
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
					<div className="flex flex-col flex-wrap gap-4 w-full pt-16 lg:max-w-[50%] lg:pt-0 lg:pl-10">
						<h1
							className={`mb-4 text-lg lg:text-2xl uppercase ${titleFont.className}`}
						>
							{tContact("sendusmessage")}
						</h1>
						<Input
							isRequired
							isClearable
							type="name"
							label={tContact("name.title")}
							placeholder={tContact("name.placeholder")}
							variant="faded"
						/>
						<Input
							isRequired
							isClearable
							type="email"
							label={tContact("email.title")}
							placeholder={tContact("email.placeholder")}
							variant="faded"
						/>
						<Textarea
							isRequired
							isMultiline
							minRows={8}
							maxRows={8}
							maxLength={4096}
							label={tContact("message.title")}
							placeholder={tContact("message.placeholder")}
							variant="faded"
						/>
						<div className="flex justify-end">
							<Button color="primary">{tContact("send")}</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
