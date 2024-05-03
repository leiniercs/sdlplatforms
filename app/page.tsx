"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootPage() {
	const [componentMounted, setComponentMounted] = useState<boolean>(false);
	const [languageCode, setLanguageCode] = useState<string>("en");

	useEffect(() => {
		let language = window.navigator.language;

		if (language.length > 2) {
			language = language.substring(0, 2);
		}

		setLanguageCode(language);
		setComponentMounted(true);
	}, []);

	if (!componentMounted) {
		return null;
	}

	return redirect(`/${languageCode}`);
}
