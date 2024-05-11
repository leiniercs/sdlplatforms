import type { ReactNode, ReactNodeArray } from "react";
import { ReactElement } from "react";

export type Project = {
	key: string;
	name: string;
	description: string | ReactElement | ReactNodeArray;
	url?: string;
};

export type Projects = {
	active: Project[];
	upcoming?: Project[];
};
