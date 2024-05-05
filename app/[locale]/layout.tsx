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
}: Readonly<CustomMetadataProps>) {
	const t = await getTranslations({ locale, namespace: "metadata" });

	return {
		title: "SDL Platforms",
		description: t("description")
	};
}

export default function LocaleLayout({
	children,
	params: { locale }
}: Readonly<CustomLayoutProps>) {
	return (
		<html lang={locale} className={`dark ${globalFont.className}`}>
			<head>
				<link rel="icon" href="/images/logo/favicon.png" type="image/png" />
			</head>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
