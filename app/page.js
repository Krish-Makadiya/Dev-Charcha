"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Code, Users, MessageSquare } from "lucide-react";
import { useUser } from "@clerk/nextjs";

const HomePage = () => {
    const {isSignedIn} = useUser();

    return (
        <div>
            <Navbar />
            <div className="flex flex-col min-h-screen">
                <main className="flex flex-col">
                    <section className="w-[80vw] mx-auto h-[80vh] flex items-center justify-center">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                        Connect, Chat, Code
                                    </h1>
                                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                        Join our vibrant developer community.
                                        Share ideas, collaborate on projects,
                                        and chat with like-minded coders.
                                    </p>
                                </div>
                                <div className="space-x-4">
                                    <Link href={ !isSignedIn ? "/sign-up" : "/discussions"}>
                                        <Button>Get Started</Button>
                                    </Link>
                                    <Button variant="outline">
                                        Learn More
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="features" className=" bg-gray-100">
                        <div className="w-[80vw] mx-auto h-[90vh] flex flex-col items-center justify-center container px-4 md:px-6">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                                Features
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center">
                                            <MessageSquare className="w-6 h-6 mr-2" />
                                            Real-time Chat
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>
                                            Engage in lively discussions with
                                            developers from around the world in
                                            our real-time chat rooms.
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center">
                                            <Code className="w-6 h-6 mr-2" />
                                            Code Sharing
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>
                                            Share and review code snippets with
                                            built-in syntax highlighting for all
                                            major programming languages.
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center">
                                            <Users className="w-6 h-6 mr-2" />
                                            Community Projects
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>
                                            Collaborate on open-source projects
                                            and build your portfolio with our
                                            community-driven initiatives.
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>
                    <section
                        id="community"
                        className="w-[80vw] mx-auto h-[90vh] flex items-center justify-center">
                        <div className="container px-4 md:px-6">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
                                Our Community
                            </h2>
                            <div className="flex justify-center md:flex-row flex-col items-center md:flex-wrap md:gap-[10%] gap-[5%]">
                                <div className="flex items-center space-x-4 md:w-[40%] justify-center mt-10">
                                    <img
                                        src="https://github.com/shadcn.png"
                                        alt="Community member"
                                        className="rounded-full w-12 h-12 object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            John Doe
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Active Member
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 md:w-[40%] justify-center mt-10">
                                    <img
                                        src="https://github.com/shadcn.png"
                                        alt="Community member"
                                        className="rounded-full w-12 h-12 object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            Jane Smith
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Active Member
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 md:w-[40%] justify-center mt-10">
                                    <img
                                        src="https://github.com/shadcn.png"
                                        alt="Community member"
                                        className="rounded-full w-12 h-12 object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            James Brown
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Active Member
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 md:w-[40%] justify-center mt-10">
                                    <img
                                        src="https://github.com/shadcn.png"
                                        alt="Community member"
                                        className="rounded-full w-12 h-12 object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            Emily Davis
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Active Member
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 md:w-[40%] justify-center mt-10">
                                    <img
                                        src="https://github.com/shadcn.png"
                                        alt="Community member"
                                        className="rounded-full w-12 h-12 object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            Michael Johnson
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Active Member
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 md:w-[40%] justify-center mt-10">
                                    <img
                                        src="https://github.com/shadcn.png"
                                        alt="Community member"
                                        className="rounded-full w-12 h-12 object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            Sarah Taylor
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Active Member
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        © 2024 DevConnect. All rights reserved.
                    </p>
                    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                        <Link
                            className="text-xs hover:underline underline-offset-4"
                            href="#">
                            Terms of Service
                        </Link>
                        <Link
                            className="text-xs hover:underline underline-offset-4"
                            href="#">
                            Privacy
                        </Link>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default HomePage;
