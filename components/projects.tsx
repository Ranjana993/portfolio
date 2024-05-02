"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projects } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { PinContainer } from "./3d-pin";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className=" flex flex-wrap justify-center gap-y-24">
        {projects.map((project, index) => (
          <PinContainer key={index} title={project.title} href={project?.href}>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-900 dark:text-slate-100">
                {project.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">{project.description}</span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                <Image
                  src={project?.imgUrl}
                  width={300}
                  height={300}
                  alt="Project Image"
                  className=" max-h-[300px] rounded-md"
                />
              </div>
              <div className="flex flex-1 flex-wrap gap-2 w-full mt-4">
                {project.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center  rounded-full bg-black dark:bg-white px-2 py-1"
                  >
                    <span className="text-xs font-bold dark:text-black text-white">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </section>
  );
}
