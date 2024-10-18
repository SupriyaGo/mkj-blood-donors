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
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { groups } from "@/data/groups";

interface Form {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	alternatePhone: string;
	bloodGroup: string;
}

export default function DonorForm() {
	const { toast } = useToast();
	const [formData, setFormData] = useState<Form>({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		alternatePhone: "",
		bloodGroup: "",
	});
	const [formErrors, setFormErrors] = useState({
		firstName: null,
		lastName: null,
		email: null,
		phone: null,
		alternatePhone: null,
		bloodGroup: null,
	});

	const handleInputChange = (e: Object) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setFormErrors({ ...formErrors, [name]: "" });
	};

	const handleSelectChange = (name: string, value: string) => {
		setFormData({ ...formData, [name]: value });
		setFormErrors({ ...formErrors, [name]: "" });
	};

	const handleSubmit = (e: Object) => {
		e.preventDefault();
		if (validateForm()) {
			console.log("Form submitted:", formData);
			toast({
				title: "Success!",
				description: "You have been registered as a donor.",
			});
		}
	};

	const validateForm = () => {
		const errors: Form = {};
		const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;

		Object.keys(formData).forEach((key: string) => {
			if (!formData[key]) {
				errors[key] = "This field is required";
			} else if (
				(key === "phone" || key === "alternatePhone") &&
				!phoneRegex.test(formData[key])
			) {
				errors[key] = "Please enter a valid Indian phone number";
			}
		});
		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	return (
		<TabsContent value="register">
			<Card>
				<CardHeader>
					<CardTitle className="text-gray-600 dark:text-gray-200">
						Register as a Blood Donor
					</CardTitle>
					<CardDescription className="text-gray-600 dark:text-gray-200">
						Join our community of life-savers
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label
									htmlFor="firstName"
									className="text-gray-600 dark:text-gray-200"
								>
									First Name
								</Label>
								<Input
									id="firstName"
									name="firstName"
									placeholder="Rahul"
									value={formData.firstName}
									onChange={handleInputChange}
									className="bg-red-800"
								/>
								{formErrors.firstName && (
									<p className="text-red-500 text-sm">{formErrors.firstName}</p>
								)}
							</div>
							<div className="space-y-2">
								<Label
									htmlFor="lastName"
									className="text-gray-600 dark:text-gray-200"
								>
									Last Name
								</Label>
								<Input
									id="lastName"
									name="lastName"
									placeholder="Sharma"
									value={formData.lastName}
									onChange={handleInputChange}
									className="bg-red-800"
								/>
								{formErrors.lastName && (
									<p className="text-red-500 text-sm">{formErrors.lastName}</p>
								)}
							</div>
						</div>
						<div className="space-y-2">
							<Label
								htmlFor="email"
								className="text-gray-600 dark:text-gray-200"
							>
								Email
							</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="rahul@example.com"
								value={formData.email}
								onChange={handleInputChange}
								className="bg-red-800"
							/>
							{formErrors.email && (
								<p className="text-red-500 text-sm">{formErrors.email}</p>
							)}
						</div>
						<div className="space-y-2">
							<Label
								htmlFor="phone"
								className="text-gray-600 dark:text-gray-200"
							>
								Phone Number
							</Label>
							<Input
								id="phone"
								name="phone"
								type="tel"
								placeholder="+91 98765 43210"
								value={formData.phone}
								onChange={handleInputChange}
								className="bg-red-800"
							/>
							{formErrors.phone && (
								<p className="text-red-500 text-sm">{formErrors.phone}</p>
							)}
						</div>
						<div className="space-y-2">
							<Label
								htmlFor="alternatePhone"
								className="text-gray-600 dark:text-gray-200"
							>
								Alternate Phone Number
							</Label>
							<Input
								id="alternatePhone"
								name="alternatePhone"
								type="tel"
								placeholder="+91 87654 32109"
								value={formData.alternatePhone}
								onChange={handleInputChange}
								className="bg-red-800"
							/>
							{formErrors.alternatePhone && (
								<p className="text-red-500 text-sm">
									{formErrors.alternatePhone}
								</p>
							)}
						</div>
						<div className="space-y-2">
							<Label
								htmlFor="bloodGroup"
								className="text-gray-600 dark:text-gray-200"
							>
								Blood Group
							</Label>
							<Select
								onValueChange={(value) =>
									handleSelectChange("bloodGroup", value)
								}
							>
								<SelectTrigger id="bloodGroup" className="bg-red-800">
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
							{formErrors.bloodGroup && (
								<p className="text-red-500 text-sm">{formErrors.bloodGroup}</p>
							)}
						</div>
						<Button
							variant={"outline"}
							type="submit"
							className="w-full bg-transparent border-gray-600 dark:border-gray-200 text-gray-600 font-bold dark:text-gray-200"
						>
							Register
						</Button>
					</form>
				</CardContent>
			</Card>
		</TabsContent>
	);
}
