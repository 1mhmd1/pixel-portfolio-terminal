import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Skills",
      skills: [
        "React.js & Component Architecture",
        "Tailwind CSS & Responsive Design",
        "DOM Manipulation & Interactive UI",
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
      ],
    },
    {
      title: "Backend Skills",
      skills: [
        "Django & Python",
        "Laravel & PHP",
        "RESTful API Design",
        "MVC Architecture",
        "PostgreSQL & MySQL",
      ],
    },
    {
      title: "Tools & Libraries",
      skills: [
        "Git & GitHub",
        "NumPy, Pandas, Matplotlib",
        "Postman & API Testing",
        "n8n Automation",
        "LangChain/LlamaIndex",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Team Collaboration",
        "Quick Learner",
        "Problem Solving",
        "Work Under Pressure",
        "Strong Communication",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-pixel text-xl md:text-2xl text-primary drop-shadow-[0_0_10px_hsl(120_100%_50%/0.5)] mb-12">
          <span className="text-muted-foreground">&gt;</span> skills
        </h2>

        <div className="border border-border bg-card p-4 shadow-[inset_0_0_30px_hsl(120_100%_50%/0.05)]">
          <div className="font-terminal text-xl mb-6">
            <span className="text-primary">$</span> cat skills.json
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="border border-border p-4">
                <h3 className="font-pixel text-xs text-accent mb-4">
                  {"{"}"{category.title}":{"]"}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="font-terminal text-lg text-muted-foreground flex items-center gap-2"
                    >
                      <span className="text-primary">├──</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 font-terminal text-primary">
            <span className="animate-[blink_1s_infinite]">_</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
