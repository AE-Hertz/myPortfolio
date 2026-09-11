import React from "react";

const ResumePage = () => {
   return (
      <div className="flex justify-center bg-gray-200 text-white py-10">
         <div className="border-8 border-blue-100 backdrop-blur-xl rounded-lg shadow-2xl shadow-black w-full max-w-4xl">
            <div className="bg-black p-10 rounded-lg">
               <h1 className="text-center text-5xl font-bold tracking-wide">
                  ABHINANDAN KUMAR
               </h1>
               <div className="flex items-center justify-center space-x-10 max-w-4xl mt-4 text-sm underline">
                  <a href="mailto:abhinandankumar102001@gmail.com">Email</a>
                  <a
                     href="https://www.linkedin.com/in/abhinandan-kumar-373b31136/"
                  >
                     Linkedin
                  </a>
                  <a href="https://github.com/AE-Hertz">Github</a>
               </div>

               {/* Work Experience */}
               <Section title="Work Experience">
                  <Experience
                     role="Software Developer | Web Developer Intern"
                     period="Sep-Oct '24"
                     responsibilities={[
                        "Developed IMDBKnight, a full-stack app leveraging TMDB API.",
                        "Reduced HTTP requests from 88 to 5, significantly improving performance and minimizing server load.",
                        "Improved page load time from 1270ms to 379ms, enhancing user experience with faster loading speeds.",
                     ]}
                  />
               </Section>

               {/* Skills */}
               <Section title="Skills">
                  <p className="text-sm">
                     Artificial Intelligence | Python | Scikit-Learn |
                     JavaScript | React | Next.js | Node.js | Express.js |
                     MongoDB | Tailwind CSS | Git | GitHub | TypeScript | REST
                     APIs | Framer Motion | Firebase | JSON | HTML5 | CSS3 | JWT
                     | Clerk | PowerBI
                  </p>
               </Section>

               {/* Projects */}
               <Section title="Projects">
                  <Experience
                     role="ASRASR | Speech-to-Text App"
                     period="Nov'24"
                     responsibilities={[
                        "Created a speech to text web app with 98% accuracy utilizing OpenAI Whisper model,paired with intuitive UI for ease of end use",
                        "Deployed using Streamlit for efficient integration and uptime",
                     ]}
                  />
                  <Experience
                     role="IMDBKnight | Full Stack App"
                     period="Oct'24"
                     responsibilities={[
                        "Developed a movie/TV show discovery platform using the TMDB API.",
                        "Optimized API calls, reducing HTTP requests and improving performance.",
                        "Enhanced UI/UX by implementing efficient state management and fast-loading pages.",
                     ]}
                  />
                  <Experience
                     role="AirSketch | Virtual Canvas App"
                     period="Jan'24"
                     responsibilities={[
                        "Engineered a virtual drawing application using OpenCV, enabling real-time hand gesture recognition for intuitive digital sketching.",
                        "Designed an interactive interface with a color palette, enhancing the user experience for seamless artistic expression.",
                     ]}
                  />
               </Section>

               {/* Education */}
               <Section title="Education">
                  <Experience
                     role="Marwadi University, Rajkot, India"
                     period="2021-2025"
                     responsibilities={[
                        "B.E. in Computer Engineering (Specialization in Artificial Intelligence)",
                     ]}
                  />
               </Section>

               {/* Position of Responsibility */}
               <Section title="Position of Responsibility">
                  <Experience
                     role="OpenCV Club | Founder & Lead"
                     period="Oct'24"
                     responsibilities={[
                        "Organized events and raised awareness about computer vision and AI.",
                        "Showcased multiple projects and interactive sessions for engaging learning.",
                     ]}
                  />
               </Section>

               {/* Achievements & Certifications */}
               <Section title="Achievements & Certifications">
                  <ul className="list-disc list-inside text-sm">
                     {achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                     ))}
                  </ul>
               </Section>
            </div>
         </div>
      </div>
   );
};

function Section({ title, children }) {
   return (
      <div className="mt-8">
         <h3 className="border-b pb-2 text-lg font-semibold">{title}</h3>
         <div className="mt-2">{children}</div>
      </div>
   );
}

function Experience({ role, period, responsibilities }) {
   return (
      <div className="mt-4">
         <div className="flex justify-between text-sm font-medium">
            <p>{role}</p>
            <p>{period}</p>
         </div>
         <ul className="list-disc list-inside text-sm mt-2">
            {responsibilities.map((item, index) => (
               <li key={index}>{item}</li>
            ))}
         </ul>
      </div>
   );
}

export const achievements = [
   "Patent Holder: Published a patent in Computer Science during the 3rd year of engineering.",
   "GSSoC-extd’24 Worldwide Rank 32nd out of 60K+ Contributors.",
   "Hacktoberfest’24 Challenge Winner.",
   "Active Open-Source Contributor on GitHub.",
   "Advancing: Google Data Analytics Professional Course (with 90+ percentage).",
   "IBM Machine Learning: Completed with Honors.",
   "University of California Object-Oriented Programming in Java: Achieved 97%.",
   "University of Michigan Programming for Everybody: Achieved 98.34%.",
   "Infosys Springboard: Artificial Intelligence Human-computer Interaction Methodologies",
   "Cisco Network Academy: Data Analytics Essentials.",
];

export default ResumePage;
