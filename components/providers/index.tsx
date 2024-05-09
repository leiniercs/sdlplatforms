"use client";
import type { AbstractIntlMessages } from "next-intl";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { NextUIProvider } from "@nextui-org/react";

type CustomComponentProps = {
	locale: string;
	messages: AbstractIntlMessages;
	children: ReactNode;
};

export default function Providers({
	locale,
	messages,
	children
}: Readonly<CustomComponentProps>) {
	return (
		<NextIntlClientProvider
			locale={locale}
			messages={messages}
			timeZone="UTC"
		>
			<NextUIProvider>{children}</NextUIProvider>
		</NextIntlClientProvider>
	);
}
