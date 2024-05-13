"use client";
import type { ProjectDetails } from "@/types/projects";
import { useTranslations } from "next-intl";
import { Image, Link } from "@nextui-org/react";
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
			y: "25%",
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.2, staggerChildren: 0.3 }
		}
	};
	const motionFadeFromRight = {
		initial: {
			x: "25%",
			opacity: 0
		},
		animate: {
			x: 0,
			opacity: 1
		}
	};
	const motionFadeFromLeft = {
		initial: {
			x: "-25%",
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
				<div className="flex flex-nowrap gap-6 items-center">
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
				</div>
				{project.cover && (
					<motion.div className="relative" variants={motionFadeFromBellow}>
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
				<motion.div
					className="text-base lg:text-xl"
					variants={motionFadeFromBellow}
				>
					{project.description}
				</motion.div>
				{project.url && (
					<motion.div variants={motionFadeFromLeft}>
						<Link
							className="px-4 py-2"
							isExternal
							isBlock
							showAnchorIcon
							color="primary"
							size="lg"
							anchorIcon={
								<ArrowTopRightOnSquareIcon className="ml-2 w-5 h-5" />
							}
							href={project.url}
						>
							{tProjects("gotoproject")}
						</Link>
					</motion.div>
				)}
			</div>
		</div>
	);
}
