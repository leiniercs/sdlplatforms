import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Poppins } from "next/font/google";

type CustomPageProps = {
	params: { locale: string };
};

const titleFont = Poppins({ subsets: ["latin"], weight: "700" });

export default async function Privacy({ params: { locale } }: CustomPageProps) {
	unstable_setRequestLocale(locale);
	const tPrivacy = await getTranslations("privacy");
	const privacy: { [key: string]: JSX.Element } = {
		en: <></>,
		es: <></>
	};

	return (
		<main>
			<section
				id="terms"
				className="relative flex flex-col items-center py-20 px-10"
			>
				<div className="flex flex-col gap-3 w-full max-w-screen-lg">
					<h1
						className={`text-2xl lg:text-4xl uppercase ${titleFont.className}`}
					>
						{tPrivacy("title")}
					</h1>
					{privacy[locale]}
				</div>
			</section>
		</main>
	);
}
