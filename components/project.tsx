"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {FaPaperPlane} from "react-icons/fa";
import {GrDocument} from "react-icons/gr";
import {IoDocumentSharp, IoDocumentTextSharp} from "react-icons/io5";
import {AiFillGithub, AiFillYoutube} from "react-icons/ai";
import {PiCertificateFill} from "react-icons/pi";

type ProjectProps = (typeof projectsData)[number];

export default function Project(ProjectProps: any) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // @ts-ignore
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col h-full">
          <h3 className="text-2xl font-semibold text-center">{ProjectProps.title}</h3>
          {ProjectProps.subtitle && (<h3 className="text-lg font-semibold text-center">{ProjectProps.subtitle}</h3>)}
          {ProjectProps.dates && (<h3 className="text-md font-semibold text-center">{ProjectProps.dates}</h3>)}
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {ProjectProps.description}
          </p>
          {ProjectProps.tags && <ul className="flex flex-wrap mt-4 gap-2 mb-2">
            {ProjectProps.tags.map((tag: String, index: any) => {
              return (
                  <li
                      className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                      key={index}
                  >
                    {tag}
                  </li>
              );
            })}
          </ul>}
          <div className={"flex flex-row gap-2"}>
          {ProjectProps.ssrn && (<a
              href={ProjectProps.ssrn}
              target="_blank"
              rel="noreferrer noopener">
            <button
              type="submit"
              className="group flex items-center rounded-md justify-center gap-2 h-7 w-32 bg-gray-900 text-white outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 dark:text-white/70"
          >
            <IoDocumentTextSharp className={"sm text-white dark:text-white/70"}/> SSRN Link
          </button>
          </a>)}
          {ProjectProps.github && (<a
              href={ProjectProps.github}
              target="_blank"
              rel="noreferrer noopener">
            <button
                type="submit"
                className="group flex items-center rounded-md justify-center gap-2 h-7 w-32 bg-gray-900 text-white outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 dark:text-white/70"
            >
              <AiFillGithub className={"sm text-white dark:text-white/70"}/> GitHub Link
            </button>
          </a>)}
            {ProjectProps.youtube && (<a
                href={ProjectProps.youtube}
                target="_blank"
                rel="noreferrer noopener"
                className={"pt-2"}>
              <button
                  type="submit"
                  className="group flex items-center rounded-md justify-center gap-2 h-7 w-60 bg-gray-900 text-white outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 dark:text-white/70"
              >
                <AiFillYoutube className={"sm text-white dark:text-white/70"}/> YouTube Playlist Link
              </button>
            </a>)}
            {ProjectProps.certificate && (<a
                href={ProjectProps.certificate}
                target="_blank"
                rel="noreferrer noopener"
                className={"pt-2"}>
              <button
                  type="submit"
                  className="group flex items-center rounded-md justify-center gap-2 h-7 w-60 bg-gray-900 text-white outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 dark:text-white/70"
              >
                <PiCertificateFill className={"sm text-white dark:text-white/70"}/> Certificate Link
              </button>
            </a>)}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
