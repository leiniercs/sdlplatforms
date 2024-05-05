"use client";
import type { NavMenuItem } from "@/types/menu";
import type { AbstractIntlMessages } from "next-intl";
import { useState } from "react";
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
import { Link, usePathname } from "@/components/navigation";

type CustomComponentsProps = {
	messages: string | AbstractIntlMessages;
};

const itemFont = Rubik({ subsets: ["latin"], weight: "500" });

export default function Header({ messages }: Readonly<CustomComponentsProps>) {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const currentPathname = usePathname();

	const menuItems: NavMenuItem[] = [
		// @ts-expect-error
		{ name: messages.menuitems.home, href: "/" },
		// @ts-expect-error
		{ name: messages.menuitems.projects, href: "/projects" }
	];

	return (
		<Navbar
			classNames={{ item: itemFont.className }}
			isBlurred
			isBordered
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarContent justify="start">
				<NavbarMenuToggle
					// @ts-expect-error
					aria-label={isMenuOpen ? messages.closeMenu : messages.openMenu}
					className="sm:hidden"
				/>
				<NavbarBrand className="hidden md:inline-block">
					<Link href="/">
						<Image
							classNames={{ img: "!max-h-[50px] !rounded-none" }}
							src="/images/logo/logo-nobackground.svg"
							// @ts-expect-error
							alt={messages.logo}
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
							// @ts-expect-error
							alt={messages.logo}
						/>
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent justify="end">
				<div className="hidden sm:flex gap-4">
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
				</div>
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
