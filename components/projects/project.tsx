"use client";
import type { FeatureDetails, ProjectDetails } from "@/types/projects";
import { useTranslations } from "next-intl";
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Image,
	Link
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { FaExternalLinkAlt } from "react-icons/fa";

type CustomComponentProps = {
	project: ProjectDetails;
	cardBackgroundColor: string;
};

const titleFont = Poppins({ subsets: ["latin"], weight: "700" });

export default function Project({
	project,
	cardBackgroundColor
}: CustomComponentProps) {
	const tProjects = useTranslations("projects");
	const motionFadeFromBellow = {
		initial: {
			y: "10%",
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.3, staggerChildren: 0.3 }
		}
	};
	const motionFadeFromRight = {
		initial: {
			x: "10%",
			opacity: 0
		},
		animate: {
			x: 0,
			opacity: 1
		}
	};
	const motionFadeFromLeft = {
		initial: {
			x: "-10%",
			opacity: 0
		},
		animate: {
			x: 0,
			opacity: 1
		}
	};

	return (
		<div className="mt-16 w-full flex flex-wrap gap-8 md:flex-nowrap">
			<div className="flex flex-col gap-8">
				<motion.a
					className="flex flex-nowrap gap-6 items-center"
					variants={motionFadeFromBellow}
					initial="initial"
					whileInView="animate"
					href={project.url}
					target="_blank"
				>
					{project.logo && (
						<motion.div variants={motionFadeFromLeft}>
							<Image
								classNames={{
									img: "max-w-[64px] max-h-[64px]"
								}}
								radius="none"
								src={`/images/logo/${project.logo}`}
								alt={project.name}
							/>
						</motion.div>
					)}
					<motion.h3
						className={`text-lg lg:text-2xl uppercase ${titleFont.className}`}
						variants={motionFadeFromRight}
					>
						{project.name}
					</motion.h3>
				</motion.a>
				{project.cover && (
					<motion.div
						className="relative"
						variants={motionFadeFromBellow}
						initial="initial"
						whileInView="animate"
					>
						<Image
							classNames={{
								wrapper: "!max-w-none",
								img: "w-full max-h-[350px] object-cover bg-no-repeat object-top"
							}}
							isZoomed
							radius="lg"
							src={`/images/projects/${project.cover}`}
							alt={project.name}
						/>
					</motion.div>
				)}
				<motion.p
					variants={motionFadeFromBellow}
					initial="initial"
					whileInView="animate"
				>
					{project.description}
				</motion.p>
				<motion.h2
					variants={motionFadeFromBellow}
					initial="initial"
					whileInView="animate"
				>
					{tProjects("keyfeatures")}:
				</motion.h2>
				<motion.div
					className="grid grid-cols-1 gap-6 lg:grid-cols-3"
					variants={motionFadeFromBellow}
					initial="initial"
					whileInView="animate"
				>
					{project.features.map(
						(feature: FeatureDetails, index: number) => (
							<motion.div key={index} variants={motionFadeFromBellow}>
								<Card
									classNames={{
										base: `h-full p-2 ${cardBackgroundColor}`,
										header: "text-lg lg:text-xl font-semibold"
									}}
								>
									<CardHeader>{feature.title}</CardHeader>
									<CardBody>{feature.description}</CardBody>
								</Card>
							</motion.div>
						)
					)}
				</motion.div>
				{project.url && (
					<motion.div
						variants={motionFadeFromLeft}
						initial="initial"
						whileInView="animate"
					>
						<Button
							as={Link}
							className="px-4 py-2 font-semibold"
							isExternal
							showAnchorIcon
							variant="ghost"
							color="primary"
							size="lg"
							radius="sm"
							anchorIcon={<FaExternalLinkAlt className="ml-2 w-4 h-4" />}
							href={project.url}
						>
							{tProjects("gotoproject")}
						</Button>
					</motion.div>
				)}
			</div>
		</div>
	);
}
