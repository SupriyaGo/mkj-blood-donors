/** @format */

import React from "react";
import { TabsTrigger, TabsList } from "./ui/tabs";
import { tabs } from "@/data/tabs";

export default function TabButtons() {
	return (
		<TabsList className="grid w-full grid-col-1 md:grid-cols-2 mb-32 md:mb-10 ">
			{tabs.map((tab) => (
				<TabsTrigger
					key={tab.id}
					value={tab.value}
					className="w-[320px] md:w-full p-3 md:p-4 rounded-lg text-red-600 dark:text-white dark:data-[state=active]:bg-red-600 data-[state=active]:bg-red-600"
				>
					<img
						src={tab.src}
						alt={`${tab.name} icon`}
						className="h-6 w-6 mr-2"
					/>
					<p className="text-[20px]">{tab.name}</p>
				</TabsTrigger>
			))}
		</TabsList>
	);
}
