import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const profile = {
  id: "default",
  name: "Abhinandan Kumar",
  greeting: "Hello there!",
  description:
    "I’m a passionate web developer focused on creating beautiful and functional user interfaces. Eager to start my professional career, I transform ideas into engaging web experiences through my skills and projects.",
};

const bio = [
  "I am currently studying Computer Science with a focus on Artificial Intelligence at Marwadi University, Rajkot, India, where I am set to graduate in 2025. As a dedicated and passionate individual, I am eager to embark on my professional journey, with a keen interest in web development.",
  "With a solid foundation in HTML, CSS, and JavaScript, I have honed my skills in modern frameworks and technologies such as React, Node.js, MongoDB, and Next.js. My love for web development design drives me to create visually appealing and highly functional web applications.",
  "As a fresher, I am enthusiastic about applying my knowledge and creativity to real-world projects, aiming to craft exceptional user experiences and contribute meaningfully to the field of web development.",
];

const projects = [
  ["CAL-X", "An calculator app built with React Vite and a FastAPI backend.", "https://github.com/AE-Hertz/CALX", "https://hzcalx.vercel.app/"],
  ["Portfolio for Animata.design", "A portfolio template made during an open-source contribution.", "https://github.com/AE-Hertz/animata-issue-191", "https://animata-issue-191.vercel.app/"],
  ["Trinity", "A real-time chat application with AI text and code assistance.", "https://github.com/AE-Hertz/chatapp-test", "https://hertz-trinity.vercel.app/"],
  ["Weather App", "A weather application using the OpenWeatherMap API.", "https://github.com/AE-Hertz/Weather-App", "https://ae-hertz.github.io/Weather-App/"],
  ["Cursor Animation", "An interactive cursor animation using HTML, CSS, and JavaScript.", "https://github.com/AE-Hertz/Cursor-Animation/", "https://cursor-animation-hertz.vercel.app/"],
  ["Digital Clock", "A React Vite digital clock animated with Anime.js.", "https://github.com/AE-Hertz/digitalClock", "https://clock-hertz.vercel.app/"],
];

const skills = [
  ["React", "2+ years"], ["Next.js", "<1 year"], ["MongoDB", "1+ year"],
  ["Express.js", "2+ years"], ["Node.js", "2+ years"], ["Tailwind CSS", "3+ years"],
];

const experiences = [
  ["Web Developer Intern", "MotionCut technologies", "Sep 2024 - Oct 2024", "Developed a movie and TV series database site using React, Bootstrap, TMDB APIs, MongoDB, and Express."],
  ["Lead, CV Club", "Marwadi University", "Jan 2024 - Jun 2024", "Founded and led the Computer Vision Club, developing projects and workshops with Python."],
  ["University Projects", "Marwadi University", "May 2021 - Present", "Built web applications with React, Node.js, MongoDB, and Next.js through coursework and collaboration."],
  ["Personal Projects", "Self-initiated", "Ongoing", "Developed personal projects to strengthen web development skills and stay current with industry trends."],
];

const education = [
  ["Bachelor of Technology in Computer Science with a specialization in AI", "Marwadi University, India", "May 2021 - May 2025", "Focused on Artificial Intelligence and web development."],
  ["Higher Secondary Education (Science with Computer Science)", "Kendriya Vidyalaya, Pune, India", "2018 - 2020", "Studied science, computer science, and mathematics."],
];

const socialLinks = [
  ["Slack", "https://abhinandanorg.slack.com/team/U06QWH8FDLL"],
  ["Discord", "https://discord.com/users/hertz.1999"],
  ["Instagram", "https://www.instagram.com/playinhertz/"],
  ["X", "https://x.com/Abhi_Hertz"],
  ["GitHub", "https://github.com/AE-Hertz/"],
  ["LinkedIn", "https://www.linkedin.com/in/abhinandan-kumar-373b31136/"],
];

async function main() {
  await prisma.$transaction([
    prisma.profile.upsert({ where: { id: "default" }, create: profile, update: profile }),
    prisma.bio.deleteMany(),
    prisma.project.deleteMany(),
    prisma.skill.deleteMany(),
    prisma.experience.deleteMany(),
    prisma.education.deleteMany(),
    prisma.socialLink.deleteMany(),
  ]);
  await prisma.bio.createMany({ data: bio.map((content, sortOrder) => ({ content, sortOrder })) });
  await prisma.project.createMany({ data: projects.map(([name, description, githubUrl, tryUrl], sortOrder) => ({ name, description, githubUrl, tryUrl, sortOrder })) });
  await prisma.skill.createMany({ data: skills.map(([name, experience], sortOrder) => ({ name, experience, sortOrder })) });
  await prisma.experience.createMany({ data: experiences.map(([title, company, duration, description], sortOrder) => ({ title, company, duration, description, sortOrder })) });
  await prisma.education.createMany({ data: education.map(([degree, institution, duration, description], sortOrder) => ({ degree, institution, duration, description, sortOrder })) });
  await prisma.socialLink.createMany({ data: socialLinks.map(([platform, url], sortOrder) => ({ platform, url, sortOrder })) });
}

main().finally(() => prisma.$disconnect());
