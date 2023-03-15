import React from "react";

const Venus = () => {
	return (
		<svg viewBox="-65.5 -25 520.5 450">
			<defs>
				<circle id="a" cx="200" cy="200" r="200" />
				<circle id="c" cx="200" cy="200" r="200" />
				<circle id="e" cx="200" cy="200" r="200" />
			</defs>
			<g fill="none" fillRule="evenodd">
				<circle cx="200" cy="200" r="200" fill="#F7CC7F" fillRule="nonzero" />
				<mask id="b" fill="#fff">
					<use href="#a" />
				</mask>
				<path
					fill="#FFE6AE"
					fillRule="nonzero"
					d="M310 311c6.627 0 12 5.373 12 12s-5.373 12-12 12H189l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12s-5.373-12-12-12H79c-6.627 0-12-5.373-12-12s5.373-12 12-12h231zm-20-144c6.627 0 12 5.373 12 12s-5.373 12-12 12h-19v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.727 11.5 11.99v.01h80c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h1c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h6c6.627 0 12-5.373 12-12s-5.373-12-12-12H120c-6.627 0-12-5.373-12-12s5.373-12 12-12h9c6.627 0 12-5.373 12-12s-5.373-12-12-12H59c-6.627 0-12-5.373-12-12s5.373-12 12-12h231zm-173 96c6.627 0 12 5.373 12 12s-5.373 12-12 12H41c-6.627 0-12-5.373-12-12s5.373-12 12-12h76zm326-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-41c-6.627 0-12-5.373-12-12s5.373-12 12-12h41zM-9.5 167c6.627 0 12 5.373 12 12s-5.373 12-12 12h-44c-6.627 0-12-5.373-12-12s5.373-12 12-12h44zM278 119c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zm-139 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm158-96c6.627 0 12 5.373 12 12s-5.373 12-12 12h-68l-.001.01c-6.395.263-11.499 5.53-11.499 11.99S222.604 70.727 229 70.99L229 71h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12s-5.373-12-12-12H40c-6.627 0-12-5.373-12-12s5.373-12 12-12h257zm3 48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm-192 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H88c-6.627 0-12-5.373-12-12s5.373-12 12-12h20z"
					mask="url(#b)"
				/>
				<mask id="d" fill="#fff">
					<use href="#c" />
				</mask>
				<path
					fill="#E29F58"
					fillRule="nonzero"
					d="M205 263c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zM99 203c0-6.627-5.373-12-12-12H2c-6.627 0-12-5.373-12-12s5.373-12 12-12h14c6.627 0 12-5.373 12-12s-5.373-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12H64v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h160c6.627 0 12 5.373 12 12s-5.373 12-12 12h-68l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12H83c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12zm128 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm176 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H302c-6.627 0-12-5.373-12-12s5.373-12 12-12h101zm-368 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H15c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm313-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20z"
					mask="url(#d)"
				/>
				<mask id="f" fill="#fff">
					<use href="#e" />
				</mask>
				<path
					fill="#000"
					fillRule="nonzero"
					mask="url(#f)"
					opacity=".078"
					d="M201-25h225v450H201z"
				/>
			</g>
		</svg>
	);
};

export default Venus;
