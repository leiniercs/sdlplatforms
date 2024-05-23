import Hero from "@/components/hero";
import WhoTrustUs from "@/components/whotrustus";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

type CustomPageProps = {
	params: { locale: string };
};

export default function LocalePage({ params: { locale } }: CustomPageProps) {
	return (
		<main>
			<Hero />
			<WhoTrustUs />
			<Projects />
			<Contact />
		</main>
	);
}
