"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  const lineColor =
    theme === "light" ? "rgba(229, 231, 235, 1)" : "rgba(255, 255, 255, 0.2)";

  // Convert a description paragraph into sentence-level bullets.
  // Used when an entry doesn't explicitly provide `bullets`.
  const descriptionToBullets = (description: string) => {
    // Split on whitespace after sentence-ending punctuation while keeping punctuation.
    const parts = description.split(/(?<=[.!?])\s+/g);
    return parts.map((p) => p.trim()).filter(Boolean);
  };

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      {/* react-vertical-timeline-component sets --line-color from lineColor prop */}
      <VerticalTimeline lineColor={lineColor}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border:
                  theme === "light"
                    ? "1px solid rgba(0, 0, 0, 0.05)"
                    : "1px solid rgba(255, 255, 255, 0.12)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  // Make the icon circle opaque in dark mode so the timeline line
                  // doesn't "bleed" through behind the logos.
                  theme === "light" ? "white" : "rgba(17, 24, 39, 0.95)",
                border:
                  theme === "light"
                    ? "1px solid rgba(0,0,0,0.05)"
                    : "1px solid rgba(255,255,255,0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <ul className="!mt-1 !font-normal text-gray-700 dark:text-white/75 list-disc list-inside pb-2">
                {(item.bullets?.length ? item.bullets : descriptionToBullets(item.description)).map(
                  (bullet, index) => (
                    <li key={index} className="leading-relaxed">
                      {bullet}
                    </li>
                  )
                )}
              </ul>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                {item.tags.map((tag, index) => (
                    <li
                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                        key={index}
                    >
                        {tag}
                    </li>
                ))}
                </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
