import type { Company } from "@/types/whotrustus";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Card, CardBody, Image } from "@nextui-org/react";
import { Poppins } from "next/font/google";

const titleFont = Poppins({ subsets: ["latin"], weight: "700" });

type CustomComponentProps = {
	locale: string;
};

export default function WhoTrustUs({ locale }: CustomComponentProps) {
	const companies: Company[] = [
		{ name: "IFZA", logo: "/images/logo/ifza.png" },
		{ name: "EmiratesNBD", logo: "/images/logo/emiratesnbd.webp" },
		{
			name: "Network International",
			logo: "/images/logo/networkinternational.svg"
		},
		{ name: "Namecheap", logo: "/images/logo/namecheap.svg" },
		{ name: "Hetzner", logo: "/images/logo/hetzner.svg" },
		{ name: "NextJS", logo: "/images/logo/nextjs.svg" }
	];

	unstable_setRequestLocale(locale);
	const tWhoTrustUs = useTranslations("whotrustus");

	return (
		<section className="relative flex flex-col gap-10 items-center py-28 px-10 bg-gray-700">
			<h1 className={`text-xl lg:text-3xl uppercase ${titleFont.className}`}>
				{tWhoTrustUs("title")}
			</h1>
			<Card className="bg-gray-800">
				<CardBody>
					<div className="flex flex-wrap justify-center py-8 px-14 gap-10">
						{companies.map((company: Company, index: number) => (
							<Image
								key={index}
								classNames={{
									img: "w-28 h-10"
								}}
								src={company.logo}
								alt={company.name}
							/>
						))}
					</div>
				</CardBody>
			</Card>
		</section>
	);
}
