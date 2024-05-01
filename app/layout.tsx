import { ReactNode } from "react";

type CustomLayoutProps = {
	children: ReactNode;
};

export default function RootLayout({ children }: Readonly<CustomLayoutProps>) {
	return children;
}
