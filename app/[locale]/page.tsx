import Header from "@/components/header";
import Hero from "@/components/hero";
import WhoTrustUs from "@/components/whotrustus";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

type CustomPageProps = {
	params: { locale: string };
};

export default function LocalePage({ params: { locale } }: CustomPageProps) {
	return (
		<>
			<header className="absolute top-0 left-0 right-0 z-50">
				<Header />
			</header>
			<main className="text-base lg:text-lg">
				<Hero />
				<WhoTrustUs />
				<Projects />
				<Contact />
			</main>
			<footer></footer>
		</>
	);
}
