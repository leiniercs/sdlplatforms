import Header from "@/components/header";
import Hero from "@/components/hero";

export default function LocalePage() {
	return (
		<>
			<header className="absolute top-0 left-0 right-0 z-50">
				<Header />
			</header>
			<main>
				<Hero />
			</main>
			<footer></footer>
		</>
	);
}
