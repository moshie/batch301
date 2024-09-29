import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
	variable: "--font-montserrat-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Batch 301",
	description: "Batch 301 is a development tool to check urls for redirects",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.variable} bg-purple-700 font-sans antialiased`}
			>
				<div className="container mx-auto max-w-[992px]">
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
