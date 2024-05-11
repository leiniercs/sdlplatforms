"use client";
import type { Project, Projects } from "@/types/projects";
import { useTranslations } from "next-intl";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const titleFont = Poppins({ subsets: ["latin"], weight: "700" });

export default function Projects() {
	const tProjects = useTranslations("projects");
	const projects: Projects = {
		active: [
			{
				key: "thimsmarket",
				name: "Thims Market",
				description: tProjects.rich("thimsmarket.description", {
					p: (chunk) => <p className="leading-normal mb-3">{chunk}</p>,
					strong: (chunk) => (
						<span className="font-semibold">{chunk}</span>
					),
					ul: (chunk) => <ul className="pl-4">{chunk}</ul>,
					li: (chunk) => <li className="leading-normal mb-2">{chunk}</li>
				}),
				url: "https://www.thims.market"
			}
		],
		upcoming: [
			{
				key: "cloutstorage",
				name: "Cloud Storage",
				description: tProjects("cloudstorage.description")
			},
			{
				key: "globalvpn",
				name: "Global VPN",
				description: tProjects("globalvpn.description")
			}
		]
	};
	const motionAnimations = {
		initial: {
			y: "50%",
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.2, staggerChildren: 0.3 }
		}
	};
	const motionProjectAnimations = {
		initial: {
			x: "25%",
			opacity: 0
		},
		animate: {
			x: 0,
			opacity: 1
		}
	};
	return (
		<section className="relative flex flex-col items-center py-28 px-10 bg-slate-900">
			<motion.div
				className="flex flex-col gap-16 items-center max-w-screen-lg"
				variants={motionAnimations}
				initial="initial"
				whileInView="animate"
			>
				<motion.h1
					className={`text-2xl lg:text-4xl uppercase ${titleFont.className}`}
					variants={motionAnimations}
				>
					{tProjects("title")}
				</motion.h1>
				<motion.div variants={motionAnimations}>
					<motion.h2
						className={`text-xl lg:text-3xl uppercase ${titleFont.className}`}
						variants={motionAnimations}
					>
						{tProjects("active")}
					</motion.h2>
					{projects.active.map((project: Project, index: number) => (
						<motion.div
							key={index}
							className="mt-16 w-full flex flex-wrap gap-8 md:flex-nowrap"
							variants={motionProjectAnimations}
						>
							<div className="flex flex-col gap-8 md:w-1/2">
								<div className="flex flex-nowrap gap-6 items-center">
									<Image
										classNames={{
											img: "h-[64px]"
										}}
										radius="lg"
										src={`/images/logo/${project.key}.svg`}
										alt={project.name}
									/>
									<h3
										className={`text-lg lg:text-2xl uppercase ${titleFont.className}`}
									>
										{project.name}
									</h3>
								</div>
								<div className="text-base lg:text-xl">
									{project.description}
								</div>
							</div>
							<div className="md:w-1/2">
								<Image
									classNames={{
										img: "w-full object-cover bg-no-repeat object-top"
									}}
									radius="lg"
									src={`/images/projects/${project.key}.png`}
									alt={project.name}
								/>
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
}
