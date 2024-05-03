import { ReactNode } from "react";
import Header from "@/components/header";

type CustomPageProps = {
	children: ReactNode;
	params: { locale: string };
};

export default function LocalePage({
	children,
	params: { locale }
}: Readonly<CustomPageProps>) {
	return (
		<>
			<header>
				<Header />
			</header>
			<main></main>
			<footer></footer>
		</>
	);
}
