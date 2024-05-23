import type { ContactDetails } from "@/types/contact";
import {
	FaLinkedin,
	FaXTwitter,
	FaFacebook,
	FaInstagram,
	FaTelegram,
	FaWhatsapp
} from "react-icons/fa6";

export const contact: ContactDetails = {
	address: "Building A1, Dubai Digital Park, Dubai Silicon Oasis",
	emirate: "Dubai",
	country: "United Arab Emirates",
	socialMedia: [
		{
			icon: FaLinkedin,
			url: "https://www.linkedin.com/company/sdlplatforms"
		},
		{ icon: FaXTwitter, url: "https://www.x.com/sdlplatforms" },
		{ icon: FaFacebook, url: "https://www.facebook.com/sdlplatforms" },
		{ icon: FaInstagram, url: "https://www.instagram.com/sdlplatforms" },
		{ icon: FaTelegram, url: "https://t.me/sdlplatforms" },
		{
			icon: FaWhatsapp,
			url: "https://chat.whatsapp.com/DGWzyx97KwaC4x6rRvQ59W"
		}
	]
};
