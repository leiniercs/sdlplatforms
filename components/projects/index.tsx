"use client";
import type { ProjectsDetails, ProjectDetails } from "@/types/projects";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import Project from "@/components/projects/project";

const titleFont = Poppins({ subsets: ["latin"], weight: "700" });

export default function Projects() {
	const tProjects = useTranslations("projects");
	const projects: ProjectsDetails = {
		active: [
			{
				key: "thimsmarket",
				name: "Thims Market",
				logo: "thimsmarket.svg",
				cover: "thimsmarket.png",
				// @ts-ignore
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
				key: "cloudstorage",
				name: "Cloud Storage",
				// @ts-ignore
				description: tProjects.rich("cloudstorage.description", {
					p: (chunk) => <p className="leading-normal mb-3">{chunk}</p>,
					strong: (chunk) => (
						<span className="font-semibold">{chunk}</span>
					),
					ul: (chunk) => <ul className="pl-4">{chunk}</ul>,
					li: (chunk) => <li className="leading-normal mb-2">{chunk}</li>
				})
			},
			{
				key: "globalvpn",
				name: "Global VPN",
				// @ts-ignore
				description: tProjects.rich("globalvpn.description", {
					p: (chunk) => <p className="leading-normal mb-3">{chunk}</p>,
					strong: (chunk) => (
						<span className="font-semibold">{chunk}</span>
					),
					ul: (chunk) => <ul className="pl-4">{chunk}</ul>,
					li: (chunk) => <li className="leading-normal mb-2">{chunk}</li>
				})
			}
		]
	};
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

	return (
		<section className="relative flex flex-col items-center py-28 px-10 bg-slate-900">
			<motion.div
				className="flex flex-col gap-16 items-center max-w-screen-lg"
				variants={motionFadeFromBellow}
				initial="initial"
				whileInView="animate"
			>
				<motion.h1
					className={`text-2xl lg:text-4xl uppercase ${titleFont.className}`}
					variants={motionFadeFromBellow}
				>
					{tProjects("title")}
				</motion.h1>
				<motion.div className="w-full" variants={motionFadeFromBellow}>
					<motion.h2
						className={`text-xl lg:text-3xl uppercase ${titleFont.className}`}
						variants={motionFadeFromBellow}
					>
						{tProjects("active")}
					</motion.h2>
					{projects.active.map(
						(project: ProjectDetails, index: number) => (
							<Project key={index} project={project} />
						)
					)}
				</motion.div>
				{projects.upcoming && (
					<motion.div className="w-full" variants={motionFadeFromBellow}>
						<motion.h2
							className={`text-xl lg:text-3xl uppercase ${titleFont.className}`}
							variants={motionFadeFromBellow}
						>
							{tProjects("upcoming")}
						</motion.h2>
						{projects.upcoming?.map(
							(project: ProjectDetails, index: number) => (
								<Project key={index} project={project} />
							)
						)}
					</motion.div>
				)}
			</motion.div>
		</section>
	);
}
