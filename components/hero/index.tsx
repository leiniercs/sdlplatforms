"use client";
import type { AbstractIntlMessages } from "next-intl";
import type { Key } from "@react-types/shared";
import { useEffect, useMemo, useState } from "react";
import { Image, Tabs, Tab } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { features } from "@/components/features";
import { Feature } from "@/types/feature";

type CustomComponentsProps = {
	heroMessages: string | AbstractIntlMessages;
	featuresMessages: string | AbstractIntlMessages;
};

const titleFont = Poppins({ subsets: ["latin"], weight: "700" });
const textFont = Poppins({ subsets: ["latin"], weight: "500" });

export default function Hero({
	heroMessages,
	featuresMessages
}: Readonly<CustomComponentsProps>) {
	const [selectedTab, setSelectedTab] = useState<Key>("0");
	const tabs = useMemo(() => {
		const tabs: Feature[] = [];

		features.map((feature: string, index: number) => {
			tabs.push({
				key: index.toString(),
				// @ts-ignore
				title: featuresMessages[feature].title,
				// @ts-ignore
				description: featuresMessages[feature].description,
				cover: `/images/features/${feature}.jpg`
			});
		});

		return tabs;
	}, [featuresMessages]);

	const textVariants = {
		hidden: { y: "50%", opacity: 0 },
		show: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5
			}
		}
	};

	useEffect(() => {
		let heroTimer = setInterval(() => {
			setSelectedTab((prevState: Key) =>
				Number(prevState) > tabs.length
					? "0"
					: String(Number(prevState) + 1)
			);
		}, 15000);

		return () => {
			clearInterval(heroTimer);
		};
	}, [tabs]);

	return (
		<section className="relative h-dvh flex align-middle justify-center items-center overflow-hidden">
			<Tabs
				classNames={{
					wrapper:
						"w-full h-full pt-24 px-10 pb-6 md:pt-28 md:px-28 lg:pt-36 lg:px-40",
					base: "justify-end opacity-40",
					panel: "w-full h-full sm:w-[80%] md:w-[70%] lg:w-[60%]"
				}}
				placement="bottom"
				variant="underlined"
				items={tabs}
				selectedKey={selectedTab}
				onSelectionChange={setSelectedTab}
			>
				{(tab: Feature) => (
					<Tab
						key={tab.key}
						title={<div className="rounded-full bg-white w-3 h-3" />}
					>
						<Image
							classNames={{
								wrapper: "absolute top-0 left-0 right-0 bottom-0 -z-20",
								img: "w-full h-full sm:w-auto sm:h-auto object-cover"
							}}
							radius="none"
							src={tab.cover}
							alt={tab.title}
						/>
						<div className="absolute top-0 left-0 right-0 bottom-0 -z-10 bg-hero" />
						<motion.h1
							className={`text-4xl capitalize mb-5 lg:text-7xl lg:mb-10 ${titleFont.className}`}
							variants={textVariants}
							initial="hidden"
							animate="show"
						>
							{tab.title}
						</motion.h1>
						<motion.p
							className={`text-xl leading-[2rem] lg:text-4xl lg:leading-[3rem] ${textFont.className}`}
							variants={textVariants}
							initial="hidden"
							animate="show"
						>
							{tab.description}
						</motion.p>
					</Tab>
				)}
			</Tabs>
		</section>
	);
}
