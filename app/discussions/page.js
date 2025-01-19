import React from "react";
import { data } from "../data/data";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const page = () => {
    return (
        <div>
            <Navbar />
            <div className="w-[80vw] mx-auto md:my-20 my-10">
                <h1 className="text-center text-[40px] font-semibold">
                    Discussion Page
                </h1>

                <div className="flex flex-wrap justify-between md:gap-[2%]">
                    {data.map((item) => (
                        <Link
                            href={item.path}
                            key={item.id}
                            className="md:w-[32%] flex flex-col items-center gap-[30px] mt-20">
                            <div className="w-[150px] h-[150px] flex items-center justify-center">
                                <Image
                                    src={item.image}
                                    height={200}
                                    width={200}
                                    alt={item.title}
                                    className="md:h-[200px] md:w-[200px] h-[150px] w-[150px]"
                                />
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <p className="text-[20px] font-semibold">
                                    {item.language}
                                </p>
                                <p className="text-[14px] text-center text-gray-500">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;
