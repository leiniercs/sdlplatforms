import Header from "@/components/header";
import Hero from "@/components/hero";
import WhoTrustUs from "@/components/whotrustus";
import Projects from "@/components/projects";

type CustomPageProps = {
	params: { locale: string };
};

export default function LocalePage({ params: { locale } }: CustomPageProps) {
	return (
		<>
			<header className="absolute top-0 left-0 right-0 z-50">
				<Header />
			</header>
			<main>
				<Hero />
				<WhoTrustUs />
				<Projects />
			</main>
			<footer></footer>
		</>
	);
}
