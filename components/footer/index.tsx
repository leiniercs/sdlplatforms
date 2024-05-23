import type { NavMenuItem } from "@/types/menu";
import type { SocialMediaDetails } from "@/types/contact";
import { contact } from "@/components/common/contact";
import { getTranslations } from "next-intl/server";
import { Divider, Image, Link as UILink } from "@nextui-org/react";
import Link from "@/components/footer/link";

export default async function Footer() {
	const tHeader = await getTranslations("header");
	const menuItems: NavMenuItem[] = [
		{ name: tHeader("menuitems.home"), href: "/" },
		{ name: tHeader("menuitems.projects"), href: "#projects" },
		{ name: tHeader("menuitems.contact"), href: "#contact" }
	];

	return (
		<footer className="relative flex flex-col items-center py-28 px-10 bg-slate-900">
			<div className="flex flex-row flex-wrap gap-16 w-full max-w-screen-lg">
				<div className="flex flex-col gap-1">
					<div className="flex flex-nowrap gap-4 items-center">
						<Image
							classNames={{ wrapper: "w-10 h-10" }}
							src="/images/logo/logo-onlyicon-nobackground.svg"
							alt="SDL Platforms"
						/>
						<span className="font-semibold">SDL Platforms</span>
					</div>
					<span className="mt-6">{contact.address}</span>
					<span>{contact.emirate}</span>
					<span>{contact.country}</span>
					<div className="flex flex-nowrap gap-4 mt-10">
						{contact.socialMedia.map(
							(socialMedia: SocialMediaDetails, index: number) => (
								<UILink
									key={index}
									href={socialMedia.url}
									color="foreground"
								>
									<socialMedia.icon className="w-8 h-8" />
								</UILink>
							)
						)}
					</div>
				</div>
				<Divider className="hidden lg:inline" orientation="vertical" />
				<Divider className="inline lg:hidden" orientation="horizontal" />
				<div className="flex flex-col gap-3">
					{menuItems.map((item: NavMenuItem, index: number) => (
						<Link key={index} item={item} />
					))}
				</div>
			</div>
		</footer>
	);
}
