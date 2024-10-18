/** @format */
import React from "react";
import { Tabs } from "@/components/ui/tabs";
import { Toaster } from "@/components/toaster";
import Header from "@/components/header";
import TabButtons from "@/components/tabButtons";
import DonorList from "@/components/donorList";
import DonorForm from "@/components/form";
import Footer from "@/components/footer";

export default function BloodDonorApp() {
	return (
		<div className="min-h-screen flex flex-col bg-red-50 dark:bg-gray-800">
			<Header />
			<main className="container mx-auto px-4 py-8  flex-grow">
				<Tabs defaultValue="search" className="max-w-4xl mx-auto">
					<TabButtons />
					<DonorList />
					<DonorForm />
				</Tabs>
			</main>
			<Footer />
			<Toaster />
		</div>
	);
}
