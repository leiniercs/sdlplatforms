import type { Metadata } from "next";
import { ReactNode } from "react";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useMessages } from "next-intl";
import { Noto_Sans } from "next/font/google";
import Providers from "@/components/providers";
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

export async function generateMetadata({
	params: { locale }
}: Readonly<CustomMetadataProps>): Promise<Metadata> {
	const t = await getTranslations({ locale, namespace: "metadata" });

	return {
		description: t("description"),
		keywords: t("keywords"),
		openGraph: {
			description: t("description"),
			locale: locale
		},
		twitter: {
			description: t("description")
		}
	};
}

export default function LocaleLayout({
	children,
	params: { locale }
}: Readonly<CustomLayoutProps>) {
	unstable_setRequestLocale(locale);
	const messages = useMessages();

	return (
		<html lang={locale} className={`dark ${globalFont.className}`}>
			<body>
				<Providers locale={locale} messages={messages}>
					{children}
				</Providers>
			</body>
		</html>
	);
}
