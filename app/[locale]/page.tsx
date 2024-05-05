import type { AbstractIntlMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { useMessages } from "next-intl";
import Header from "@/components/header";
import Hero from "@/components/hero";

type CustomPageProps = {
	params: { locale: string };
};

export default function LocalePage({
	params: { locale }
}: Readonly<CustomPageProps>) {
	unstable_setRequestLocale(locale);
	const messages: AbstractIntlMessages = useMessages();

	return (
		<>
			<header className="absolute top-0 left-0 right-0 z-50">
				<Header messages={messages.header} />
			</header>
			<main>
				<Hero
					heroMessages={messages.hero}
					featuresMessages={messages.features}
				/>
			</main>
			<footer></footer>
		</>
	);
}
