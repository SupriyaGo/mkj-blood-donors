/** @format */

import React from "react";
import { Linkedin, Github, Twitter, HeartIcon } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-red-600 text-white py-4 mt-12">
			<div className="container mx-auto px-4 md:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="text-center md:text-left mb-4 md:mb-0">
						<p className="text-sm flex justify-center md:justify-start">
							Made with <HeartIcon className="h-4 w-4 text-white mx-2" /> by
						</p>
						<h2 className="text-2xl font-bold mt-1">Supriya Gorai</h2>
					</div>
					<div className="flex space-x-4">
						<a
							href="https://www.linkedin.com/in/supriya-gorai"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-red-200 transition-colors"
						>
							<Linkedin className="w-6 h-6" />
							<span className="sr-only">LinkedIn</span>
						</a>
						<a
							href="https://github.com/SupriyaGo"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-red-200 transition-colors"
						>
							<Github className="w-6 h-6" />
							<span className="sr-only">GitHub</span>
						</a>
						<a
							href="https://twitter.com/supriya_gorai"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-red-200 transition-colors"
						>
							<Twitter className="w-6 h-6" />
							<span className="sr-only">Twitter</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
