import React from "react";

import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaDiscord,
    FaInstagram,
    FaSlack,
} from "react-icons/fa6";

import aa from "../assets/aa.jpg";
import bb from "../assets/bb.jpg";
import cc from "../assets/cc.jpg";
import dd from "../assets/dd.jpg";
import ee from "../assets/ee.jpg";
import ff from "../assets/ff.jpg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export const NAVIGATION_LINKS = [
    { label: "Projects", href: "#projects" },
    { label: "Bio", href: "#bio" },
    { label: "Skills", href: "#skills" },
    { label: "Work Experience", href: "#work" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

export const HERO = {
    name: "Abhinandan Kumar",
    greet: "Hello there! 👋🏻",
    description:
        "I’m a passionate web developer focused on creating beautiful and functional user interfaces. Eager to start my professional career, I transform ideas into engaging web experiences through my skills and projects.",
};

export const PROJECTS = [
    {
        id: 1,
        name: "Personal Portfolio",
        description:
            "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
        image: aa,
        githubLink: "https://github.com/user/personal-portfolio",
        tryLink: "",
    },
    {
        id: 2,
        name: "E-Commerce Platform",
        description:
            "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
        image: bb,
        githubLink: "https://github.com/user/ecommerce-platform",
        tryLink: "",
    },
    {
        id: 3,
        name: "Cursor Animation",
        description:
            "An interactive cursor animation project utilizing HTML, CSS, and JavaScript, designed to customizable effects, deployed on Vercel, and used geometry to calculate cursor movement.",
        image: cc,
        githubLink: "https://github.com/AE-Hertz/Cursor-Animation/",
        tryLink: "https://cursor-animation-hertz.vercel.app/",
    },
    {
        id: 4,
        name: "Weather App",
        description:
            "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with JavaScript and CSS.",
        image: dd,
        githubLink: "https://github.com/AE-Hertz/Weather-App",
        tryLink: "https://ae-hertz.github.io/Weather-App/",
    },
    {
        id: 5,
        name: "Digital Clock",
        description:
            "A sleek digital clock built with React Vite and animated with Anime.js, displaying real-time user time and timezone with dynamic sphere animation, deployed on Vercel.",
        image: ee,
        githubLink: "https://github.com/AE-Hertz/digitalClock",
        tryLink: "https://clock-hertz.vercel.app/",
    },
    {
        id: 6,
        name: "Chat Application",
        description:
            "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
        image: ff,
        githubLink: "https://github.com/user/chat-application",
        tryLink: "",
    },
];

export const BIO = [
    "I am currently studying Computer Science with a focus on Artificial Intelligence at Marwadi University, Rajkot, India, where I am set to graduate in 2025. As a dedicated and passionate individual, I am eager to embark on my professional journey, with a keen interest in web development.",

    "With a solid foundation in HTML, CSS, and JavaScript, I have honed my skills in modern frameworks and technologies such as React, Node.js, MongoDB, and Next.js. My love for web development design drives me to create visually appealing and highly functional web applications.",

    "As a fresher, I am enthusiastic about applying my knowledge and creativity to real-world projects, aiming to craft exceptional user experiences and contribute meaningfully to the field of web development.",
];

export const SKILLS = [
    {
        icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
        name: "React",
        experience: "1+ year",
    },
    {
        icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
        name: "Next.js",
        experience: "<1 year",
    },
    {
        icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
        name: "MongoDB",
        experience: "1+ year",
    },
    {
        icon: <SiExpress className="text-4xl text-white lg:text-5xl" />,
        name: "Express.js",
        experience: "1+ year",
    },
    {
        icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
        name: "Node.js",
        experience: "1+ year",
    },
    {
        icon: <SiTailwindcss className="text-4xl text-sky-500 lg:text-5xl" />,
        name: "Tailwind CSS",
        experience: "2+ year",
    },
];

export const EXPERIENCES = [
    {
        title: "Lead, CV Club",
        company: "Marwadi University",
        duration: "Jan 2024 - Jun 2024",
        description:
            "Founded the Computer Vision (CV) Club at Marwadi University, where I led the development of computer vision project & games using Python. Organized workshop to share knowledge and enhance skills in computer vision techniques. Worked on building interactive CV-based games and applications, gaining hands-on experience with image processing and machine learning algorithms.",
    },
    {
        title: "University Projects",
        company: "Marwadi University",
        duration: "May 2021 - Present",
        description:
            "Participated in several academic projects that involved designing and developing web applications. Worked with technologies like React, Node.js, MongoDB, and Next.js. These projects included creating interactive web interfaces, implementing backend functionalities, and ensuring smooth user experiences. Gained hands-on experience through coursework and collaborative projects.",
    },
    {
        title: "Personal Projects",
        company: "Self-initiated",
        duration: "Ongoing",
        description:
            "Developed personal projects to enhance web development skills. Created a weather app using HTML, CSS, and JavaScript, and a digital clock with React and anime.js. Focused on designing visually appealing and functional web applications. Continually working on improving skills and building new projects to stay updated with industry trends.",
    },
];

export const EDUCATION = [
    {
        degree: "Bachelor of Technology in Computer Science with a specialization in AI",
        institution: "Marwadi University, India",
        duration: "May 2021 - May 2025 (expected)",
        description:
            "Focusing on Artificial Intelligence and web development. Gained expertise in HTML, CSS, JavaScript, React, Node.js, MongoDB, and Next.js. Developed several web projects with a strong emphasis on design and user experience. Founded and Lead ComputerVision Club in my University, helping student to gain knowledge about Computer Vision. Expected to graduate in 2025.",
    },
    {
        degree: "Higher Secondary Education (Science with Computer Science)",
        institution: "Kendriya Vidyalaya, Pune, India",
        duration: "2018 - 2020",
        description:
            "Studied Science with a major on Computer Science and Mathematics. Developed a foundational understanding of programming and computer fundamentals. Participated in various science and technology fairs and activities, fostering an early interest in web development and technology.",
    },
];

export const SOCIAL_MEDIA_LINKS = [
    {
        href: "https://abhinandanorg.slack.com/team/U06QWH8FDLL",
        icon: <FaSlack fontSize={25} className="hover:opacity-80" />,
    },
    {
        href: "https://discord.com/users/hertz.1999",
        icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
    },
    {
        href: "https://www.instagram.com/playinhertz/",
        icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
    },
    {
        href: "https://x.com/Abhi_Hertz",
        icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
    },
    {
        href: "https://github.com/AE-Hertz/",
        icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
    },
    {
        href: "https://www.linkedin.com/in/abhinandan-kumar-373b31136/",
        icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    },
];
