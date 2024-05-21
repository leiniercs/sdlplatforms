"use client";
import type { NavMenuItem } from "@/types/menu";
import { Link as UILink } from "@nextui-org/react";
import { Link } from "@/components/common/navigation";

type CustomProps = {
	item: NavMenuItem;
	isActive: boolean;
	setIsMenuOpen: (isOpen: boolean) => void;
	collapsedMenu: boolean;
};

export default function NavItem({
	item,
	isActive,
	setIsMenuOpen,
	collapsedMenu
}: CustomProps) {
	return (
		<UILink
			as={Link}
			href={item.href.at(0) === "#" ? "#" : item.href}
			className={collapsedMenu ? "w-full" : undefined}
			size={collapsedMenu ? "lg" : undefined}
			color={isActive ? "primary" : "foreground"}
			aria-current={isActive ? "page" : undefined}
			onPress={(e) => {
				setIsMenuOpen(false);

				if (item.href.at(0) === "#") {
					window.scrollTo({
						top: document.getElementById(item.href.substring(1))
							?.offsetTop,
						behavior: "smooth"
					});
				}
			}}
		>
			{item.name}
		</UILink>
	);
}
