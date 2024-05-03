"use client";
import type { NavMenuItem } from "@/types/menu";
import { useState } from "react";
import { useTranslations } from "next-intl";
import {
	Button,
	Image,
	Link as UILink,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem
} from "@nextui-org/react";
import { Link, usePathname } from "@/components/navigation";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const t = useTranslations("header");
	const currentPathname = usePathname();
	const menuItems: NavMenuItem[] = [
		{ name: t("menuitems.home"), href: "/" },
		{ name: t("menuitems.projects"), href: "/projects" }
	];

	return (
		<Navbar isBlurred isBordered onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent justify="start">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
					className="sm:hidden"
				/>
				<NavbarBrand className="hidden md:inline-block">
					<Link href="/">
						<Image
							classNames={{ img: "!max-h-[50px] !rounded-none" }}
							src="/images/logo/logo-nobackground.svg"
							alt={t("logo")}
						/>
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="flex sm:hidden" justify="center">
				<NavbarBrand>
					<Link href="/">
						<Image
							classNames={{ img: "!max-h-[50px] !rounded-none" }}
							src="/images/logo/logo-nobackground.svg"
							alt={t("logo")}
						/>
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="end">
				{menuItems.map((item: NavMenuItem, index: number) => {
					const isActive: boolean = currentPathname === item.href;

					return (
						<NavbarItem key={index} isActive={isActive}>
							<UILink
								as={Link}
								href={item.href}
								color={isActive ? "primary" : "foreground"}
								aria-current={isActive ? "page" : undefined}
							>
								{item.name}
							</UILink>
						</NavbarItem>
					);
				})}
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item: NavMenuItem, index) => {
					const isActive: boolean = currentPathname === item.href;

					return (
						<NavbarMenuItem key={index}>
							<UILink
								className="w-full"
								href={item.href}
								color={isActive ? "primary" : "foreground"}
								size="lg"
								aria-current={isActive ? "page" : undefined}
							>
								{item.name}
							</UILink>
						</NavbarMenuItem>
					);
				})}
			</NavbarMenu>
		</Navbar>
	);
}
