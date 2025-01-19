"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/clerk-react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Navbar = () => {
    const { isSignedIn, user } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-sm">
            <div className="w-[90%] mx-auto flex justify-between items-center py-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-[1.5rem] md:text-[2rem] font-bold transition-all duration-200 hover:scale-105 flex items-center">
                    DevCharcha.
                </Link>

                {/* Menu for larger screens */}
                <div className="hidden md:flex gap-8 items-center">
                    <Link
                        href="/about"
                        className="relative text-gray-600 hover:text-[#0e0e0e] transition-all duration-300 group hover:scale-105">
                        About
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#000] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        href="/discussions"
                        className="relative text-gray-600 hover:text-[#0e0e0e] transition-all duration-300 group hover:scale-105">
                        Discussions
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#000] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        href="#features"
                        className="relative text-gray-600 hover:text-[#0e0e0e] transition-all duration-300 group hover:scale-105">
                        Features
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#000] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        href="#community"
                        className="relative text-gray-600 hover:text-[#0e0e0e] transition-all duration-300 group hover:scale-105">
                        Community
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#000] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        href="/github"
                        className="relative text-gray-600 hover:text-[#0e0e0e] transition-all duration-300 group hover:scale-105">
                        Github
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#000] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>
                <div className="md:flex hidden">
                    {!isSignedIn && (
                        <div className="hidden md:flex gap-8 items-center">
                            <Link
                                href="/sign-in"
                                className="text-gray-600 hover:text-[#0e0e0e] transition-all duration-300">
                                Sign-In
                            </Link>
                            <Link href="/sign-up">
                                <Button>Sign-Up</Button>
                            </Link>
                        </div>
                    )}
                    {isSignedIn && (
                        <UserButton
                            appearance={{
                                elements: {
                                    userButtonAvatarBox: "w-10 h-10",
                                },
                            }}
                        />
                    )}
                </div>

                {/* Hamburger Menu for smaller screens */}
                <div className="flex md:hidden items-center gap-4">
                    {isSignedIn && (
                        <UserButton
                            appearance={{
                                elements: {
                                    userButtonAvatarBox: "w-10 h-10",
                                },
                            }}
                        />
                    )}
                    <button
                        className="md:hidden text-gray-600 hover:text-[#0e0e0e] transition-all duration-300 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md py-4">
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href="/about"
                            className="text-gray-600 hover:text-[#0e0e0e] transition-all duration-300">
                            About
                        </Link>
                        <Link
                            href="/discussions"
                            className="text-gray-600 hover:text-[#0e0e0e] transition-all duration-300">
                            Discussions
                        </Link>
                        <Link
                            href="#features"
                            className="text-gray-600 hover:text-[#0e0e0e] transition-all duration-300">
                            Features
                        </Link>
                        <Link
                            href="#community"
                            className="text-gray-600 hover:text-[#0e0e0e] transition-all duration-300">
                            Community
                        </Link>
                        <Link
                            href="/github"
                            className="text-gray-600 hover:text-[#0e0e0e] transition-all duration-300">
                            Github
                        </Link>
                        {!isSignedIn && (
                            <>
                                <Link
                                    href="/sign-in"
                                    className="text-gray-600 hover:text-[#0e0e0e] transition-all duration-300">
                                    Sign-In
                                </Link>
                                <Link href="/sign-up">
                                    <Button>Sign-Up</Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
