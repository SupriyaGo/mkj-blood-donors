/** @format */

"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, [theme]);
	return (
		<header className="text-center relative p-8 pb-0">
			<div className="relative items-center mb-8 md:mb-0 md:absolute">
				<img
					src="/images/logo2.png"
					alt="logo"
					className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px]"
				/>
			</div>
			<div className="flex flex-col items-center">
				<h1 className="text-4xl font-bold text-red-600 dark:text-red-500 mb-4">
					Mekhliganj Blood Donors
				</h1>
				<p className="text-xl text-gray-600 dark:text-gray-400">
					Connect with blood donors and save lives
				</p>
				<img
					src={"/images/bloodMan.png"}
					alt="blood man"
					className="w-[200px] h-[200px] md:w-[180px] md:h-[180px]"
				/>
			</div>
			<div className="absolute right-0 top-4 md:top-0  py-8 px-4">
				<Button
					variant="ghost"
					size="default"
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					className="rounded-full"
					aria-label="Toggle dark mode"
				>
					{mounted && theme === "dark" ? (
						<Sun style={{ height: 30, width: 30 }} />
					) : (
						<Moon className="text-gray-600" style={{ height: 30, width: 30 }} />
					)}
				</Button>
			</div>
		</header>
	);
}
