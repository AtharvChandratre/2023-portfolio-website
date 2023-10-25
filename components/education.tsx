"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function Education() {
    const { ref } = useSectionInView("Education", 0.5);

    return (
        <section ref={ref} id="education" className="scroll-mt-28 mb-28">
            <SectionHeading>Education</SectionHeading>
            <div className="flex flex-row flex-wrap justify-center">
                <div
                    ref={ref}
                    className="flex mb-3 sm:mb-8 last:mb-0"
                >
                    <section className="flex flex-col justify-center items-center w-full group bg-gray-100 max-w-[32rem] border border-black/5 rounded-lg overflow-hidden relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 ">
                        <div className="flex justify-center items-center">
                            <Image
                                src="uofi.svg"
                                alt="Project I worked on"
                                width={100}
                                height={100}
                                quality={95}
                                className="group:delay-32 sm:block mt-5 mx-10 rounded-t-lg bg-gray-100 group-hover:bg-gray-200 dark:bg-white/0 dark:group-hover:bg-white/0"
                            />
                        </div>
                        <div className="flex flex-col text-center pt-4 pb-7 px-8 sm:pl-2 sm:pr-2 sm:pt-10 sm:max-w-[100%]  h-[100%] w-[18rem]">
                            <h4 className="text-xl font-semibold">University of Illinois {"\n"} Urbana-Champaign</h4>
                            <p className="mt-2 text-gray-700 dark:text-white/70">M.S. in Computer Science</p>
                        </div>
                    </section>
                </div>
                <div className="flex flex-row flex-wrap justify-center px-8">
                    <div
                        ref={ref}
                        className="flex mb-3 sm:mb-8 last:mb-0"
                    >
                        <section className="flex flex-col justify-center items-center w-full group bg-gray-100 max-w-[32rem] border border-black/5 rounded-lg overflow-hidden relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 ">
                            <div className="flex justify-center items-center">
                                <Image
                                    src="/bits.svg"
                                    alt="Project I worked on"
                                    width={150}
                                    height={150}
                                    quality={95}
                                    className="group:delay-32 sm:block mt-5 mx-10 rounded-t-lg bg-gray-100 group-hover:bg-gray-200  dark:bg-white/0 dark:group-hover:bg-white/0"
                                />
                            </div>
                            <div className="flex flex-col text-center pt-4 pb-7 px-8 sm:pl-2 sm:pr-2 sm:pt-10 sm:max-w-[100%]  h-[100%] w-[18rem]">
                                <h4 className="text-xl font-semibold">Birla Institute of Technology and Science, Pilani</h4>
                                <p className="mt-2 text-gray-700 dark:text-white/70">B.E. in Computer Science</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}
