import type { ReactNode } from "react";
import { ReactElement } from "react";

export type ProjectDetails = {
	key: string;
	name: string;
	logo?: string;
	cover?: string;
	description: string | ReactElement | ReactNode[];
	url?: string;
};

export type ProjectsDetails = {
	active: ProjectDetails[];
	upcoming?: ProjectDetails[];
};
