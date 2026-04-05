
const Summary = () => {
  return (
    <div className="max-w-4xl mx-auto">
        <div className="space-y-2">
        <h1 className="font-dmserif text-2xl">Summary</h1>
        <hr />
      <p>
        Full-Stack Web Developer with hands-on experience delivering scalable,
        high-performance applications for startups and international clients.
        Skilled in building responsive, maintainable solutions using modern
        technologies like React, Next.js, TypeScript, MongoDB Node.js, Supabase
        and Prisma, with a strong focus on clean architecture and efficient
        workflows. Experienced in integrating APIs, managing databases, and
        deploying applications to production. Proven track record of delivering
        projects end-to-end in fast-paced, agile-environments.
      </p>
      </div>
      {/* -------------------------------- */}
      <div className="space-y-2">
        <h1 className="font-dmserif text-2xl underline underline-offset-4">Technical Skills</h1>

        <ul className=" list-inside list-disc max-w-3xl mx-auto">
            <li>Languages: TypeScript, JavaScript, HTML, CSS</li>
            <li>Frameworks & Libraries: React, Next.js, Node.js, Express, Shadcn/UI, Tailwind CSS, Radix UI, Chakra UI, MUI</li>
            <li>Databases & ORMs: MySQL, Prisma, Firebase (Firestore), MongoDB</li>
            <li>Tools & Platforms: Git, Vercel, n8n, Figma, Canva, Jira</li>
            <li>Other: REST APIs, Responsive Design, UI/UX, Automation Workflows</li>
        </ul>
      </div>
{/* --------------------------------------------- */}
      <div>
        <h1 className="underline underline-offset-4 font-dmserif text-2xl">Experience</h1>

        <div>
            <h1 className="text-lg">Forthlogic AI (US-Based) (July 2025 –Present)</h1>
            <h1 className="text-lg">Full Stack Developer, Remote</h1>
            <ul className="list-disc list-inside max-w-3xl mx-auto">
                <li>Built and maintained Node.js backend APIs for AI-driven calling, booking, and conversation workflows.</li>
                <li>Designed and optimized MongoDB schemas for conversations, users, appointments, and analytics data.</li>
                <li>Built and maintained Node.js backend APIs for AI-driven calling, booking, and conversation workflows.</li>
                <li>Created automation workflows in n8n to streamline AI agent operations and data pipelines.</li>
                <li>Built and maintained Node.js backend APIs for AI-driven calling, booking, and conversation workflows.</li>
                <li>Built and maintained Node.js backend APIs for AI-driven calling, booking, and conversation workflows.</li>
                <li>Improved performance, data handling, and API reliability across the full stack.</li>
            </ul>
        </div>

        <div>
            <h1 className="text-lg">Alphabase (US-Based) (Nov 2024 – May 2025)</h1>
            <h1 className="text-lg">Frontend Intern, NSTP, Islamabad, Pakistan</h1>
            <ul className="list-disc list-inside max-w-3xl mx-auto">
                <li>Built AI image generator workflow in n8n, integrating frontend with backend APIs.</li>
                <li>Developed responsive UIs in Next.js/Tailwind, focusing on performance and usability.</li>
                <li>Worked on automations and AI workflows, shipping features that improved team efficiency.</li>
            </ul>
        </div>        
      </div>
    </div>
  );
};

export default Summary;
