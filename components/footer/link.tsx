"use client";
import type { NavMenuItem } from "@/types/menu";
import { Link as UILink } from "@nextui-org/react";
import { Link as NavLink } from "@/components/common/navigation";

type CustomProps = { item: NavMenuItem };

export default function Link({ item }: Readonly<CustomProps>) {
	return (
		<UILink
			as={NavLink}
			href={item.href.at(0) === "#" ? "#" : item.href}
			size="lg"
			color="foreground"
			onPress={(e) => {
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
