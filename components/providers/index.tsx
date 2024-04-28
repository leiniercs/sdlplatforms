"use client";
import { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

type CustomProps = {
	children: ReactNode;
};

export default function Providers({ children }: Readonly<CustomProps>) {
	return <NextUIProvider>{children}</NextUIProvider>;
}
