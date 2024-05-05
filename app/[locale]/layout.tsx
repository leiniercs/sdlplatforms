import type { Metadata } from "next";
import { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
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
	return (
		<html lang={locale} className={`dark ${globalFont.className}`}>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
