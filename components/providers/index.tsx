"use client";
import { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

type CustomComponentProps = {
	children: ReactNode;
};

export default function Providers({
	children
}: Readonly<CustomComponentProps>) {
	return <NextUIProvider>{children}</NextUIProvider>;
}
