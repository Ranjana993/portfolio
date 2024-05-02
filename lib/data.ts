import React from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import ytclone from "@/public/ytclone.png";
import thumbnailImg from "@/public/thumbnailImg.png";

// import { FaProjectDiagram } from "react-icons/fa";
// import { VscGithubAction } from "react-icons/vsc";


interface projectsProps{
  title: string
  description: string,
  href: string,
  imgUrl: string,
  skills: string[]
}  

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance Full-Stack Developer",
    location: "Self-Employed",
    description:
      "Currently freelancing with a focus on creating robust, user-friendly applications. Adept at translating ideas into functional and aesthetically pleasing digital experiences.",
    icon: React.createElement(SiNextdotjs),
    date: "2023 - present",
  },
  {
    title: "Full Stack Developer Intern",
    location: "@Curious Ecosystem",
    description:
      "Contributed significantly to a closed-source project, leading frontend development efforts. Utilized my expertise to implement and optimize features, fostering collaboration and innovation within the team.",
    icon: React.createElement(SiNextdotjs),
    date: "December 2023 - Feb 2024",
  },
  
  {
    title: "Full Stack Developer Intern",
    location: "@Sensation Software Solutions Pvt. Ltd.",
    description:
      "Engaged in a six-month internship, contributing to various aspects of full-stack development. Worked on diverse projects, enhancing skills in both frontend and backend technologies.",
    icon: React.createElement(FaReact),
    date: "July 2023 - December 2023",
  },
] as const;

export const projects:projectsProps[] = [
  {
    title: "Otion- Full Stack Notion Clone",
    description: "Realtime Sync, Rich Text Editior, Dark Mode, User Authentication, and more.",
    href: "https://otion-documentation-app.vercel.app/",
    imgUrl: "https://res.cloudinary.com/daqa5apjj/image/upload/v1708493057/302348507-43fc4c76-e234-4554-9b39-318949efd506_iuv2oa.jpg",
    skills:['nextjs14','convex','tailwindcss','typsecript','react']
  },
  {
    title: "StudyNotion- An Ed-tech Platform",
    description: "A Full-Stack Edtech Platform for everyone, Sell & Consume Courses",
    href: "https://studynotion-sepia.vercel.app/",
    imgUrl: "https://res.cloudinary.com/daqa5apjj/image/upload/v1707841340/248786666-86f7fd32-2a33-4f2e-93d6-4034fe5e741d_s8z73o.jpg",
    skills:['Reactjs','Expressjs','Nodejs','MongoDB','tailwindcss']
  },
  {
    title: "Sendyy -Bulk E-mail Sender",
    description:
      "A Robust & free bulk emial sender for everyone",
    skills: ["React", "Express.js", "MongoDB", "Tailwind", "Nodejs"],
    imgUrl: 'https://res.cloudinary.com/daqa5apjj/image/upload/v1708356731/Screenshot_2023-11-22_163611_lkp8uw.jpg',
    href: "https://sendyy-bulk-email-sender.vercel.app/"
  },
  
  {
    title: "Youtube Clone",
    description:
      "Youtube UI Clone with Search, Live videos, trending,etc.",
    skills: ["React", "Youtube API","Tailwind", "Context API"],
    imgUrl: 'https://res.cloudinary.com/daqa5apjj/image/upload/v1708356733/Screenshot_2023-11-22_170909_m1rqyy.jpg',
    href: "https://youtube-clone-react-indol.vercel.app/"
  },
  // {
  //   title: "Discord Generative Ai- bot",
  //   description:
  //     "A Generative-Ai Discord bot Which can generate Images",
  //   skills: ["Nodejs", "AI Image Generator Model", "Discord.js"," Typsecript"],
  //   imgUrl: 'https://res.cloudinary.com/daqa5apjj/image/upload/v1708356731/Code_Ai_fep9hs.png',
  //   href: "https://github.com/sandy088/Discord-Ai-Art-Generator-bot"
  // },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Nextjs",
  "Java",
  "C++",
  "React",
  "Node.js",
  "Express.js",
  "Git & Github",
  "Tailwind",
  "Convex",
  "Firebase",
  "MongoDB",
  "Redux Toolkit",
  "Express",
  "Docker",
  "Figma",
  "Canva",
  "Go(Learning)"
  
] as const;
