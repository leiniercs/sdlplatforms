"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootPage() {
	const [componentMounted, setComponentMounted] = useState<boolean>(false);
	const [languageCode, setLanguageCode] = useState<string>("en");

	useEffect(() => {
		setLanguageCode(window.navigator.language);
		setComponentMounted(true);
	}, []);

	if (!componentMounted) {
		return null;
	}

	return redirect(`/${languageCode}`);
}
