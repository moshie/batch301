import Link from "next/link";
import React from "react";

export const Header = () => {
	return (
		<header className="mb-6">
			<div className="py-6 flex justify-between items-center border-white border-b-2 mb-6">
				<Link href="/" className="text-white font-semibold text-3xl">
					Batch 301
				</Link>
				<Link
					href="https://monzo.me/davidhewitt"
					target="_blank"
					className="border-2 rounded-lg hover:bg-white transition-colors hover:text-purple-600 py-3 font-semibold text-white px-6 border-white"
				>
					Donate
				</Link>
			</div>
			<p className="text-center text-white text-lg">
				Web development tool to validate a collection of urls redirect chain and
				status codes.
			</p>
		</header>
	);
};
