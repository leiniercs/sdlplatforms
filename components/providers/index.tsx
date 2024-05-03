"use client";
import type { AbstractIntlMessages } from "next-intl";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { NextUIProvider } from "@nextui-org/react";

type CustomProps = {
	children: ReactNode;
	locale: string;
	messages: AbstractIntlMessages;
};

export default function Providers({
	children,
	locale,
	messages
}: Readonly<CustomProps>) {
	const router = useRouter();

	return (
		<NextUIProvider navigate={router.push}>
			<NextIntlClientProvider
				locale={locale}
				messages={messages}
				timeZone="UTC"
			>
				{children}
			</NextIntlClientProvider>
		</NextUIProvider>
	);
}
