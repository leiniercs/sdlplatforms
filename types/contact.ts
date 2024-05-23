import type { IconType } from "react-icons/lib";
export type SocialMediaDetails = {
	icon: IconType;
	url: string;
};

export type ContactDetails = {
	address: string;
	emirate: string;
	country: string;
	socialMedia: SocialMediaDetails[];
};
