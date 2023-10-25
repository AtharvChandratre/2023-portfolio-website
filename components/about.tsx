"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Ever since I was in 8th grade, I have had a passion for building things.
        It started with LEGO, but I soon found the world of code to be much more enjoyable.
        I also didn't have to keep begging my parents for more LEGO sets that way.
      </p>
      <p className="mb-3">
        I completed my undergraduate degree in Computer Science from BITS Pilani in India. During that, I interned at Goldman Sachs and Amazon as a software engineer.
        Both of these experiences solidified my passion for using code as a tool to build applications that impact the world at scale.
      </p>
      <p className="mb-3">
        My favorite part of programming is the problem-solving aspect.
        I love the feeling of finally figuring out a solution to a problem.
        I am always looking to learn new technologies.
        I am also a tinkerer at heart. I try to create enjoyable solutions that automate life's boring parts.
      </p>
      <p className="mb-3">
        <b>I am currently looking for a full-time position as a software developer.</b>
      </p>
      <p className="mb-3">
        I play badminton, read and do origami in my free time.
        Recently I've been getting into making latte art and learning the guitar.
      </p>
    </motion.section>
  );
}
