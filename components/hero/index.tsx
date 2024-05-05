"use client";
import type { AbstractIntlMessages } from "next-intl";
import { useState } from "react";
import { Image, Link as UILink } from "@nextui-org/react";
import { Link } from "@/components/navigation";
import { projects } from "@/components/projects";

type CustomComponentsProps = {
	messages: string | AbstractIntlMessages;
};

export default function Hero({ messages }: Readonly<CustomComponentsProps>) {
	const [tab, setTab] = useState<number>(0);

	return <section className="h-dvh"></section>;
}
