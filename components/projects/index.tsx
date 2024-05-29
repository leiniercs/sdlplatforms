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
				description: tProjects("thimsmarket.description"),
				features: [
					{
						title: tProjects("thimsmarket.features.one.title"),
						description: tProjects("thimsmarket.features.one.description")
					},
					{
						title: tProjects("thimsmarket.features.two.title"),
						description: tProjects("thimsmarket.features.two.description")
					},
					{
						title: tProjects("thimsmarket.features.three.title"),
						description: tProjects(
							"thimsmarket.features.three.description"
						)
					}
				],
				url: "https://www.thims.market"
			}
		],
		upcoming: [
			{
				key: "sdlvpn",
				name: "SDL VPN",
				logo: "sdlvpn.svg",
				description: tProjects("sdlvpn.description"),
				features: [
					{
						title: tProjects("sdlvpn.features.one.title"),
						description: tProjects("sdlvpn.features.one.description")
					},
					{
						title: tProjects("sdlvpn.features.two.title"),
						description: tProjects("sdlvpn.features.two.description")
					},
					{
						title: tProjects("sdlvpn.features.three.title"),
						description: tProjects("sdlvpn.features.three.description")
					}
				],
				url: "https://www.sdlvpn.com"
			},
			{
				key: "cloudstorage",
				name: "Cloud Storage",
				description: tProjects("cloudstorage.description"),
				features: [
					{
						title: tProjects("cloudstorage.features.one.title"),
						description: tProjects(
							"cloudstorage.features.one.description"
						)
					},
					{
						title: tProjects("cloudstorage.features.two.title"),
						description: tProjects(
							"cloudstorage.features.two.description"
						)
					},
					{
						title: tProjects("cloudstorage.features.three.title"),
						description: tProjects(
							"cloudstorage.features.three.description"
						)
					}
				]
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
		<>
			<section
				id="projects"
				className="relative flex flex-col items-center py-28 px-10 bg-slate-900"
			>
				<div className="flex flex-col gap-16 items-center max-w-screen-lg">
					<motion.h1
						className={`text-2xl lg:text-4xl uppercase ${titleFont.className}`}
						variants={motionFadeFromBellow}
						initial="initial"
						whileInView="animate"
					>
						{tProjects("active")}
					</motion.h1>
					<div className="w-full">
						{projects.active.map(
							(project: ProjectDetails, index: number) => (
								<Project
									key={index}
									project={project}
									cardBackgroundColor="bg-slate-800"
								/>
							)
						)}
					</div>
				</div>
			</section>
			<section className="relative flex flex-col items-center py-28 px-10">
				<div className="flex flex-col gap-16 items-center max-w-screen-lg">
					<motion.h1
						className={`text-2xl lg:text-4xl uppercase ${titleFont.className}`}
						variants={motionFadeFromBellow}
						initial="initial"
						whileInView="animate"
					>
						{tProjects("upcoming")}
					</motion.h1>
					{projects.upcoming && (
						<div className="w-full">
							{projects.upcoming?.map(
								(project: ProjectDetails, index: number) => (
									<Project
										key={index}
										project={project}
										cardBackgroundColor=""
									/>
								)
							)}
						</div>
					)}
				</div>
			</section>
		</>
	);
}
