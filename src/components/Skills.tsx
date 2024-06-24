import React from "react";
import "./Skills.css";

const skills = [
  { name: "JavaScript", level: 75 },
  { name: "TypeScript", level: 55 },
  { name: "React", level: 60 },
  { name: "Angular", level: 10 },
  { name: "Python", level: 50 },
  { name: "FastAPI", level: 15 },
  { name: "Flask", level: 10 },
  { name: "Next.js", level: 10 },
  { name: "SonarCloud", level: 5 },
  { name: "Gcloud and Kubernetes", level: 15 },
  { name: "Web Scraping with Python", level: 80 },
  { name: "Web Development - Chrome Extensions", level: 40 },
];

const SkillBar: React.FC<{ skill: { name: string; level: number } }> = ({
  skill,
}) => (
  <div className="skill-bar">
    <span className="skill-name">{skill.name}</span>
    <div className="skill-level">
      <div className="level" style={{ width: `${skill.level}%` }}></div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      {skills.map((skill) => (
        <SkillBar key={skill.name} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;
