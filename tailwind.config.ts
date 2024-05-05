import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
	content: [
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: {
				hero: "linear-gradient(to bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);"
			}
		}
	},
	plugins: [nextui()]
};

export default config;
