"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import {HiDownload, HiEye} from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import {InView} from "react-intersection-observer";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            {/*<Image*/}
            {/*  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"*/}
            {/*  alt="Atharv portrait"*/}
            {/*  width="192"*/}
            {/*  height="192"*/}
            {/*  quality="95"*/}
            {/*  priority={true}*/}
            {/*  className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"*/}
            {/*/>*/}
          </motion.div>

          {/*<motion.span*/}
          {/*  className="absolute bottom-0 right-0 text-4xl"*/}
          {/*  initial={{ opacity: 0, scale: 0 }}*/}
          {/*  animate={{ opacity: 1, scale: 1 }}*/}
          {/*  transition={{*/}
          {/*    type: "spring",*/}
          {/*    stiffness: 125,*/}
          {/*    delay: 0.1,*/}
          {/*    duration: 0.7,*/}
          {/*  }}*/}
          {/*>*/}
          {/*  👋*/}
          {/*</motion.span>*/}
        </div>
      </div>

      <h1 className=" mt-4 text-xl font-medium !leading-[1.5] sm:text-4xl">Hi, I’m Atharv Chandratre.</h1>

      <motion.h2
          className="mb-10 mt-4 text-xl font-medium !leading-[1.5] sm:text-xl"
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
      >
        I'm a forward-thinking Software Engineer with a passion for solving challenging problems in collaborative environments.
        <br /> <br /> My experience at Amazon and Goldman Sachs has honed my skills in creating scalable, robust software
        solutions, with a special focus on combining cloud and AI technologies with full-stack development.
        <br /> <br /> I am driven by the challenge of innovating in the tech landscape, and I am always eager to apply my
        expertise to new, groundbreaking projects.
      </motion.h2>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://drive.google.com/file/d/1FV2v4il-p53JOmM-dw3hVfDEtuYd1tMC/view?usp=drivesdk"
          target="_blank"
          rel="noreferrer noopener"
        >
          View Resume{" "}
          <HiEye className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/atharv-chandratre/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/AtharvChandratre"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
