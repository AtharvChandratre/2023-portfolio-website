"use client";

import React, { useMemo } from "react";
import SectionHeading from "./section-heading";
import { skillsCategoriesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const categoriesWithIndices = useMemo(() => {
    let customIndex = 0;
    return skillsCategoriesData.map((category) => ({
      name: category.name,
      indexedSkills: category.skills.map((skill) => ({
        skill,
        customIndex: customIndex++,
      })),
    }));
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="space-y-6">
        {categoriesWithIndices.map((category) => (
          <div
            key={category.name}
            className="rounded-2xl border border-black/5 bg-gray-100/40 px-4 py-4 dark:bg-white/5 dark:border-white/10"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900/70 dark:text-white/60">
              {category.name}
            </h3>
            <ul className="mt-3 flex flex-wrap justify-center gap-2.5">
              {category.indexedSkills.map(({ skill, customIndex }) => (
                <motion.li
                  key={skill}
                  className="bg-white/80 border border-black/10 rounded-xl px-4 py-2.5 text-sm text-gray-900/90 dark:bg-white/10 dark:text-white/80 dark:border-white/10 shadow-sm hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-transform"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={customIndex}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
