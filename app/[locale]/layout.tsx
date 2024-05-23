import type { ResolvingMetadata } from "next";
import { ReactNode } from "react";
import { Metadata } from "next";
import {
	getMessages,
	getTranslations,
	unstable_setRequestLocale
} from "next-intl/server";
import { Noto_Sans } from "next/font/google";
import Providers from "@/components/providers";
import Header from "@/components/header";
import "./globals.css";

const globalFont = Noto_Sans({
	subsets: ["latin"],
	preload: true
});

type CustomMetadataProps = {
	params: { locale: string };
};

type CustomLayoutProps = {
	children: ReactNode;
	params: { locale: string };
};

export async function generateMetadata(
	{ params: { locale } }: Readonly<CustomMetadataProps>,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const t = await getTranslations({ locale, namespace: "metadata" });
	const previousOpenGraph = (await parent).openGraph || {};
	const previousTwitter = (await parent).twitter || {};

	return {
		description: t("description"),
		keywords: t("keywords"),
		openGraph: {
			description: t("description"),
			locale: locale,
			...previousOpenGraph
		},
		twitter: {
			description: t("description"),
			...previousTwitter
		}
	};
}

export default async function LocaleLayout({
	children,
	params: { locale }
}: Readonly<CustomLayoutProps>) {
	unstable_setRequestLocale(locale);
	const messages = await getMessages({ locale });

	return (
		<html lang={locale} className={`dark ${globalFont.className}`}>
			<body className="text-base lg:text-lg">
				<Providers locale={locale} messages={messages}>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
