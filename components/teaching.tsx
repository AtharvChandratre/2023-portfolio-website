"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {projectsData, teachingData} from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Teaching() {
    const { ref } = useSectionInView("Teaching", 0.5);

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>My Teaching Experience</SectionHeading>
            <div className="grid lg:grid-cols-3 gap-4 grid-cols-1">
                {teachingData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
