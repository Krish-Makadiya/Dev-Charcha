import Navbar from "@/components/Navbar";
import React from "react";

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="w-[80%] mx-auto mt-16 flex flex-col gap-6">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <div className="flex flex-col gap-6">
                    <p className="text-lg leading-relaxed">
                        Welcome to our developer community — a space created by
                        developers, for developers. Our mission is to bring
                        together skilled professionals and enthusiastic learners
                        who are passionate about building, sharing, and growing
                        their technical expertise.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Whether you’re solving complex problems, learning new
                        technologies, or eager to help others succeed, this
                        community is designed to foster collaboration, learning,
                        and innovation. By connecting talented developers, we
                        aim to create an ecosystem where ideas flourish and
                        growth becomes a collective achievement.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Join us to share knowledge, ask questions, and
                        contribute to meaningful discussions that will shape the
                        future of technology. Together, we grow stronger!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
