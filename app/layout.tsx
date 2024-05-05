import type { Metadata } from "next";
import { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { image } from "@nextui-org/react";

type CustomLayoutProps = {
	children: ReactNode;
};

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations({ locale: "en", namespace: "metadata" });
	//const urlBase = "http://localhost:3000";
	const urlBase = "https://dev.sdlplatforms.com";

	return {
		title: "SDL Platforms",
		description: t("description"),
		keywords: t("keywords"),
		icons: {
			icon: "/images/logo/favicon.png",
			shortcut: "/images/logo/favicon.png",
			apple: "/images/logo/favicon.png"
		},
		openGraph: {
			title: "SDL Platforms",
			description: t("description"),
			images: [`${urlBase}/images/logo/logo-background.png`],
			locale: "en_US",
			type: "website"
		},
		twitter: {
			card: "summary_large_image",
			title: "SDL Platforms",
			description: t("description"),
			images: [`${urlBase}/images/logo/logo-background.png`]
		},
		alternates: {
			canonical: urlBase,
			languages: {
				en: `${urlBase}/en`,
				es: `${urlBase}/es`
			}
		},
		category: "technology",
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				noimageindex: true
			}
		}
	};
}

export default function RootLayout({ children }: Readonly<CustomLayoutProps>) {
	return children;
}
