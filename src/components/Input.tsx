import React from "react";

export const Input = () => (
	<div className="border selection:bg-purple-300 border-slate-300 rounded-md overflow-hidden">
		<header className="border-b-slate-300 border-b bg-slate-100 text-slate-900 text-center w-full py-2">
			Redirects.txt
		</header>
		<textarea
			className="w-full outline-none p-4 m-0 block"
			rows={20}
			name="redirects"
			id="redirects"
		/>
	</div>
);
