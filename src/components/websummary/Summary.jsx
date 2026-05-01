
const Summary = () => {
  return (
    <div className="flex flex-col gap-16 max-w-4xl mx-auto p-5">
        <div className="space-y-2">
        <h1 className="font-dmserif text-2xl">Summary</h1>
        <hr />
      <p className="text-justify">
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
      <div className="space-y-4">
        <h1 className="font-dmserif text-2xl underline underline-offset-4">Technical Skills</h1>

        <ul className="list-inside list-disc max-w-3xl mx-auto space-y-4">
            <li><span className="font-bold">Languages</span> : TypeScript, JavaScript, HTML, CSS</li>
            <li><span className="font-bold">Frameworks & Libraries</span> : React, Next.js, Node.js, Express, Shadcn/UI, Tailwind CSS, Radix UI, Chakra UI, MUI</li>
            <li><span className="font-bold">Databases & ORMs</span> : MySQL, Prisma, Firebase (Firestore), MongoDB</li>
            <li><span className="font-bold">Tools & Platforms</span> : Git, Vercel, n8n, Figma, Canva, Jira</li>
            <li><span className="font-bold">Other</span> : REST APIs, Responsive Design, UI/UX, Automation Workflows</li>
        </ul>
      </div>
{/* --------------------------------------------- */}
      <div className="space-y-4">
        <h1 className="underline underline-offset-4 font-dmserif text-2xl">Experience</h1>
        <div className="flex flex-col gap-10">
          <div className="space-y-4">
            <div>
            <h1 className="font-bold text-[#3bd595]">Graphice Designer (2023 - Present)</h1>
            <h1 className="text-lg">junior Ui/Ux Designer. Brain Craft Ltd. Mahakali, Dhaka</h1>
            </div>
            <ul className="list-disc list-inside max-w-3xl mx-auto space-y-2">
                <li>Learn and apply UI/UX design principles</li>
                <li>Create designs using Figma/Photoshop/Illustrator</li>
                <li>Design visual elements for web and mobile applications</li>
                <li>Implement designs in coordination with developers.</li>
            </ul>
        </div>
{/* 5c87f8-bc94f5-3bd595 */}
        <div className="space-y-4">
          <div>
            <h1 className="font-bold text-[#3bd595]">Data Analyst august (2023 - Present)</h1>
            <h1 className="text-lg">Senior Data Analyst Brain Craft Ltd. Mahakali, Dhaka</h1>
            </div>
            <ul className="list-disc list-inside max-w-3xl mx-auto space-y-2">
                <li>Data storage and management in software databases</li>
                <li>Experience in data validation and quality check processes</li>
                <li>Working in coordination with teams</li>
                <li>Opportunity to see and understand the work of software development teams up close</li>
            </ul>
        </div>

        <div className="space-y-4">
          <div>
            <h1 className="font-bold text-[#3bd595]">Photo Editor January (2021 - 2023)</h1>
            <h1 className="text-lg">Middle Level Photo editor, Cat Out (pixel perfect), Gaibandha</h1>
          </div>  
            <ul className="list-disc list-inside max-w-3xl mx-auto space-y-2">
                <li>Acquire image manipulation and retouching skills</li>
                <li>Learn to understand design principles and visual communication</li>
                <li>Experience working with clients</li>
            </ul>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Summary;
