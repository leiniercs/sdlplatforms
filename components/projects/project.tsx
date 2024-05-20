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
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
//import { Link } from "@/components/common/navigation";

type CustomComponentProps = {
	project: ProjectDetails;
};

const titleFont = Poppins({ subsets: ["latin"], weight: "700" });

export default function Project({ project }: CustomComponentProps) {
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
				<motion.div
					className="flex flex-nowrap gap-6 items-center"
					variants={motionFadeFromBellow}
					initial="initial"
					whileInView="animate"
				>
					{project.logo && (
						<motion.div variants={motionFadeFromLeft}>
							<Image
								classNames={{
									img: "h-[64px]"
								}}
								radius="lg"
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
				</motion.div>
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
								img: "w-full max-h-[300px] object-cover bg-no-repeat object-top"
							}}
							isZoomed
							radius="lg"
							src={`/images/projects/${project.cover}`}
							alt={project.name}
						/>
					</motion.div>
				)}
				<motion.p
					className="text-base lg:text-xl"
					variants={motionFadeFromBellow}
					initial="initial"
					whileInView="animate"
				>
					{project.description}
				</motion.p>
				<motion.h2
					className="text-base lg:text-xl"
					variants={motionFadeFromBellow}
					initial="initial"
					whileInView="animate"
				>
					{tProjects("keyfeatures")}:
				</motion.h2>
				<motion.div
					className="grid grid-flow-col grid-cols-1 gap-6 lg:grid-flow-row lg:grid-cols-3"
					variants={motionFadeFromBellow}
					initial="initial"
					whileInView="animate"
				>
					{project.features.map(
						(feature: FeatureDetails, index: number) => (
							<motion.div key={index} variants={motionFadeFromBellow}>
								<Card
									classNames={{
										base: "bg-slate-800 h-full",
										header: "text-lg lg:text-xl font-semibold",
										body: "text-base lg:text-lg"
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
							anchorIcon={
								<ArrowTopRightOnSquareIcon className="ml-2 w-5 h-5" />
							}
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
