"use client";
import type { NavMenuItem } from "@/types/menu";
import { useState } from "react";
import { useTranslations } from "next-intl";
import {
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
import { Rubik } from "next/font/google";
import { Link, usePathname } from "@/components/common/navigation";
import NavItem from "@/components/header/navitem";

const itemFont = Rubik({ subsets: ["latin"], weight: "500", preload: true });

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const currentPathname = usePathname();
	const tHeader = useTranslations("header");

	const menuItems: NavMenuItem[] = [
		{ name: tHeader("menuitems.home"), href: "/" },
		{ name: tHeader("menuitems.projects"), href: "#projects" },
		{ name: tHeader("menuitems.contact"), href: "#contact" }
	];

	return (
		<Navbar
			classNames={{ item: itemFont.className }}
			isBlurred
			isBordered
			shouldHideOnScroll
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarContent justify="start">
				<NavbarMenuToggle
					// @ts-ignore
					aria-label={
						isMenuOpen ? tHeader("closeMenu") : tHeader("openMenu")
					}
					className="sm:hidden"
				/>
				<NavbarBrand className="hidden sm:inline">
					<Link href="/">
						<Image
							classNames={{ img: "!max-h-[50px] !rounded-none" }}
							src="/images/logo/logo-nobackground.svg"
							// @ts-ignore
							alt={tHeader("logo")}
						/>
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent justify="center">
				<NavbarBrand className="flex sm:hidden">
					<Link href="/">
						<Image
							classNames={{ img: "!max-h-[50px] !rounded-none" }}
							src="/images/logo/logo-nobackground.svg"
							// @ts-ignore
							alt={tHeader("logo")}
						/>
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent justify="end">
				{menuItems.map((item: NavMenuItem, index: number) => {
					const isActive: boolean = currentPathname === item.href;

					return (
						<NavbarItem key={index} isActive={isActive}>
							<NavItem
								item={item}
								isActive={isActive}
								setIsMenuOpen={setIsMenuOpen}
								collapsedMenu={false}
							/>
						</NavbarItem>
					);
				})}
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item: NavMenuItem, index) => {
					const isActive: boolean = currentPathname === item.href;

					return (
						<NavbarMenuItem key={index}>
							<NavItem
								item={item}
								isActive={isActive}
								setIsMenuOpen={setIsMenuOpen}
								collapsedMenu={true}
							/>
						</NavbarMenuItem>
					);
				})}
			</NavbarMenu>
		</Navbar>
	);
}
