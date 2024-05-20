import type { ReactNode } from "react";
import { ReactElement } from "react";

export type FeatureDetails = {
	title: string;
	description: string;
};

export type ProjectDetails = {
	key: string;
	name: string;
	logo?: string;
	cover?: string;
	description: string | ReactElement | ReactNode[];
	features: FeatureDetails[];
	url?: string;
};

export type ProjectsDetails = {
	active: ProjectDetails[];
	upcoming?: ProjectDetails[];
};
