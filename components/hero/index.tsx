"use client";
import type { Feature } from "@/types/feature";
import { useEffect, useMemo, useState } from "react";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { features } from "@/components/common/features";

import { useTranslations } from "next-intl";

const titleFont = Poppins({ subsets: ["latin"], weight: "700" });
const textFont = Poppins({ subsets: ["latin"], weight: "500" });

export default function Hero() {
	const [activeTab, setActiveTab] = useState<number>(0);
	//const tHero = useTranslations("hero");
	const tFeatures = useTranslations("features");
	const tabs = useMemo(() => {
		const tabs: Feature[] = [];

		features.map((feature: string, index: number) => {
			tabs.push({
				key: index.toString(),
				title: tFeatures(`${feature}.title`),
				description: tFeatures(`${feature}.description`),
				cover: `/images/features/${feature}.jpg`
			});
		});

		return tabs;
	}, [tFeatures]);

	const motionHeroAnimations = {
		initial: {
			opacity: 0
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.2,
				staggerChildren: 0.4
			}
		}
	};
	const motionTextAnimations = {
		initial: {
			y: "50%",
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.4
			}
		}
	};

	useEffect(() => {
		let heroTimer = setInterval(() => {
			setActiveTab((prevState: number) =>
				prevState === tabs.length - 1 ? 0 : prevState + 1
			);
		}, 15000);

		return () => {
			clearInterval(heroTimer);
		};
	}, [tabs]);

	return (
		<section className="relative h-dvh overflow-hidden -mt-16">
			<div className="ml-6 mt-28 md:pl-14 md:w-2/3 lg:pl-36 lg:mt-48">
				{tabs.map((tab: Feature, index: number) => (
					<motion.div
						key={index}
						className={activeTab === index ? undefined : "hidden"}
						variants={motionHeroAnimations}
						initial="initial"
						animate={activeTab === index ? "animate" : undefined}
					>
						<div className="absolute top-0 left-0 right-0 bottom-0 -z-10 bg-hero" />
						<Image
							classNames={{
								img: "absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover max-w-[unset] -z-20"
							}}
							radius="none"
							removeWrapper
							src={tab.cover}
							alt={tab.title}
						/>
						<motion.h1
							className={`text-4xl capitalize mb-5 lg:text-7xl lg:mb-10 ${titleFont.className}`}
							variants={motionTextAnimations}
						>
							{tab.title}
						</motion.h1>
						<motion.p
							className={`text-xl leading-[2rem] lg:text-4xl lg:leading-[3rem] ${textFont.className}`}
							variants={motionTextAnimations}
						>
							{tab.description}
						</motion.p>
					</motion.div>
				))}
			</div>
		</section>
	);
}
