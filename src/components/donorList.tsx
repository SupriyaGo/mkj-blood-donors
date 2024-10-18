/** @format */
"use client";
import React, { useState } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { donors } from "@/data/donors";
import { groups } from "@/data/groups";
import { useToast } from "@/hooks/use-toast";

interface Donor {
	name: string;
	bloodGroup: string;
	phone: string;
	alternatePhone: string;
}

export default function DonorList() {
	const { toast } = useToast();
	const [searchResults, setSearchResults] = useState<Donor[] | []>([]);

	const handleSearch = (bloodGroup: string) => {
		const data: Donor[] = donors.filter((d) => d.bloodGroup === bloodGroup);
		if (data.length === 0) {
			toast({
				title: "No Data Found!",
				description: `Currently no donor available for ${bloodGroup} blood group.`,
				className: "bg-sky-600 dark:bg-sky-800",
			});
		}

		setSearchResults(data);
	};

	const copyToClipboard = (text: Donor) => {
		navigator.clipboard.writeText(text.phone).then(() => {
			toast({
				title: "Copied!",
				description: `Phone number of ${text.name} copied to clipboard.`,
				className: "bg-red-600 dark:bg-red-800",
			});
		});
	};

	return (
		<TabsContent value="search">
			<Card className="border-gray-600 dark:border-gray-200">
				<CardHeader>
					<CardTitle className="text-gray-600 dark:text-gray-200">
						Search for Blood Donors
					</CardTitle>
					<CardDescription className="text-gray-600 dark:text-gray-200">
						Find donors by blood group in your area
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="flex space-x-4">
						<Select onValueChange={handleSearch}>
							<SelectTrigger className="w-full md:w-[180px] bg-red-600">
								<SelectValue placeholder="Select Blood Group" />
							</SelectTrigger>
							<SelectContent className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400">
								{groups.map((group) => (
									<SelectItem key={group.id} value={group.name}>
										{group.name}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					{searchResults.length > 0 && (
						<div className="mt-4">
							<h3 className="text-lg font-semibold mb-2 text-gray-600 dark:text-gray-200">
								Search Results:
							</h3>
							<div className="block md:hidden">
								{searchResults.map((donor, index) => {
									return (
										<Card className="p-4 mb-2 border-gray-600 dark:border-gray-200">
											<CardTitle className="mb-4 text-gray-600 dark:text-gray-200">
												{donor.name}
											</CardTitle>
											<CardDescription className="flex">
												<div className="w-[80%]">
													<p className="text-gray-600 dark:text-gray-200 text-md mb-1">
														Phone Number:
													</p>
													<p className="text-gray-600 dark:text-gray-200 font-bold text-lg mb-2">
														{donor.phone}
													</p>
													<p className="text-gray-600 dark:text-gray-200 text-md mb-1">
														Alternate Number:
													</p>
													<p className="text-gray-600 dark:text-gray-200 font-bold text-lg">
														{donor.alternatePhone}
													</p>
												</div>
												<div className="w-[20%] flex items-center">
													<p className="text-gray-600 dark:text-gray-200 font-bold text-2xl">
														{donor.bloodGroup}
													</p>
												</div>
											</CardDescription>
											<CardFooter className="pb-0 pl-0 pt-4 justify-center">
												<Button
													variant="ghost"
													size="sm"
													onClick={() => copyToClipboard(donor)}
													className="pl-0"
												>
													<Copy className="h-4 w-4 mr-2" />
													Copy
												</Button>
											</CardFooter>
										</Card>
									);
								})}
							</div>
							<Table className="hidden md:table">
								<TableHeader>
									<TableRow className="text-gray-600 dark:text-gray-200">
										<TableHead>Name</TableHead>
										<TableHead>Blood Group</TableHead>
										<TableHead>Phone Number</TableHead>
										<TableHead>Alternate Number</TableHead>
										<TableHead>Actions</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody className="text-gray-600 dark:text-gray-200">
									{searchResults.map((donor, index) => (
										<TableRow key={index}>
											<TableCell>{donor.name}</TableCell>
											<TableCell>{donor.bloodGroup}</TableCell>
											<TableCell>{donor.phone}</TableCell>
											<TableCell>{donor.alternatePhone}</TableCell>
											<TableCell>
												<Button
													variant="ghost"
													size="sm"
													onClick={() => copyToClipboard(donor)}
													className="pl-0"
												>
													<Copy className="h-4 w-4 mr-2" />
													Copy
												</Button>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					)}
				</CardContent>
			</Card>
		</TabsContent>
	);
}
