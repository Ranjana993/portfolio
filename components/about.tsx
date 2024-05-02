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
        I am a Computer Science Engineering Student at Maharishi Dayanand University, driven by a passion for problem-solving and coding. Proficient in a range of technologies such as Express.js, Node.js, MongoDB, HTML5, CSS, and C++, I have completed three internships, refining my skills and gaining hands-on experience.
        Actively seeking a full-time position in frontend, backend, or the MERN stack, I bring a dedicated and enthusiastic approach to my work, consistently delivering at 100%. <br/> I am confident in my ability to contribute effectively to a team and excited about the prospect of applying my skills in a professional setting.
        Seeking a full-time position as a software developer,<span className=" font-semibold"> my core stack comprises React, Node.js, Express.js and MongoDB, with proficiency in TypeScript and Prisma</span>. Eager to embrace new technologies, I bring a problem-solving mindset to every coding challenge.
      </p>
      <p>
        Beyond coding, I find joy in reading books📚 (specifically related to real life knowledge, skills & growth), playing badminton , and spending quality time with my family. I'm also an active learner⚡. 
      </p>


    </motion.section>
  );
}
