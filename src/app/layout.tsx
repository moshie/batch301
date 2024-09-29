import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
	variable: "--font-fredoka-sans",
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
			<body className={`${fredoka.variable} antialiased`}>{children}</body>
		</html>
	);
}
