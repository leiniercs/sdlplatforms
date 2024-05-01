import type { Metadata } from "next";
import { ReactNode } from "react";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Inter } from "next/font/google";
import Providers from "@/components/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
	unstable_setRequestLocale(locale);

	const t = useTranslations("app");

	return (
		<html lang={locale} className="dark">
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
